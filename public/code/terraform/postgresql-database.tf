resource "azurerm_postgresql_database" "main" {
  name                = "psqldb-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  server_name         = azurerm_postgresql_server.main.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}