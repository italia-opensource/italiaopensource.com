#!/bin/bash
set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

set -o pipefail

WORKDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )/.."

set_password() {
  local _arg_project="${1}"
  local _arg_config="${2}"

  if [[ -z "${_arg_project}" ]]; then
    echo "[ERROR] Project is required"
    exit 1
  fi

  if [[ -z "${_arg_config}" ]]; then
    echo "[ERROR] Config is required"
    exit 1
  fi

  echo "[INFO] Doppler config: ${_arg_config} (project: ${_arg_project})"

  # shellcheck disable=SC2207
  local _default=( $(doppler secrets download --no-file --format env-no-quotes  -p "${_arg_project}" -c "${_arg_config}") )

  echo "# Doppler secrets: ${_arg_config} (project ${_arg_project})" >> ".env.doppler"
  for _env in "${_default[@]}"; do
    # Skip Doppler environment variables DOPPLER_CONFIG DOPPLER_ENVIRONMENT DOPPLER_PROJECT
    if [[ "${_env}" == "DOPPLER_"* ]]; then
      continue
    fi
    echo "export ${_env}" >> ".env.doppler"
  done
}

main() {
  echo "[INFO] Setting up environment"

  local _environment=${1}

  if [[ -z "${_environment}" ]]; then
    echo "[ERROR] Environment is required: staging or production. Example: 'devbox run doppler staging'"
    exit 1
  fi

  local _project="global"
  local _config="organization"

  cd "${WORKDIR}"

  doppler -v || (echo "Install doppler cli: https://docs.doppler.com/docs/install-cli" && exit 1)

  touch ".env"

  touch ".env.doppler"
  echo "# Autogenerated by doppler.sh" > ".env.doppler"

  doppler setup --no-interactive --project "italiaopensource-com" --config "${_environment}"

  set_password "global" "organization"

  set_password "italiaopensource-com" "${_environment}"
}

main "$@"
