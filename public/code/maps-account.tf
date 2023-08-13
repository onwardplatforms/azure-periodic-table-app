resource "azurerm_maps_account" "main" {
  name                = "map-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  sku_name            = "S1"

  tags = var.tags
}