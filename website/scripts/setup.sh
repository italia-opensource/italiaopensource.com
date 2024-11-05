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
  echo "## Setup: italiaopensource.com website"

  local _arg_virtualenv=${1:-true}

  cd "${WORKDIR}"

  yarn install --frozen-lockfile --immutable

  pip install -r requirements.txt
}

main "$@"

