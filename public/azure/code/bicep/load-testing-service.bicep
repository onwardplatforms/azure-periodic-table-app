resource symbolicname 'Microsoft.LoadTestService/loadTests@2022-12-01' = {
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
    description: 'string'
    encryption: {
      identity: {
        resourceId: 'string'
        type: 'string'
      }
      keyUrl: 'string'
    }
  }
}
