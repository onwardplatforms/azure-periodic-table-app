resource "azurerm_app_configuration" "appconf" {
  name                = "appcs-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
}