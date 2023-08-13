resource "azurerm_shared_image_gallery" "main" {
  name                = "gal${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  description         = "Shared images and things."

  tags = var.tags
}