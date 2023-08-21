resource "azurerm_servicebus_topic" "main" {
  name         = "sbt-${local.naming_suffix}"
  namespace_id = azurerm_servicebus_namespace.main.id

  enable_partitioning = true
}