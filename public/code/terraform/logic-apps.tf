resource "azurerm_logic_app_workflow" "main" {
  name                = "logic-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
}