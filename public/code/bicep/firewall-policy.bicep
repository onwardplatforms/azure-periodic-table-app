resource symbolicname 'Microsoft.Network/firewallPolicies@2023-04-01' = {
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
    basePolicy: {
      id: 'string'
    }
    dnsSettings: {
      enableProxy: bool
      requireProxyForNetworkRules: bool
      servers: [
        'string'
      ]
    }
    explicitProxy: {
      enableExplicitProxy: bool
      enablePacFile: bool
      httpPort: int
      httpsPort: int
      pacFile: 'string'
      pacFilePort: int
    }
    insights: {
      isEnabled: bool
      logAnalyticsResources: {
        defaultWorkspaceId: {
          id: 'string'
        }
        workspaces: [
          {
            region: 'string'
            workspaceId: {
              id: 'string'
            }
          }
        ]
      }
      retentionDays: int
    }
    intrusionDetection: {
      configuration: {
        bypassTrafficSettings: [
          {
            description: 'string'
            destinationAddresses: [
              'string'
            ]
            destinationIpGroups: [
              'string'
            ]
            destinationPorts: [
              'string'
            ]
            name: 'string'
            protocol: 'string'
            sourceAddresses: [
              'string'
            ]
            sourceIpGroups: [
              'string'
            ]
          }
        ]
        privateRanges: [
          'string'
        ]
        signatureOverrides: [
          {
            id: 'string'
            mode: 'string'
          }
        ]
      }
      mode: 'string'
    }
    sku: {
      tier: 'string'
    }
    snat: {
      autoLearnPrivateRanges: 'string'
      privateRanges: [
        'string'
      ]
    }
    sql: {
      allowSqlRedirect: bool
    }
    threatIntelMode: 'string'
    threatIntelWhitelist: {
      fqdns: [
        'string'
      ]
      ipAddresses: [
        'string'
      ]
    }
    transportSecurity: {
      certificateAuthority: {
        keyVaultSecretId: 'string'
        name: 'string'
      }
    }
  }
}
