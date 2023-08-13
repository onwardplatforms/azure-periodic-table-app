resource "azurerm_cdn_profile" "main" {
  name                = "cdnp-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard_Verizon"

  tags = var.tags
}