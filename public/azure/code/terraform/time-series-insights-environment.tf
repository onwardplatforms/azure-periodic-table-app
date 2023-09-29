resource "azurerm_iot_time_series_insights_standard_environment" "main" {
  name                = "tsi-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku_name            = "S1_1"
  data_retention_time = "P30D"

  tags = var.tags
}