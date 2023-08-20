resource symbolicname 'Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview' = {
  name: 'string'
  parent: resourceSymbolicName
  properties: {
    autoDeleteOnIdle: 'string'
    deadLetteringOnMessageExpiration: bool
    defaultMessageTimeToLive: 'string'
    duplicateDetectionHistoryTimeWindow: 'string'
    enableBatchedOperations: bool
    enableExpress: bool
    enablePartitioning: bool
    forwardDeadLetteredMessagesTo: 'string'
    forwardTo: 'string'
    lockDuration: 'string'
    maxDeliveryCount: int
    maxMessageSizeInKilobytes: int
    maxSizeInMegabytes: int
    requiresDuplicateDetection: bool
    requiresSession: bool
    status: 'string'
  }
}
