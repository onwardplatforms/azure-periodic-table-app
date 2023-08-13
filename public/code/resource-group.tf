resource "azurerm_resource_group" "main" {
  name     = "rg-${local.naming_suffix}"
  location = var.location
}