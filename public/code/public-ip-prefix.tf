resource "azurerm_public_ip_prefix" "main" {
  name                = "ippre-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  prefix_length = 31

  tags = var.tags
}