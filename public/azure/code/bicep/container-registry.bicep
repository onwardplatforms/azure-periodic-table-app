resource symbolicname 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
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
    principalId: 'string'
    tenantId: 'string'
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    adminUserEnabled: bool
    anonymousPullEnabled: bool
    dataEndpointEnabled: bool
    encryption: {
      keyVaultProperties: {
        identity: 'string'
        keyIdentifier: 'string'
      }
      status: 'string'
    }
    networkRuleBypassOptions: 'string'
    networkRuleSet: {
      defaultAction: 'string'
      ipRules: [
        {
          action: 'Allow'
          value: 'string'
        }
      ]
    }
    policies: {
      azureADAuthenticationAsArmPolicy: {
        status: 'string'
      }
      exportPolicy: {
        status: 'string'
      }
      quarantinePolicy: {
        status: 'string'
      }
      retentionPolicy: {
        days: int
        status: 'string'
      }
      softDeletePolicy: {
        retentionDays: int
        status: 'string'
      }
      trustPolicy: {
        status: 'string'
        type: 'Notary'
      }
    }
    publicNetworkAccess: 'string'
    zoneRedundancy: 'string'
  }
}
