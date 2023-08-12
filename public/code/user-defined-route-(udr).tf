resource "azurerm_route" "main" {
  name                = "udr-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  route_table_name    = azurerm_route_table.main.name
  address_prefix      = "10.1.0.0/16"
  next_hop_type       = "VnetLocal"
}