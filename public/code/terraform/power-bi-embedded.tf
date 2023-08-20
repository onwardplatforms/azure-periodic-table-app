resource "azurerm_powerbi_embedded" "main" {
  name                = "pbi-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku_name            = "A1"
  administrators      = ["azsdktest@microsoft.com"]
}