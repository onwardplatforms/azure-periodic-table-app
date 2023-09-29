resource "azurerm_iothub_dps_certificate" "main" {
  name                = "pcert-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  iot_dps_name        = azurerm_iothub_dps.main.name

  certificate_content = filebase64("example.cer")
}