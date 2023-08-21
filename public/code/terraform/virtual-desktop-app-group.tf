resource "azurerm_virtual_desktop_application_group" "remoteapp" {
  name                = "vdag-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  type          = "RemoteApp"
  host_pool_id  = azurerm_virtual_desktop_host_pool.pooledbreadthfirst.id
  friendly_name = "TestAppGroup"
  description   = "Acceptance Test: An application group"
}

resource "azurerm_virtual_desktop_application_group" "desktopapp" {
  name                = "vdag-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  type          = "Desktop"
  host_pool_id  = azurerm_virtual_desktop_host_pool.personalautomatic.id
  friendly_name = "TestAppGroup"
  description   = "Acceptance Test: An application group"
}