resource "azurerm_app_service_environment" "main" {
  name                         = "ase-${local.naming_suffix}"
  resource_group_name          = azurerm_resource_group.main.name
  subnet_id                    = azurerm_subnet.ase.id
  pricing_tier                 = "I2"
  front_end_scale_factor       = 10
  internal_load_balancing_mode = "Web, Publishing"
  allowed_user_ip_cidrs        = ["11.22.33.44/32", "55.66.77.0/24"]

  cluster_setting {
    name  = "DisableTls1.0"
    value = "1"
  }
}