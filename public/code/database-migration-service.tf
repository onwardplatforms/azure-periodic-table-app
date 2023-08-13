resource "azurerm_database_migration_service" "main" {
  name                = "dms-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  subnet_id           = azurerm_subnet.main.id
  sku_name            = "Standard_1vCores"
}