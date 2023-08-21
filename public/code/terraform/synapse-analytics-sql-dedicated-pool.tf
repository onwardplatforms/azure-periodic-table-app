resource "azurerm_synapse_sql_pool" "main" {
  name                 = "syndp${local.naming_suffix}"
  synapse_workspace_id = azurerm_synapse_workspace.main.id
  sku_name             = "DW100c"
  create_mode          = "Default"

  tags = var.tags
}