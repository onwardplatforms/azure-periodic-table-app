resource symbolicname 'Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview' = {
  name: 'string'
  location: 'string'
  scope: resourceSymbolicName
  identity: {
    principalId: 'string'
    tenantId: 'string'
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    blueprintId: 'string'
    description: 'string'
    displayName: 'string'
    locks: {
      excludedPrincipals: [
        'string'
      ]
      mode: 'string'
    }
    parameters: {}
    resourceGroups: {}
    scope: 'string'
  }
}
