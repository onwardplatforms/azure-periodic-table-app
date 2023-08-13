resource "azurerm_notification_hub" "main" {
  name                = "nft-${local.naming_suffix}"
  namespace_name      = azurerm_notification_hub_namespace.main.name
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
}