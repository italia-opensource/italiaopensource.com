provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}
