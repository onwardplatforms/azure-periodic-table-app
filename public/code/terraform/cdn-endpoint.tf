resource "azurerm_cdn_endpoint" "main" {
  name                = "cdne-${local.naming_suffix}"
  profile_name        = azurerm_cdn_profile.main.name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  origin {
    name      = "main"
    host_name = "www.contoso.com"
  }

  tags = var.tags
}