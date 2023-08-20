resource symbolicname 'Microsoft.Automation/automationAccounts@2022-08-08' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    disableLocalAuth: bool
    encryption: {
      identity: {
        userAssignedIdentity: any()
      }
      keySource: 'string'
      keyVaultProperties: {
        keyName: 'string'
        keyvaultUri: 'string'
        keyVersion: 'string'
      }
    }
    publicNetworkAccess: bool
    sku: {
      capacity: int
      family: 'string'
      name: 'string'
    }
  }
}
