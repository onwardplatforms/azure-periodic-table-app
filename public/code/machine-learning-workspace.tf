resource "azurerm_machine_learning_workspace" "main" {
  name                    = "mlw-${local.naming_suffix}"
  location                = azurerm_resource_group.main.location
  resource_group_name     = azurerm_resource_group.main.name
  application_insights_id = azurerm_application_insights.main.id
  key_vault_id            = azurerm_key_vault.main.id
  storage_account_id      = azurerm_storage_account.main.id

  identity {
    type = "SystemAssigned"
  }
}