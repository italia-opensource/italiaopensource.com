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

  npm install -g yarn 2&> /dev/null || echo "yarn already installed"

  yarn install --frozen-lockfile --immutable

  if [[ "${_arg_virtualenv}" == "true" ]]; then
    (echo "import sys" ; echo "sys.exit(1) if sys.prefix == sys.base_prefix else sys.exit(0)") | python3 && pip3 install -r requirements.txt || echo "Active your virtualenv and retry the installation"
  else
    pip3 install -r requirements.txt
  fi
}

main "$@"

