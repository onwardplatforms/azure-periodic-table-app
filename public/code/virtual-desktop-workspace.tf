resource "azurerm_virtual_desktop_workspace" "workspace" {
  name                = "vdws-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  friendly_name = "FriendlyName"
  description   = "A description of my workspace"
}