resource "aws_efs_file_system" "foo" {
  creation_token = "my-product"

  tags = var.tags
}