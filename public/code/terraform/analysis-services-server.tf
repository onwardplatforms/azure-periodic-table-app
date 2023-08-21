resource "azurerm_analysis_services_server" "server" {
  name                    = "as${local.naming_suffix}"
  location                = azurerm_resource_group.main.location
  resource_group_name     = azurerm_resource_group.main.name
  sku                     = "S0"
  admin_users             = ["myuser@domain.tld"]
  enable_power_bi_service = true

  ipv4_firewall_rule {
    name        = "myRule1"
    range_start = "210.117.252.0"
    range_end   = "210.117.252.255"
  }

  tags = var.tags
}