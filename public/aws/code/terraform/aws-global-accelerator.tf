resource "aws_globalaccelerator_accelerator" "main" {
  name            = "aga-${local.naming_suffix}"
  ip_address_type = "IPV4"
  ip_addresses    = ["1.2.3.4"]
  enabled         = true

  attributes {
    flow_logs_enabled   = true
    flow_logs_s3_bucket = "example-bucket"
    flow_logs_s3_prefix = "flow-logs/"
  }

  tags = var.tags
}