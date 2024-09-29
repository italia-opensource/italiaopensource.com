
locals {
  all_domain_names = concat([for sub_domain in var.sub_domains_name : "${sub_domain}.${var.domain_name}"], [var.domain_name])
  # all_domain_names_in_https = [for domain_name in local.all_domain_names : "https://${domain_name}"]
  enable_website = strcontains(var.bucket_domain_name, ".s3-website.") ? true : false

  custom_origin_config_website = {
    http_port                = 80
    https_port               = 443
    origin_keepalive_timeout = 5
    origin_protocol_policy   = "http-only"
    origin_read_timeout      = 30
    origin_ssl_protocols     = ["TLSv1", "TLSv1.1", "TLSv1.2"]
  }
}

module "rewrite_index_edge_lambda" {
  count = var.enable_rewrite_edge_lambda ? 1 : 0

  source        = "./modules/rewrite-index-edge-lambda"
  function_name = "rewrite-index-${var.environment}"
}

locals {
  lambda_function_association_items = concat(
    var.enable_rewrite_edge_lambda ? [
      {
        event_type   = "viewer-request"
        lambda_arn   = module.rewrite_index_edge_lambda[0].qualified_arn
        include_body = false
      },
    ] : [],
    var.lambda_function_associations,
  )
}

resource "aws_acm_certificate" "this" {
  count = var.acm_certificate_arn == "" ? 1 : 0

  domain_name = var.domain_name
  subject_alternative_names = [
    "*.${var.domain_name}",
    var.domain_name,
  ]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }
}

resource "aws_route53_record" "acm_certificate_cname" {
  for_each = var.acm_certificate_arn == "" ? {
    for dvo in aws_acm_certificate.this[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.aws_route53_zone_id

  depends_on = [aws_acm_certificate.this]
}

module "cache_policy_default" {
  source = "./modules/cache-policy"

  providers = {
    aws = aws
  }

  min_ttl     = 60
  max_ttl     = 86400
  default_ttl = 60
  name        = "deault-${var.environment}"
  query_strings_config = {
    behavior = "all"
  }
}

module "response_headers_policy" {
  source = "./modules/response-headers-policy"

  providers = {
    aws = aws
  }

  name           = "deault-${var.environment}"
  override       = var.override
  remove_headers = var.remove_headers
}

resource "aws_cloudfront_distribution" "this" {
  enabled      = true
  aliases      = local.all_domain_names
  http_version = "http2and3"

  # S3 origin
  origin {
    domain_name              = var.bucket_domain_name
    origin_id                = var.domain_name
    origin_access_control_id = local.enable_website ? null : var.origin_access_control
    dynamic "custom_origin_config" {
      for_each = local.enable_website ? [local.custom_origin_config_website] : []

      content {
        http_port                = custom_origin_config.value.http_port
        https_port               = custom_origin_config.value.https_port
        origin_keepalive_timeout = custom_origin_config.value.origin_keepalive_timeout
        origin_protocol_policy   = custom_origin_config.value.origin_protocol_policy
        origin_read_timeout      = custom_origin_config.value.origin_read_timeout
        origin_ssl_protocols     = custom_origin_config.value.origin_ssl_protocols
      }
    }
  }

  dynamic "custom_error_response" {
    for_each = var.custom_error_responses

    content {
      error_code            = custom_error_response.value.error_code
      response_code         = custom_error_response.value.response_code == null ? custom_error_response.value.error_code : custom_error_response.value.response_code
      error_caching_min_ttl = custom_error_response.value.error_caching_min_ttl
      response_page_path    = custom_error_response.value.response_page_path
    }
  }

  is_ipv6_enabled     = true
  default_root_object = var.default_root_object
  price_class         = var.price_class

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD", "OPTIONS"]
    target_origin_id           = var.domain_name
    viewer_protocol_policy     = "redirect-to-https"
    compress                   = true
    cache_policy_id            = module.cache_policy_default.default_cache_policy_id
    origin_request_policy_id   = var.origin_request_policy_id
    response_headers_policy_id = module.response_headers_policy.default_response_headers_policy_id

    dynamic "lambda_function_association" {
      for_each = local.lambda_function_association_items

      content {
        event_type   = lambda_function_association.value.event_type
        include_body = lambda_function_association.value.include_body
        lambda_arn   = lambda_function_association.value.lambda_arn
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn == "" ? aws_acm_certificate.this[0].arn : var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = var.tags
}

resource "aws_route53_record" "this" {
  for_each = var.aws_route53_zone_id == "" ? [] : toset(local.all_domain_names)

  zone_id = var.aws_route53_zone_id
  name    = each.value
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}
