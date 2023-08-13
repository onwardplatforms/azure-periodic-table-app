resource "azurerm_firewall_policy" "main" {
  name                = "afwp-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
}