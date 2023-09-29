resource symbolicname 'Microsoft.Maps/accounts@2021-12-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    name: 'string'
  }
  kind: 'string'
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    cors: {
      corsRules: [
        {
          allowedOrigins: [
            'string'
          ]
        }
      ]
    }
    disableLocalAuth: bool
    linkedResources: [
      {
        id: 'string'
        uniqueName: 'string'
      }
    ]
  }
}
