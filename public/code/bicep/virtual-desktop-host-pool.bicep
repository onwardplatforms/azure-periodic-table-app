resource symbolicname 'Microsoft.DesktopVirtualization/hostPools@2022-10-14-preview' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    capacity: int
    family: 'string'
    name: 'string'
    size: 'string'
    tier: 'string'
  }
  kind: 'string'
  identity: {
    type: 'SystemAssigned'
  }
  managedBy: 'string'
  plan: {
    name: 'string'
    product: 'string'
    promotionCode: 'string'
    publisher: 'string'
    version: 'string'
  }
  properties: {
    agentUpdate: {
      maintenanceWindows: [
        {
          dayOfWeek: 'string'
          hour: int
        }
      ]
      maintenanceWindowTimeZone: 'string'
      type: 'string'
      useSessionHostLocalTime: bool
    }
    customRdpProperty: 'string'
    description: 'string'
    friendlyName: 'string'
    hostPoolType: 'string'
    loadBalancerType: 'string'
    maxSessionLimit: int
    personalDesktopAssignmentType: 'string'
    preferredAppGroupType: 'string'
    publicNetworkAccess: 'string'
    registrationInfo: {
      expirationTime: 'string'
      registrationTokenOperation: 'string'
      token: 'string'
    }
    ring: int
    ssoadfsAuthority: 'string'
    ssoClientId: 'string'
    ssoClientSecretKeyVaultPath: 'string'
    ssoSecretType: 'string'
    startVMOnConnect: bool
    validationEnvironment: bool
    vmTemplate: 'string'
  }
}
