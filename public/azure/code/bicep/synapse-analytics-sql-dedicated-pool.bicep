resource symbolicname 'Microsoft.Synapse/workspaces/sqlPools@2021-06-01' = {
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
  parent: resourceSymbolicName
  properties: {
    collation: 'string'
    createMode: 'string'
    maxSizeBytes: int
    provisioningState: 'string'
    recoverableDatabaseId: 'string'
    restorePointInTime: 'string'
    sourceDatabaseDeletionDate: 'string'
    sourceDatabaseId: 'string'
    storageAccountType: 'string'
  }
}
