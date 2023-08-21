resource "azurerm_dns_zone" "example-public" {
  name                = "dnsz-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
}