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

setup_virtualenv(){
  mkdir -pv .venv

  if [[ "$(python3 --version)" == *"Python 3.12"* ]] ; then
    python3 -m venv .venv
  else
    pip3 install --upgrade virtualenv
    python3 -m virtualenv .venv
  fi
}

main(){
  echo "## Setup: project deps"

  local _arg_virtualenv=${1:-true}

  cd "${WORKDIR}"

  if [[ "${_arg_virtualenv}" == "true" ]]; then
    setup_virtualenv

    # shellcheck disable=SC1091
    source .activate
  fi

  python3 -m pip install --upgrade pip
  python3 -m pip install wheel

  pip3 install -r requirements.txt
  pre-commit install

  tflint || curl -s https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash
}

main "$@"
