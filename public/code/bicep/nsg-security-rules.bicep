resource symbolicname 'Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01' = {
  name: 'string'
  parent: resourceSymbolicName
  properties: {
    access: 'string'
    description: 'string'
    destinationAddressPrefix: 'string'
    destinationAddressPrefixes: [
      'string'
    ]
    destinationApplicationSecurityGroups: [
      {
        id: 'string'
        location: 'string'
        properties: {}
        tags: {}
      }
    ]
    destinationPortRange: 'string'
    destinationPortRanges: [
      'string'
    ]
    direction: 'string'
    priority: int
    protocol: 'string'
    sourceAddressPrefix: 'string'
    sourceAddressPrefixes: [
      'string'
    ]
    sourceApplicationSecurityGroups: [
      {
        id: 'string'
        location: 'string'
        properties: {}
        tags: {}
      }
    ]
    sourcePortRange: 'string'
    sourcePortRanges: [
      'string'
    ]
  }
}
