resource "azurerm_signalr_service" "main" {
  name                = "sigr-${local.naming_suffix}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  sku {
    name     = "Free_F1"
    capacity = 1
  }

  cors {
    allowed_origins = ["http://www.main.com"]
  }

  public_network_access_enabled = false

  connectivity_logs_enabled = true
  messaging_logs_enabled    = true
  service_mode              = "Default"

  upstream_endpoint {
    category_pattern = ["connections", "messages"]
    event_pattern    = ["*"]
    hub_pattern      = ["hub1"]
    url_template     = "http://foo.com"
  }

  tags = var.tags
}