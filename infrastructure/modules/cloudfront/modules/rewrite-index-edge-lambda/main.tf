
data "archive_file" "rewrite_index" {
  type        = "zip"
  source_dir  = "${path.module}/function"
  output_path = "${path.module}/function/rewrite_index.zip"
}


data "aws_iam_policy_document" "rewrite_index" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com", "edgelambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "rewrite_index" {
  assume_role_policy = data.aws_iam_policy_document.rewrite_index.json
}


resource "aws_lambda_function" "rewrite_index" {
  filename         = "${path.module}/function/rewrite_index.zip"
  function_name    = var.function_name
  role             = aws_iam_role.rewrite_index.arn
  handler          = "app.handler"
  runtime          = "python3.12"
  timeout          = 3
  memory_size      = 128
  publish          = true
  source_code_hash = data.archive_file.rewrite_index.output_base64sha256
}

resource "aws_cloudwatch_log_group" "rewrite_index" {
  name              = "/aws/lambda/${var.function_name}"
  retention_in_days = 14
}
