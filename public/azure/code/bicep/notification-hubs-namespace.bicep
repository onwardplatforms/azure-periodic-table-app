resource symbolicname 'Microsoft.NotificationHubs/namespaces@2017-04-01' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    family: 'string'
    name: 'string'
    size: 'string'
    tier: 'string'
  }
  properties: {
    createdAt: 'string'
    critical: bool
    dataCenter: 'string'
    enabled: bool
    name: 'string'
    namespaceType: 'string'
    provisioningState: 'string'
    region: 'string'
    scaleUnit: 'string'
    serviceBusEndpoint: 'string'
    status: 'string'
    subscriptionId: 'string'
    updatedAt: 'string'
  }
}
