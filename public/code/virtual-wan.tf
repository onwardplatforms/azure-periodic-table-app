resource "azurerm_virtual_wan" "main" {
  name                = "vwan-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
}