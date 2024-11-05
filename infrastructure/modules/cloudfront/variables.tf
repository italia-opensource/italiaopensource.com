variable "environment" {
  description = "The environment to deploy the infrastructure"
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

variable "custom_error_responses" {
  description = "The custom error response for CloudFront. If is a single page application, you must add the 403 and 404 error code to redirect to the index.html page with 200 code."
  type = list(object({
    error_code            = number
    response_page_path    = string
    error_caching_min_ttl = optional(number, 0)
    response_code         = optional(number, null)
  }))
  default = []
}

variable "default_root_object" {
  description = "The default root object"
  type        = string
  default     = "index.html"
}

variable "origin_request_policy_id" {
  description = "The origin request policy ID"
  type        = string
}

variable "price_class" {
  description = "The price class for the CloudFront distribution"
  type        = string
  default     = "PriceClass_All"
}

variable "aws_route53_zone_id" {
  description = "The Route 53 zone ID"
  type        = string
  default     = ""
}

variable "acm_certificate_arn" {
  description = "The ACM certificate ARN"
  type        = string
  default     = ""

}

variable "bucket_domain_name" {
  description = "The bucket domain name"
  type        = string
}

variable "lambda_function_associations" {
  description = "The Lambda@Edge function associations"
  type = list(object({
    event_type   = string
    lambda_arn   = string
    include_body = optional(bool, false)
  }))
  default = []
}

variable "tags" {
  description = "The tags for the CloudFront distribution"
  type        = map(string)
  default     = {}
}

variable "enable_rewrite_edge_lambda" {
  description = "Whether to use the rewrite index edge lambda"
  type        = bool
  default     = false
}

variable "origin_access_control" {
  description = "The origin access control ID"
  type        = string
  default     = null
}

## ------------------------------------------------
## MODULES VARIABLES
## ------------------------------------------------

### RESPONSE HEADERS POLICIES
variable "remove_headers" {
  type        = list(string)
  description = "List of headers to remove from the response"
  default     = []
}

variable "override" {
  type        = bool
  description = "Whether to override the default response headers"
  default     = false
}
