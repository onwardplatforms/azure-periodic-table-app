resource "aws_comprehend_document_classifier" "main" {
  name = "acd-${local.naming_suffix}"

  data_access_role_arn = aws_iam_role.main.arn

  language_code = "en"
  input_data_config {
    s3_uri = "s3://${aws_s3_bucket.test.bucket}/${aws_s3_object.documents.id}"
  }

  depends_on = [
    aws_iam_role_policy.main
  ]
}