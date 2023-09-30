resource "aws_ecr_repository" "foo" {
  name                 = "ecr-${local.naming_suffix}"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = var.tags
}