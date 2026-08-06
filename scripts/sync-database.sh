#!/bin/bash
#
# Usage:       ./sync-database.sh [ref] [source]
# Database:    https://github.com/italia-opensource/awesome-italia-opensource
# Description: Sync the awesome-italia-opensource `analytics/*.json` aggregates into
#              src/content/data/. Astro content collections load these arrays directly
#              (see src/content.config.ts) — no per-item Markdown conversion.
#
#   ref     git ref to sync (branch/tag/sha). Default: main. Ignored when source is a local dir.
#   source  a git URL to clone, or a local directory to copy from. Default: the GitHub repo.

set -eE -o functrace
trap 'echo "[ERROR] sync-database failed at line ${LINENO}: ${BASH_COMMAND}"' ERR
set -o pipefail

SCRIPT_PATH="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"
ROOT_PATH="$(cd "${SCRIPT_PATH}/.." && pwd)"

ARG_REF="${1:-main}"
ARG_SOURCE="${2:-https://github.com/italia-opensource/awesome-italia-opensource}"

DATA_DIR="${ROOT_PATH}/src/content/data"
TMP_DIR="${ROOT_PATH}/.sync-tmp"

cleanup() { rm -rf "${TMP_DIR}"; }
trap cleanup EXIT

main() {
  cd "${ROOT_PATH}"
  rm -rf "${TMP_DIR}"

  local analytics_dir commit_hash
  if [[ -d "${ARG_SOURCE}" ]]; then
    echo "[INFO] Using local source: ${ARG_SOURCE}"
    analytics_dir="${ARG_SOURCE}/analytics"
    commit_hash="$(git -C "${ARG_SOURCE}" rev-parse HEAD 2>/dev/null || echo "local")"
  else
    echo "[INFO] Cloning ${ARG_SOURCE} (ref: ${ARG_REF})"
    # `git clone -b` only accepts branch/tag names. The ref can also be a commit SHA (e.g.
    # dispatched by the awesome repo's release workflow), so fetch by ref instead of clone -b —
    # this works for branches, tags and SHAs alike.
    mkdir -p "${TMP_DIR}"
    git -C "${TMP_DIR}" init -q
    git -C "${TMP_DIR}" remote add origin "${ARG_SOURCE}"
    git -C "${TMP_DIR}" fetch --depth 1 origin "${ARG_REF}"
    git -C "${TMP_DIR}" checkout -q FETCH_HEAD
    analytics_dir="${TMP_DIR}/analytics"
    commit_hash="$(git -C "${TMP_DIR}" rev-parse HEAD)"
  fi

  if [[ ! -d "${analytics_dir}" ]]; then
    echo "[ERROR] analytics/ not found in source" >&2
    exit 1
  fi

  # The aggregates this site consumes. Others (startups, digital-nomads, companies,
  # languages) are intentionally not synced — the site does not have those sections.
  local wanted=(opensource.json communities.json partnership.json)

  echo "[INFO] Copying analytics aggregates into src/content/data/"
  rm -rf "${DATA_DIR}"
  mkdir -p "${DATA_DIR}"
  for f in "${wanted[@]}"; do
    if [[ -f "${analytics_dir}/${f}" ]]; then
      cp "${analytics_dir}/${f}" "${DATA_DIR}/"
    else
      echo "[WARN] ${f} not found in source, skipping"
    fi
  done

  cat >"${DATA_DIR}/metadata.json" <<EOF
{
  "database": {
    "repository": "${ARG_SOURCE}",
    "commit_hash": "${commit_hash}",
    "requested_ref": "${ARG_REF}",
    "sync_timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  }
}
EOF

  echo "[INFO] Sync complete → ${DATA_DIR}"
  ls -1 "${DATA_DIR}"
}

main "$@"
