resource symbolicname 'Microsoft.Network/dnsZones@2018-05-01' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  etag: 'string'
  properties: {
    registrationVirtualNetworks: [
      {
        id: 'string'
      }
    ]
    resolutionVirtualNetworks: [
      {
        id: 'string'
      }
    ]
    zoneType: 'string'
  }
}
