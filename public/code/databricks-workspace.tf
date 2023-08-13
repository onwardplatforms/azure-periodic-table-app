resource "azurerm_databricks_workspace" "main" {
  name                = "dbw-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = "standard"

  tags = var.tags
}