resource symbolicname 'Microsoft.HDInsight/clusters@2021-06-01' = {
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
    clusterDefinition: {
      blueprint: 'string'
      componentVersion: {}
      configurations: any()
      kind: 'string'
    }
    clusterVersion: 'string'
    computeIsolationProperties: {
      enableComputeIsolation: bool
      hostSku: 'string'
    }
    computeProfile: {
      roles: [
        {
          autoscale: {
            capacity: {
              maxInstanceCount: int
              minInstanceCount: int
            }
            recurrence: {
              schedule: [
                {
                  days: [
                    'string'
                  ]
                  timeAndCapacity: {
                    maxInstanceCount: int
                    minInstanceCount: int
                    time: 'string'
                  }
                }
              ]
              timeZone: 'string'
            }
          }
          dataDisksGroups: [
            {
              disksPerNode: int
            }
          ]
          encryptDataDisks: bool
          hardwareProfile: {
            vmSize: 'string'
          }
          minInstanceCount: int
          name: 'string'
          osProfile: {
            linuxOperatingSystemProfile: {
              password: 'string'
              sshProfile: {
                publicKeys: [
                  {
                    certificateData: 'string'
                  }
                ]
              }
              username: 'string'
            }
          }
          scriptActions: [
            {
              name: 'string'
              parameters: 'string'
              uri: 'string'
            }
          ]
          targetInstanceCount: int
          virtualNetworkProfile: {
            id: 'string'
            subnet: 'string'
          }
          VMGroupName: 'string'
        }
      ]
    }
    diskEncryptionProperties: {
      encryptionAlgorithm: 'string'
      encryptionAtHost: bool
      keyName: 'string'
      keyVersion: 'string'
      msiResourceId: 'string'
      vaultUri: 'string'
    }
    encryptionInTransitProperties: {
      isEncryptionInTransitEnabled: bool
    }
    kafkaRestProperties: {
      clientGroupInfo: {
        groupId: 'string'
        groupName: 'string'
      }
      configurationOverride: {}
    }
    minSupportedTlsVersion: 'string'
    networkProperties: {
      privateLink: 'string'
      resourceProviderConnection: 'string'
    }
    osType: 'string'
    privateLinkConfigurations: [
      {
        name: 'string'
        properties: {
          groupId: 'string'
          ipConfigurations: [
            {
              name: 'string'
              properties: {
                primary: bool
                privateIPAddress: 'string'
                privateIPAllocationMethod: 'string'
                subnet: {
                  id: 'string'
                }
              }
            }
          ]
        }
      }
    ]
    securityProfile: {
      aaddsResourceId: 'string'
      clusterUsersGroupDNs: [
        'string'
      ]
      directoryType: 'ActiveDirectory'
      domain: 'string'
      domainUsername: 'string'
      domainUserPassword: 'string'
      ldapsUrls: [
        'string'
      ]
      msiResourceId: 'string'
      organizationalUnitDN: 'string'
    }
    storageProfile: {
      storageaccounts: [
        {
          container: 'string'
          fileshare: 'string'
          fileSystem: 'string'
          isDefault: bool
          key: 'string'
          msiResourceId: 'string'
          name: 'string'
          resourceId: 'string'
          saskey: 'string'
        }
      ]
    }
    tier: 'string'
  }
  zones: [
    'string'
  ]
}
