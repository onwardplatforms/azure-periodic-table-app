resource "azurerm_automation_account" "main" {
  name                = "aa-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku_name            = "Basic"

  tags = var.tags
}