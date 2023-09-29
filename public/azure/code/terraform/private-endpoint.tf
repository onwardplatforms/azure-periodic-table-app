resource "azurerm_private_endpoint" "main" {
  name                = "pep-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  subnet_id           = azurerm_subnet.endpoint.id

  private_service_connection {
    name                           = "example-privateserviceconnection"
    private_connection_resource_id = azurerm_private_link_service.main.id
    is_manual_connection           = false
  }

  tags = var.tags
}