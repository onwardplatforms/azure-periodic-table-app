resource "azurerm_network_watcher" "main" {
  name                = "nw-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
}