resource symbolicname 'Microsoft.Cdn/profiles@2022-11-01-preview' = {
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
    extendedProperties: {}
    originResponseTimeoutSeconds: int
  }
}
