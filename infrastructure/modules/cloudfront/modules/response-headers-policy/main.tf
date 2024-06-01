locals {
  # Docs: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-remove-headers
  remove_headers = distinct(concat([
    "Server",
    "X-Amzn-Server-Side-Encryption",
    "X-Amzn-Version-Id",
  ], var.remove_headers))
}

resource "aws_cloudfront_response_headers_policy" "this" {
  name = var.name

  # Docs: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example-function-add-security-headers.html
  security_headers_config {
    strict_transport_security {
      override                   = var.override
      access_control_max_age_sec = 31536000
      preload                    = true
      include_subdomains         = true
    }

    content_type_options {
      override = var.override
    }
    frame_options {
      override     = var.override
      frame_option = "SAMEORIGIN"
    }
    xss_protection {
      override   = var.override
      mode_block = true
      protection = true
    }
    referrer_policy {
      override        = var.override
      referrer_policy = "no-referrer-when-downgrade"
    }
  }

  remove_headers_config {
    dynamic "items" {
      for_each = local.remove_headers

      content {
        header = items.value
      }
    }
  }
}
