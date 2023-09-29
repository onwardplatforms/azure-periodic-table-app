resource symbolicname 'Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview' = {
  name: 'string'
  parent: resourceSymbolicName
  properties: {
    autoDeleteOnIdle: 'string'
    defaultMessageTimeToLive: 'string'
    duplicateDetectionHistoryTimeWindow: 'string'
    enableBatchedOperations: bool
    enableExpress: bool
    enablePartitioning: bool
    maxMessageSizeInKilobytes: int
    maxSizeInMegabytes: int
    requiresDuplicateDetection: bool
    status: 'string'
    supportOrdering: bool
  }
}
