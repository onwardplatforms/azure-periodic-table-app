resource symbolicname 'Microsoft.AppConfiguration/configurationStores@2023-03-01' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    name: 'string'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    createMode: 'string'
    disableLocalAuth: bool
    enablePurgeProtection: bool
    encryption: {
      keyVaultProperties: {
        identityClientId: 'string'
        keyIdentifier: 'string'
      }
    }
    publicNetworkAccess: 'string'
    softDeleteRetentionInDays: int
  }
}
