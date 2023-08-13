resource "azurerm_local_network_gateway" "home" {
  name                = "lgw-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  gateway_address     = "12.13.14.15"
  address_space       = ["10.0.0.0/16"]
}