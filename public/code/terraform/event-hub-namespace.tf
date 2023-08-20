resource "azurerm_eventhub_namespace" "main" {
  name                = "evhns-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard"
  capacity            = 2

  tags = var.tags
}