resource "aws_ebs_volume" "main" {
  availability_zone = "us-west-2a"
  size              = 40

  tags = var.tags
}