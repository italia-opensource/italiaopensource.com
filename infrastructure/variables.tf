variable "environment" {
  description = "The environment to deploy the infrastructure"
  type        = string
}

variable "project_name" {
  description = "The project name"
  type        = string
}

variable "bucket_name" {
  description = "The bucket name"
  type        = string
}

variable "additional_tags" {
  description = "Additional tags to add to the resources"
  type        = map(string)
  default     = {}
}

variable "aws_region" {
  description = "The AWS region"
  type        = string
}

variable "domain_name" {
  description = "The domain name for the website"
  type        = string
}

variable "sub_domains_name" {
  description = "The subdomains for the website"
  type        = list(string)
}
