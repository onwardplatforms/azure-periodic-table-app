resource "azurerm_batch_account" "main" {
  name                                = "ba-${local.naming_suffix}"
  resource_group_name                 = azurerm_resource_group.main.name
  location                            = azurerm_resource_group.main.location
  pool_allocation_mode                = "BatchService"
  storage_account_id                  = azurerm_storage_account.main.id
  storage_account_authentication_mode = "StorageKeys"

  tags = var.tags
}