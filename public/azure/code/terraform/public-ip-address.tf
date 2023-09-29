resource "azurerm_public_ip" "main" {
  name                = "pip-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  allocation_method   = "Static"

  tags = var.tags
}