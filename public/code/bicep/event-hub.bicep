resource symbolicname 'Microsoft.EventHub/clusters@2022-10-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    name: 'Dedicated'
  }
  properties: {
    supportsScaling: bool
  }
}
