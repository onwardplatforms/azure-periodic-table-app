data "azurerm_subscription" "current" {
}

resource "azurerm_management_group" "example_parent" {
  display_name = "ParentGroup"

  subscription_ids = [
    data.azurerm_subscription.current.subscription_id,
  ]
}

resource "azurerm_management_group" "example_child" {
  display_name               = "ChildGroup"
  parent_management_group_id = azurerm_management_group.main_parent.id

  subscription_ids = [
    data.azurerm_subscription.current.subscription_id,
  ]
  # other subscription IDs can go here
}