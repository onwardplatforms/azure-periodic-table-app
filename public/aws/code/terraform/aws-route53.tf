resource "aws_route53_zone" "primary" {
  name = "ar53-${local.naming_suffix}"

  tags = var.tags
}