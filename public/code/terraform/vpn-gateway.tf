resource "azurerm_vpn_gateway" "main" {
  name                = "vpng-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  virtual_hub_id      = azurerm_virtual_hub.main.id
}