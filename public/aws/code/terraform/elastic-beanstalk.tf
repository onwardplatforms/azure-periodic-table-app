resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "aeb-${local.naming_suffix}"
  application = "tf-test-name"
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.default.id
  key         = aws_s3_object.default.id

  tags = var.tags
}