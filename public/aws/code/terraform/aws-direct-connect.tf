resource "aws_dx_connection" "hoge" {
  name      = "adc-${local.naming_suffix}"
  bandwidth = "1Gbps"
  location  = var.location

  tags = var.tags
}