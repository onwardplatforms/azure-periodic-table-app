resource "azurerm_logic_app_integration_account" "main" {
  name                = "ia-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku_name            = "Standard"
  tags                = var.tags
}