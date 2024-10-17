locals {
  all_domain_names          = concat([for sub_domain in var.sub_domains_name : "${sub_domain}.${var.domain_name}"], [var.domain_name])
  all_domain_names_in_https = [for domain_name in local.all_domain_names : "https://${domain_name}"]

  default_tags = merge({
    "Environment" = var.environment
    "Project"     = var.project_name
  }, var.additional_tags)

  custom_error_responses = [
    {
      error_code            = 403
      response_code         = 403
      response_page_path    = "/404.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 404
      response_code         = 404
      response_page_path    = "/404.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 500
      response_code         = 503
      response_page_path    = "/500x.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 501
      response_code         = 503
      response_page_path    = "/500x.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 502
      response_code         = 503
      response_page_path    = "/500x.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 503
      response_code         = 503
      response_page_path    = "/500x.html"
      error_caching_min_ttl = 1
    },
    {
      error_code            = 504
      response_code         = 503
      response_page_path    = "/500x.html"
      error_caching_min_ttl = 1
    }
  ]
}

data "aws_route53_zone" "italiaopensource" {
  name         = var.aws_route53_domain_name
  private_zone = false
}

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
  tags   = local.default_tags

  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket                  = aws_s3_bucket.website.id
  block_public_acls       = true # Enbale if use static website mode
  block_public_policy     = true # Enbale if use static website mode
  ignore_public_acls      = true # Enbale if use static website mode
  restrict_public_buckets = true # Enbale if use static website mode
}

resource "aws_s3_bucket_cors_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = local.all_domain_names_in_https
  }
}

# Enbale if use static website mode
# resource "aws_s3_bucket_website_configuration" "website" {
#   bucket = aws_s3_bucket.website.id

#   index_document {
#     suffix = "index.html"
#   }

#   error_document {
#     key = "404.html"
#   }
# }

# Disable if use static website mode
resource "aws_cloudfront_origin_access_control" "this" {
  name                              = "italiaopensource-website-${var.environment}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

module "cloudfront" {
  source = "./modules/cloudfront"

  environment                = var.environment
  domain_name                = var.domain_name
  sub_domains_name           = var.sub_domains_name
  price_class                = "PriceClass_100"
  aws_route53_zone_id        = data.aws_route53_zone.italiaopensource.zone_id
  bucket_domain_name         = aws_s3_bucket.website.bucket_regional_domain_name # Enbale if use static website mode: aws_s3_bucket_website_configuration.website.website_endpoint
  origin_request_policy_id   = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"            # Managed-CORS-S3Origin
  custom_error_responses     = local.custom_error_responses
  enable_rewrite_edge_lambda = true # Disable if use static website mode
  origin_access_control      = aws_cloudfront_origin_access_control.this.id
  acm_certificate_arn        = var.aws_acm_certificate_arn

  tags = local.default_tags
}

# Disable if use static website mode
data "aws_iam_policy_document" "access_origin_control" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.website.arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values = [
        module.cloudfront.distribution_arn
      ]
    }
  }
}

# Disable if use static website mode
resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.access_origin_control.json
}

# Enbale if use static website mode
# resource "aws_s3_bucket_policy" "this" {
#   bucket = aws_s3_bucket.website.id

#   policy = jsonencode({
#     Version = "2012-10-17"
#     Id      = "AllowGetObjects"
#     Statement = [
#       {
#         Sid       = "AllowPublic"
#         Effect    = "Allow"
#         Principal = "*"
#         Action    = "s3:GetObject"
#         Resource  = "${aws_s3_bucket.website.arn}/*"
#       }
#     ]
#   })
# }
