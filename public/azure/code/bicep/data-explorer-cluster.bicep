resource symbolicname 'Microsoft.Kusto/clusters@2023-05-02' = {
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
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    acceptedAudiences: [
      {
        value: 'string'
      }
    ]
    allowedFqdnList: [
      'string'
    ]
    allowedIpRangeList: [
      'string'
    ]
    enableAutoStop: bool
    enableDiskEncryption: bool
    enableDoubleEncryption: bool
    enablePurge: bool
    enableStreamingIngest: bool
    engineType: 'string'
    keyVaultProperties: {
      keyName: 'string'
      keyVaultUri: 'string'
      keyVersion: 'string'
      userIdentity: 'string'
    }
    languageExtensions: {
      value: [
        {
          languageExtensionImageName: 'string'
          languageExtensionName: 'string'
        }
      ]
      value: [
        {
          languageExtensionImageName: 'string'
          languageExtensionName: 'string'
        }
      ]
    }
    optimizedAutoscale: {
      isEnabled: bool
      maximum: int
      minimum: int
      version: int
    }
    publicIPType: 'string'
    publicNetworkAccess: 'string'
    restrictOutboundNetworkAccess: 'string'
    trustedExternalTenants: [
      {
        value: 'string'
      }
    ]
    virtualClusterGraduationProperties: 'string'
    virtualNetworkConfiguration: {
      dataManagementPublicIpId: 'string'
      enginePublicIpId: 'string'
      subnetId: 'string'
    }
  }
  zones: [
    'string'
  ]
}
