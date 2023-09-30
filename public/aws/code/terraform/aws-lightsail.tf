resource "aws_lightsail_instance" "gitlab_test" {
  name              = "als-${local.naming_suffix}"
  availability_zone = "us-east-1b"
  blueprint_id      = "amazon_linux_2"
  bundle_id         = "nano_1_0"
  key_pair_name     = "some_key_name"
  tags              = var.tags
}