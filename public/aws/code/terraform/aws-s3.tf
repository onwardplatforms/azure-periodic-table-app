resource "aws_s3_bucket" "main" {
  bucket = "my-tf-test-bucket"

  tags = var.tags
}