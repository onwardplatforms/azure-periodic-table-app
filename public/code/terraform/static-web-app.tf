resource "azurerm_static_site" "main" {
  name                = "stapp-${local.naming_suffix}"
  resource_group_name = "main"
  location            = var.location

  tags = var.tags
}