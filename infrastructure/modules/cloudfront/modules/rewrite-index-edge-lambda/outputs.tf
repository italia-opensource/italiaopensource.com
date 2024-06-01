output "arn" {
  value = aws_lambda_function.rewrite_index.arn
}

output "qualified_arn" {
  value = aws_lambda_function.rewrite_index.qualified_arn
}
