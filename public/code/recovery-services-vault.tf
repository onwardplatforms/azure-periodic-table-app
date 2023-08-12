resource "azurerm_recovery_services_vault" "vault" {
  name                = "rsv-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard"

  soft_delete_enabled = true
}