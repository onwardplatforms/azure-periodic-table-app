resource "azurerm_application_security_group" "main" {
  name                = "asg-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  tags = var.tags
}