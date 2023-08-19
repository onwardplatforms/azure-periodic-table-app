resource symbolicname 'Microsoft.DocumentDB/databaseAccounts@2023-04-15' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  kind: 'string'
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    analyticalStorageConfiguration: {
      schemaType: 'string'
    }
    apiProperties: {
      serverVersion: 'string'
    }
    backupPolicy: {
      migrationState: {
        startTime: 'string'
        status: 'string'
        targetType: 'string'
      }
      type: 'string'
      // For remaining properties, see BackupPolicy objects
    }
    capabilities: [
      {
        name: 'string'
      }
    ]
    capacity: {
      totalThroughputLimit: int
    }
    connectorOffer: 'Small'
    consistencyPolicy: {
      defaultConsistencyLevel: 'string'
      maxIntervalInSeconds: int
      maxStalenessPrefix: int
    }
    cors: [
      {
        allowedHeaders: 'string'
        allowedMethods: 'string'
        allowedOrigins: 'string'
        exposedHeaders: 'string'
        maxAgeInSeconds: int
      }
    ]
    createMode: 'string'
    databaseAccountOfferType: 'Standard'
    defaultIdentity: 'string'
    disableKeyBasedMetadataWriteAccess: bool
    disableLocalAuth: bool
    enableAnalyticalStorage: bool
    enableAutomaticFailover: bool
    enableCassandraConnector: bool
    enableFreeTier: bool
    enableMultipleWriteLocations: bool
    enablePartitionMerge: bool
    ipRules: [
      {
        ipAddressOrRange: 'string'
      }
    ]
    isVirtualNetworkFilterEnabled: bool
    keyVaultKeyUri: 'string'
    locations: [
      {
        failoverPriority: int
        isZoneRedundant: bool
        locationName: 'string'
      }
    ]
    minimalTlsVersion: 'string'
    networkAclBypass: 'string'
    networkAclBypassResourceIds: [
      'string'
    ]
    publicNetworkAccess: 'string'
    restoreParameters: {
      databasesToRestore: [
        {
          collectionNames: [
            'string'
          ]
          databaseName: 'string'
        }
      ]
      gremlinDatabasesToRestore: [
        {
          databaseName: 'string'
          graphNames: [
            'string'
          ]
        }
      ]
      restoreMode: 'PointInTime'
      restoreSource: 'string'
      restoreTimestampInUtc: 'string'
      tablesToRestore: [
        'string'
      ]
    }
    virtualNetworkRules: [
      {
        id: 'string'
        ignoreMissingVNetServiceEndpoint: bool
      }
    ]
  }
}
