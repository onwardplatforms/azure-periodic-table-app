resource "azurerm_snapshot" "main" {
  name                = "snap-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  create_option       = "Copy"
  source_uri          = azurerm_managed_disk.main.id
}