resource symbolicname 'Microsoft.SignalRService/signalR@2022-08-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    name: 'string'
    tier: 'string'
  }
  kind: 'string'
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    cors: {
      allowedOrigins: [
        'string'
      ]
    }
    disableAadAuth: bool
    disableLocalAuth: bool
    features: [
      {
        flag: 'string'
        properties: {}
        value: 'string'
      }
    ]
    liveTraceConfiguration: {
      categories: [
        {
          enabled: 'string'
          name: 'string'
        }
      ]
      enabled: 'string'
    }
    networkACLs: {
      defaultAction: 'string'
      privateEndpoints: [
        {
          allow: [
            'string'
          ]
          deny: [
            'string'
          ]
          name: 'string'
        }
      ]
      publicNetwork: {
        allow: [
          'string'
        ]
        deny: [
          'string'
        ]
      }
    }
    publicNetworkAccess: 'string'
    resourceLogConfiguration: {
      categories: [
        {
          enabled: 'string'
          name: 'string'
        }
      ]
    }
    serverless: {
      connectionTimeoutInSeconds: int
    }
    tls: {
      clientCertEnabled: bool
    }
    upstream: {
      templates: [
        {
          auth: {
            managedIdentity: {
              resource: 'string'
            }
            type: 'string'
          }
          categoryPattern: 'string'
          eventPattern: 'string'
          hubPattern: 'string'
          urlTemplate: 'string'
        }
      ]
    }
  }
}
