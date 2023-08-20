resource "azurerm_servicebus_queue" "main" {
  name         = "sbq-${local.naming_suffix}"
  namespace_id = azurerm_servicebus_namespace.main.id

  enable_partitioning = true
}