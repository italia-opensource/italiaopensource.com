#!/bin/bash
set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

set -o pipefail

BASEDIR="$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)")"

main(){
  echo "## Download: italiaopensource.com data"
  cd "${BASEDIR}"

  local _arg_hash_commit=${1:-"latest"}

  local _source="https://github.com/italia-opensource/awesome-italia-opensource.git"

  git clone ${_source} database/awesome-italia-opensource
  cd database/awesome-italia-opensource
  local _hash
  _hash="$(git rev-parse --short HEAD)"
  if [[ "${_arg_hash_commit}" != "latest" ]]; then
    git checkout "${_arg_hash_commit}"
    _hash="${_arg_hash_commit}"
  fi
  cd -
  
	mv database/awesome-italia-opensource/analytics/* database/
	
  rm -rf database/awesome-italia-opensource
  rm -rf database/README.md

  cat <<EOF > database/metadata.json
{
  "hash": "${_hash}",
  "ref": "${_source}?ref=${_hash}",
  "source": "${_source}",
  "date": "$(date -u)"
}
EOF
}

main "$@"

