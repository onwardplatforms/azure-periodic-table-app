resource "azurerm_windows_web_app" "main" {
  name                = "app-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_service_plan.main.location
  service_plan_id     = azurerm_service_plan.main.id

  site_config {}

  tags = var.tags
}