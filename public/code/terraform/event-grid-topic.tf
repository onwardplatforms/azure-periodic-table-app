resource "azurerm_eventgrid_topic" "main" {
  name                = "evgt-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  tags = var.tags
}