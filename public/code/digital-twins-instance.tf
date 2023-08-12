resource "azurerm_digital_twins_instance" "main" {
  name                = "dt-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location

  tags = var.tags
}