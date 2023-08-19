resource symbolicname 'Microsoft.Compute/diskEncryptionSets@2023-01-02' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  properties: {
    activeKey: {
      keyUrl: 'string'
      sourceVault: {
        id: 'string'
      }
    }
    encryptionType: 'string'
    federatedClientId: 'string'
    rotationToLatestKeyVersionEnabled: bool
  }
}
