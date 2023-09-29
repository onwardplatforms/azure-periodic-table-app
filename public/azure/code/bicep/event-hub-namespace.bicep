resource symbolicname 'Microsoft.EventHub/namespaces@2022-10-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    name: 'string'
    tier: 'string'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    alternateName: 'string'
    clusterArmId: 'string'
    disableLocalAuth: bool
    encryption: {
      keySource: 'Microsoft.KeyVault'
      keyVaultProperties: [
        {
          identity: {
            userAssignedIdentity: 'string'
          }
          keyName: 'string'
          keyVaultUri: 'string'
          keyVersion: 'string'
        }
      ]
      requireInfrastructureEncryption: bool
    }
    isAutoInflateEnabled: bool
    kafkaEnabled: bool
    maximumThroughputUnits: int
    minimumTlsVersion: 'string'
    privateEndpointConnections: [
      {
        properties: {
          privateEndpoint: {
            id: 'string'
          }
          privateLinkServiceConnectionState: {
            description: 'string'
            status: 'string'
          }
          provisioningState: 'string'
        }
      }
    ]
    publicNetworkAccess: 'string'
    zoneRedundant: bool
  }
}
