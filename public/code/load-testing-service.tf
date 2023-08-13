resource "azurerm_load_test" "main" {
  location            = azurerm_resource_group.main.location
  name                = "lt-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
}