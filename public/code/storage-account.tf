resource "azurerm_storage_account" "main" {
  name                     = "st${local.naming_suffix}"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = var.tags
}