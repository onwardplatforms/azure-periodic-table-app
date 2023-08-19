resource symbolicname 'Microsoft.EventGrid/eventSubscriptions@2023-06-01-preview' = {
  name: 'string'
  scope: resourceSymbolicName
  properties: {
    deadLetterDestination: {
      endpointType: 'string'
      // For remaining properties, see DeadLetterDestination objects
    }
    deadLetterWithResourceIdentity: {
      deadLetterDestination: {
        endpointType: 'string'
        // For remaining properties, see DeadLetterDestination objects
      }
      identity: {
        type: 'string'
        userAssignedIdentity: 'string'
      }
    }
    deliveryWithResourceIdentity: {
      destination: {
        endpointType: 'string'
        // For remaining properties, see EventSubscriptionDestination objects
      }
      identity: {
        type: 'string'
        userAssignedIdentity: 'string'
      }
    }
    destination: {
      endpointType: 'string'
      // For remaining properties, see EventSubscriptionDestination objects
    }
    eventDeliverySchema: 'string'
    expirationTimeUtc: 'string'
    filter: {
      advancedFilters: [
        {
          key: 'string'
          operatorType: 'string'
          // For remaining properties, see AdvancedFilter objects
        }
      ]
      enableAdvancedFilteringOnArrays: bool
      includedEventTypes: [
        'string'
      ]
      isSubjectCaseSensitive: bool
      subjectBeginsWith: 'string'
      subjectEndsWith: 'string'
    }
    labels: [
      'string'
    ]
    retryPolicy: {
      eventTimeToLiveInMinutes: int
      maxDeliveryAttempts: int
    }
  }
}
