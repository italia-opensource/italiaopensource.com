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
  echo "## Setup: italiaopensource.com website"

  cd "${BASEDIR}"

  yarn install --frozen-lockfile --immutable
}

main "$@"

