variable "name" {
  description = "The name of the cache policy"
  type        = string
}

variable "description" {
  description = "A description of the cache policy"
  default     = "Default cache policy"
  type        = string
}

variable "default_ttl" {
  type        = number
  default     = 60
  description = "Default amount of time (in seconds) that an object is in a CloudFront cache"
}

variable "min_ttl" {
  type        = number
  default     = 0
  description = "Minimum amount of time that you want objects to stay in CloudFront caches"
}

variable "max_ttl" {
  type        = number
  default     = 31536000
  description = "Maximum amount of time (in seconds) that an object is in a CloudFront cache"
}

variable "allow_gzip" {
  type        = bool
  default     = true
  description = "A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin."
}

variable "allow_brotli" {
  type        = bool
  default     = true
  description = "A flag that can affect whether the Accept-Encoding HTTP header is included in the cache key and included in requests that CloudFront sends to the origin."
}

variable "cookies_config" {
  type = object({
    behavior = string
    items    = optional(list(string))
  })
  default     = { behavior = "none" }
  description = "Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin"
}

variable "headers_config" {
  type = object({
    behavior = string
    items    = optional(list(string))
  })
  default     = { behavior = "none" }
  description = "Object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin"
}

variable "query_strings_config" {
  type = object({
    behavior = string
    items    = optional(list(string))
  })
  default     = { behavior = "none" }
  description = "Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin"
}
