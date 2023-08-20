resource symbolicname 'Microsoft.Compute/snapshots@2023-01-02' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  sku: {
    name: 'string'
  }
  extendedLocation: {
    name: 'string'
    type: 'EdgeZone'
  }
  properties: {
    completionPercent: int
    copyCompletionError: {
      errorCode: 'CopySourceNotFound'
      errorMessage: 'string'
    }
    creationData: {
      createOption: 'string'
      galleryImageReference: {
        communityGalleryImageId: 'string'
        id: 'string'
        lun: int
        sharedGalleryImageId: 'string'
      }
      imageReference: {
        communityGalleryImageId: 'string'
        id: 'string'
        lun: int
        sharedGalleryImageId: 'string'
      }
      logicalSectorSize: int
      performancePlus: bool
      securityDataUri: 'string'
      sourceResourceId: 'string'
      sourceUri: 'string'
      storageAccountId: 'string'
      uploadSizeBytes: int
    }
    dataAccessAuthMode: 'string'
    diskAccessId: 'string'
    diskSizeGB: int
    encryption: {
      diskEncryptionSetId: 'string'
      type: 'string'
    }
    encryptionSettingsCollection: {
      enabled: bool
      encryptionSettings: [
        {
          diskEncryptionKey: {
            secretUrl: 'string'
            sourceVault: {
              id: 'string'
            }
          }
          keyEncryptionKey: {
            keyUrl: 'string'
            sourceVault: {
              id: 'string'
            }
          }
        }
      ]
      encryptionSettingsVersion: 'string'
    }
    hyperVGeneration: 'string'
    incremental: bool
    networkAccessPolicy: 'string'
    osType: 'string'
    publicNetworkAccess: 'string'
    purchasePlan: {
      name: 'string'
      product: 'string'
      promotionCode: 'string'
      publisher: 'string'
    }
    securityProfile: {
      secureVMDiskEncryptionSetId: 'string'
      securityType: 'string'
    }
    supportedCapabilities: {
      acceleratedNetwork: bool
      architecture: 'string'
      diskControllerTypes: 'string'
    }
    supportsHibernation: bool
  }
}
