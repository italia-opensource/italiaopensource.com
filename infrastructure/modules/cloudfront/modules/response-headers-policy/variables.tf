variable "name" {
  description = "The name of the response policy"
  type        = string
}

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
