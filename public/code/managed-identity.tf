resource "azurerm_user_assigned_identity" "main" {
  location            = azurerm_resource_group.main.location
  name                = "id-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
}