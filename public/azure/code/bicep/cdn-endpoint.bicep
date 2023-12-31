resource symbolicname 'Microsoft.Cdn/profiles/endpoints@2022-11-01-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  parent: resourceSymbolicName
  properties: {
    contentTypesToCompress: [
      'string'
    ]
    defaultOriginGroup: {
      id: 'string'
    }
    deliveryPolicy: {
      description: 'string'
      rules: [
        {
          actions: [
            {
              name: 'string'
              // For remaining properties, see DeliveryRuleActionAutoGenerated objects
            }
          ]
          conditions: [
            {
              name: 'string'
              // For remaining properties, see DeliveryRuleCondition objects
            }
          ]
          name: 'string'
          order: int
        }
      ]
    }
    geoFilters: [
      {
        action: 'string'
        countryCodes: [
          'string'
        ]
        relativePath: 'string'
      }
    ]
    isCompressionEnabled: bool
    isHttpAllowed: bool
    isHttpsAllowed: bool
    optimizationType: 'string'
    originGroups: [
      {
        name: 'string'
        properties: {
          healthProbeSettings: {
            probeIntervalInSeconds: int
            probePath: 'string'
            probeProtocol: 'string'
            probeRequestType: 'string'
          }
          origins: [
            {
              id: 'string'
            }
          ]
          responseBasedOriginErrorDetectionSettings: {
            httpErrorRanges: [
              {
                begin: int
                end: int
              }
            ]
            responseBasedDetectedErrorTypes: 'string'
            responseBasedFailoverThresholdPercentage: int
          }
          trafficRestorationTimeToHealedOrNewEndpointsInMinutes: int
        }
      }
    ]
    originHostHeader: 'string'
    originPath: 'string'
    origins: [
      {
        name: 'string'
        properties: {
          enabled: bool
          hostName: 'string'
          httpPort: int
          httpsPort: int
          originHostHeader: 'string'
          priority: int
          privateLinkAlias: 'string'
          privateLinkApprovalMessage: 'string'
          privateLinkLocation: 'string'
          privateLinkResourceId: 'string'
          weight: int
        }
      }
    ]
    probePath: 'string'
    queryStringCachingBehavior: 'string'
    urlSigningKeys: [
      {
        keyId: 'string'
        keySourceParameters: {
          resourceGroupName: 'string'
          secretName: 'string'
          secretVersion: 'string'
          subscriptionId: 'string'
          typeName: 'KeyVaultSigningKeyParameters'
          vaultName: 'string'
        }
      }
    ]
    webApplicationFirewallPolicyLink: {
      id: 'string'
    }
  }
}
