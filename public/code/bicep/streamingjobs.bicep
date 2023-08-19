resource symbolicname 'Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    name: 'Standard'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    cluster: {
      id: 'string'
    }
    compatibilityLevel: 'string'
    contentStoragePolicy: 'string'
    dataLocale: 'string'
    eventsLateArrivalMaxDelayInSeconds: int
    eventsOutOfOrderMaxDelayInSeconds: int
    eventsOutOfOrderPolicy: 'string'
    externals: {
      container: 'string'
      path: 'string'
      refreshConfiguration: {
        dateFormat: 'string'
        pathPattern: 'string'
        refreshInterval: 'string'
        refreshType: 'string'
        timeFormat: 'string'
      }
      storageAccount: {
        accountKey: 'string'
        accountName: 'string'
        authenticationMode: 'string'
      }
    }
    functions: [
      {
        name: 'string'
        properties: {
          properties: {
            binding: {
              type: 'string'
              // For remaining properties, see FunctionBinding objects
            }
            inputs: [
              {
                dataType: 'string'
                isConfigurationParameter: bool
              }
            ]
            output: {
              dataType: 'string'
            }
          }
          type: 'string'
          // For remaining properties, see FunctionProperties objects
        }
      }
    ]
    inputs: [
      {
        name: 'string'
        properties: {
          compression: {
            type: 'string'
          }
          partitionKey: 'string'
          serialization: {
            type: 'string'
            // For remaining properties, see Serialization objects
          }
          watermarkSettings: {
            watermarkMode: 'string'
          }
          type: 'string'
          // For remaining properties, see InputProperties objects
        }
      }
    ]
    jobStorageAccount: {
      accountKey: 'string'
      accountName: 'string'
      authenticationMode: 'string'
    }
    jobType: 'string'
    outputErrorPolicy: 'string'
    outputs: [
      {
        name: 'string'
        properties: {
          datasource: {
            type: 'string'
            // For remaining properties, see OutputDataSource objects
          }
          serialization: {
            type: 'string'
            // For remaining properties, see Serialization objects
          }
          sizeWindow: int
          timeWindow: 'string'
          watermarkSettings: {
            maxWatermarkDifferenceAcrossPartitions: 'string'
            watermarkMode: 'string'
          }
        }
      }
    ]
    outputStartMode: 'string'
    outputStartTime: 'string'
    sku: {
      capacity: int
      name: 'Standard'
    }
    transformation: {
      name: 'string'
      properties: {
        query: 'string'
        streamingUnits: int
        validStreamingUnits: [
          int
        ]
      }
    }
  }
}
