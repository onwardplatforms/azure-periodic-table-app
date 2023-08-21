resource "azurerm_virtual_network_peering" "example-1" {
  name                      = "peer-${local.naming_suffix}"
  resource_group_name       = azurerm_resource_group.main.name
  virtual_network_name      = azurerm_virtual_network.main-1.name
  remote_virtual_network_id = azurerm_virtual_network.main-2.id
}

resource "azurerm_virtual_network_peering" "example-2" {
  name                      = "peer-${local.naming_suffix}"
  resource_group_name       = azurerm_resource_group.main.name
  virtual_network_name      = azurerm_virtual_network.main-2.name
  remote_virtual_network_id = azurerm_virtual_network.main-1.id
}