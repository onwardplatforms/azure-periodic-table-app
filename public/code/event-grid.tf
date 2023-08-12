resource "azurerm_eventgrid_domain" "main" {
  name                = "evgd-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  tags = var.tags
}