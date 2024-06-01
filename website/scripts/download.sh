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

main(){
  echo "## Download: italiaopensource.com data"
  cd "${WORKDIR}"

  local _source="https://github.com/italia-opensource/awesome-italia-opensource.git"

  git clone ${_source} database/awesome-italia-opensource
  cd database/awesome-italia-opensource
  local _hash="$(git rev-parse --short HEAD)"
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

