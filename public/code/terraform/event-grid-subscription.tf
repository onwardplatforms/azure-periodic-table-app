resource "azurerm_eventgrid_event_subscription" "main" {
  name  = "egst-${local.naming_suffix}"
  scope = azurerm_resource_group.main.id

  storage_queue_endpoint {
    storage_account_id = azurerm_storage_account.main.id
    queue_name         = azurerm_storage_queue.main.name
  }
}