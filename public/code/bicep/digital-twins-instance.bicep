resource symbolicname 'Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31' = {
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
    privateEndpointConnections: [
      {
        properties: {
          groupIds: [
            'string'
          ]
          privateEndpoint: {}
          privateLinkServiceConnectionState: {
            actionsRequired: 'string'
            description: 'string'
            status: 'string'
          }
        }
      }
    ]
    publicNetworkAccess: 'string'
  }
}
