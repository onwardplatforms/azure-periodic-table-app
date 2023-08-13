resource "azurerm_data_factory" "main" {
  name                = "adf-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
}