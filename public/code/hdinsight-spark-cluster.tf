resource "azurerm_hdinsight_spark_cluster" "main" {
  name                = "spark-${local.naming_suffix}"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  cluster_version     = "3.6"
  tier                = "Standard"

  component_version {
    spark = "2.3"
  }

  gateway {
    username = "acctestusrgw"
    password = "TerrAform123!"
  }

  storage_account {
    storage_container_id = azurerm_storage_container.main.id
    storage_account_key  = azurerm_storage_account.main.primary_access_key
    is_default           = true
  }

  roles {
    head_node {
      vm_size  = "Standard_A3"
      username = "acctestusrvm"
      password = "AccTestvdSC4daf986!"
    }

    worker_node {
      vm_size               = "Standard_A3"
      username              = "acctestusrvm"
      password              = "AccTestvdSC4daf986!"
      target_instance_count = 3
    }

    zookeeper_node {
      vm_size  = "Medium"
      username = "acctestusrvm"
      password = "AccTestvdSC4daf986!"
    }
  }
}