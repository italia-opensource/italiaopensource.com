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
  echo "## Deploy: website to S3"
  cd "${BASEDIR}"

  local _bucket_name=${1}

  if [ -z "${_bucket_name}" ]; then
    echo "Error: missing bucket name"
    exit 1
  fi

  echo "Deploying to bucket: ${_bucket_name}"

  aws s3 sync --delete build/ s3://"${_bucket_name}"/
}

main "$@"
