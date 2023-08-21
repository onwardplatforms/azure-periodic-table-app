resource "azurerm_eventhub" "main" {
  name                = "evh-${local.naming_suffix}"
  namespace_name      = azurerm_eventhub_namespace.main.name
  resource_group_name = azurerm_resource_group.main.name
  partition_count     = 2
  message_retention   = 1
}