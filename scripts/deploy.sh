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
  echo "## Deploy: website to S3"

  local _bucket_name=$(cat infrastructure/env/secrets.tfvars | grep bucket_name | cut -d\  -f 3 | xargs)

  if [ -z "${_bucket_name}" ]; then
    echo "Error: missing bucket name"
    exit 1
  fi

  cd ${WORKDIR}/website

  aws s3 sync --delete build/ s3://${_bucket_name}/
}

main "$@"
