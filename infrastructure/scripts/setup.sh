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


check_arg() {
  local _arg_name=${1}
  local _arg_value=${2}

  if [[ -z "${_arg_value}" ]]; then
    echo "Error: missing ${_arg_name}"
    exit 1
  fi
}

set_tf_var() {
  local _arg_name=${1}
  local _arg_value=${2}

  check_arg "name" "${_arg_name}"
  check_arg "value" "${_arg_value}"

  export TF_VAR_${_arg_name}="${_arg_value}"
  echo "::add-mask::${_arg_value}"

  echo "${_arg_name} = \"${_arg_value}\"" >> env/secrets.tfvars
}

create_backend_s3(){
    local _arg_bucket_name=${1}
    echo "## Setup s3 backend"

cat << EOF > backend.tf
terraform {
  backend "s3" {
    bucket = "${_arg_bucket_name}"
    key    = "website"
    region = "eu-central-1"
  }
}
EOF
}

create_backend_local(){
  echo "## Setup local backend"

  cat << EOF > backend.tf
terraform {
  backend "local" {
    path = "terraform.tfstate"
  }
}
EOF
}

main(){
  cd ${WORKDIR}

  echo "## Setup: infrastructure project"
  local _arg_workspace=${1}

  check_arg "WORKSPACE" "${_arg_workspace}"
  check_arg "AWS_ACCOUNT_ID" "${AWS_ACCOUNT_ID}"
  check_arg "AWS_DEFAULT_REGION" "${AWS_DEFAULT_REGION}"

  if [[ -z "${AWS_TERRAFORM_STATE_BUCKET}" ]] || [[ "${AWS_TERRAFORM_STATE_BUCKET}" == "" ]]; then
    create_backend_local
else
    create_backend_s3 ${AWS_TERRAFORM_STATE_BUCKET}
  fi

  rm -f env/secrets.tfvars
  set_tf_var "aws_region" "${AWS_DEFAULT_REGION}"
  set_tf_var "bucket_name" "italiaopensource.com-website-${AWS_ACCOUNT_ID}-${_arg_workspace}"

	terraform init

	terraform workspace select -or-create=true ${_arg_workspace}
}

main "$@"
