resource "azurerm_cognitive_account" "main" {
  name                = "lang-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  kind                = "Face"

  sku_name = "S0"

  tags = var.tags
}