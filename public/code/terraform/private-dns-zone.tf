resource "azurerm_private_dns_zone" "main" {
  name                = "pdnsz-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
}