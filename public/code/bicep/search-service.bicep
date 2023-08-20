resource symbolicname 'Microsoft.Search/searchServices@2022-09-01' = {
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
  }
  properties: {
    authOptions: {
      aadOrApiKey: {
        aadAuthFailureMode: 'string'
      }
      apiKeyOnly: any()
    }
    disableLocalAuth: bool
    encryptionWithCmk: {
      enforcement: 'string'
    }
    hostingMode: 'string'
    networkRuleSet: {
      ipRules: [
        {
          value: 'string'
        }
      ]
    }
    partitionCount: int
    publicNetworkAccess: 'string'
    replicaCount: int
  }
}
