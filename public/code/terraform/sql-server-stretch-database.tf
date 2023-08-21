resource "azurerm_sql_database" "main" {
  name                = "sqlstrdb-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  server_name         = azurerm_sql_server.main.name

  tags = var.tags
}