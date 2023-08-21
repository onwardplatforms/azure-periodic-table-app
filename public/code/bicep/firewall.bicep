resource symbolicname 'Microsoft.Network/azureFirewalls@2023-04-01' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  properties: {
    additionalProperties: {}
    applicationRuleCollections: [
      {
        id: 'string'
        name: 'string'
        properties: {
          action: {
            type: 'string'
          }
          priority: int
          rules: [
            {
              description: 'string'
              fqdnTags: [
                'string'
              ]
              name: 'string'
              protocols: [
                {
                  port: int
                  protocolType: 'string'
                }
              ]
              sourceAddresses: [
                'string'
              ]
              sourceIpGroups: [
                'string'
              ]
              targetFqdns: [
                'string'
              ]
            }
          ]
        }
      }
    ]
    firewallPolicy: {
      id: 'string'
    }
    hubIPAddresses: {
      privateIPAddress: 'string'
      publicIPs: {
        addresses: [
          {
            address: 'string'
          }
        ]
        count: int
      }
    }
    ipConfigurations: [
      {
        id: 'string'
        name: 'string'
        properties: {
          publicIPAddress: {
            id: 'string'
          }
          subnet: {
            id: 'string'
          }
        }
      }
    ]
    managementIpConfiguration: {
      id: 'string'
      name: 'string'
      properties: {
        publicIPAddress: {
          id: 'string'
        }
        subnet: {
          id: 'string'
        }
      }
    }
    natRuleCollections: [
      {
        id: 'string'
        name: 'string'
        properties: {
          action: {
            type: 'string'
          }
          priority: int
          rules: [
            {
              description: 'string'
              destinationAddresses: [
                'string'
              ]
              destinationPorts: [
                'string'
              ]
              name: 'string'
              protocols: [
                'string'
              ]
              sourceAddresses: [
                'string'
              ]
              sourceIpGroups: [
                'string'
              ]
              translatedAddress: 'string'
              translatedFqdn: 'string'
              translatedPort: 'string'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        id: 'string'
        name: 'string'
        properties: {
          action: {
            type: 'string'
          }
          priority: int
          rules: [
            {
              description: 'string'
              destinationAddresses: [
                'string'
              ]
              destinationFqdns: [
                'string'
              ]
              destinationIpGroups: [
                'string'
              ]
              destinationPorts: [
                'string'
              ]
              name: 'string'
              protocols: [
                'string'
              ]
              sourceAddresses: [
                'string'
              ]
              sourceIpGroups: [
                'string'
              ]
            }
          ]
        }
      }
    ]
    sku: {
      name: 'string'
      tier: 'string'
    }
    threatIntelMode: 'string'
    virtualHub: {
      id: 'string'
    }
  }
  zones: [
    'string'
  ]
}
