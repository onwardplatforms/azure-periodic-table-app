resource symbolicname 'Microsoft.Authorization/policySetDefinitions@2021-06-01' = {
  name: 'string'
  scope: resourceSymbolicName
  properties: {
    description: 'string'
    displayName: 'string'
    metadata: any()
    parameters: {}
    policyDefinitionGroups: [
      {
        additionalMetadataId: 'string'
        category: 'string'
        description: 'string'
        displayName: 'string'
        name: 'string'
      }
    ]
    policyDefinitions: [
      {
        groupNames: [
          'string'
        ]
        parameters: {}
        policyDefinitionId: 'string'
        policyDefinitionReferenceId: 'string'
      }
    ]
    policyType: 'string'
  }
}
