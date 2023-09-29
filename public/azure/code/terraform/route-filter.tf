resource "azurerm_route_filter" "main" {
  name                = "rf-${local.naming_suffix}"
  resource_group_name = "main"
  location            = var.location

  rule {
    name        = "rule"
    access      = "Allow"
    rule_type   = "Community"
    communities = ["12076:52004"]
  }

  tags = var.tags
}