resource "azurerm_servicebus_namespace" "main" {
  name                = "sbns-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard"

  tags = var.tags
}