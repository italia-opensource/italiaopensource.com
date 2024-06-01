resource "aws_cloudfront_cache_policy" "this" {
  name        = var.name
  comment     = var.description
  default_ttl = var.default_ttl
  max_ttl     = var.max_ttl
  min_ttl     = var.min_ttl

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = var.allow_brotli
    enable_accept_encoding_gzip   = var.allow_gzip

    cookies_config {
      cookie_behavior = var.cookies_config.behavior

      dynamic "cookies" {
        for_each = var.cookies_config.items != null ? [true] : []
        content {
          items = var.cookies_config.items
        }
      }
    }

    headers_config {
      header_behavior = var.headers_config.behavior

      dynamic "headers" {
        for_each = var.headers_config.items != null ? [true] : []
        content {
          items = var.headers_config.items
        }
      }
    }

    query_strings_config {
      query_string_behavior = var.query_strings_config.behavior

      dynamic "query_strings" {
        for_each = var.query_strings_config.items != null ? [true] : []
        content {
          items = var.query_strings_config.items
        }
      }
    }
  }
}
