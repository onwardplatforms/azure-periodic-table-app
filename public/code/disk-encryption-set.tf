resource "azurerm_disk_encryption_set" "main" {
  name                = "des-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  key_vault_key_id    = azurerm_key_vault_key.main.id

  identity {
    type = "SystemAssigned"
  }
}