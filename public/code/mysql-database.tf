resource "azurerm_mysql_database" "main" {
  name                = "mysqldb-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  server_name         = azurerm_mysql_server.main.name
  charset             = "utf8"
  collation           = "utf8_unicode_ci"
}