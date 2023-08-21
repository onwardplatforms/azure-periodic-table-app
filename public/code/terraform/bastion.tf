resource "azurerm_bastion_host" "main" {
  name                = "bas-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  ip_configuration {
    name                 = "configuration"
    subnet_id            = azurerm_subnet.main.id
    public_ip_address_id = azurerm_public_ip.main.id
  }

  tags = var.tags
}