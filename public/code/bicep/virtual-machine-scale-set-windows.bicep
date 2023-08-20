resource symbolicname 'Microsoft.Compute/virtualMachineScaleSets@2023-03-01' = {
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
  extendedLocation: {
    name: 'string'
    type: 'EdgeZone'
  }
  identity: {
    type: 'string'
    userAssignedIdentities: {}
  }
  plan: {
    name: 'string'
    product: 'string'
    promotionCode: 'string'
    publisher: 'string'
  }
  properties: {
    additionalCapabilities: {
      hibernationEnabled: bool
      ultraSSDEnabled: bool
    }
    automaticRepairsPolicy: {
      enabled: bool
      gracePeriod: 'string'
      repairAction: 'string'
    }
    constrainedMaximumCapacity: bool
    doNotRunExtensionsOnOverprovisionedVMs: bool
    hostGroup: {
      id: 'string'
    }
    orchestrationMode: 'string'
    overprovision: bool
    platformFaultDomainCount: int
    priorityMixPolicy: {
      baseRegularPriorityCount: int
      regularPriorityPercentageAboveBase: int
    }
    proximityPlacementGroup: {
      id: 'string'
    }
    scaleInPolicy: {
      forceDeletion: bool
      rules: [
        'string'
      ]
    }
    singlePlacementGroup: bool
    spotRestorePolicy: {
      enabled: bool
      restoreTimeout: 'string'
    }
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        disableAutomaticRollback: bool
        enableAutomaticOSUpgrade: bool
        useRollingUpgradePolicy: bool
      }
      mode: 'string'
      rollingUpgradePolicy: {
        enableCrossZoneUpgrade: bool
        maxBatchInstancePercent: int
        maxSurge: bool
        maxUnhealthyInstancePercent: int
        maxUnhealthyUpgradedInstancePercent: int
        pauseTimeBetweenBatches: 'string'
        prioritizeUnhealthyInstances: bool
        rollbackFailedInstancesOnPolicyBreach: bool
      }
    }
    virtualMachineProfile: {
      applicationProfile: {
        galleryApplications: [
          {
            configurationReference: 'string'
            enableAutomaticUpgrade: bool
            order: int
            packageReferenceId: 'string'
            tags: 'string'
            treatFailureAsDeploymentFailure: bool
          }
        ]
      }
      billingProfile: {
        maxPrice: json('decimal-as-string')
      }
      capacityReservation: {
        capacityReservationGroup: {
          id: 'string'
        }
      }
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: bool
          storageUri: 'string'
        }
      }
      evictionPolicy: 'string'
      extensionProfile: {
        extensions: [
          {
            name: 'string'
            properties: {
              autoUpgradeMinorVersion: bool
              enableAutomaticUpgrade: bool
              forceUpdateTag: 'string'
              protectedSettings: any()
              protectedSettingsFromKeyVault: {
                secretUrl: 'string'
                sourceVault: {
                  id: 'string'
                }
              }
              provisionAfterExtensions: [
                'string'
              ]
              publisher: 'string'
              settings: any()
              suppressFailures: bool
              type: 'string'
              typeHandlerVersion: 'string'
            }
          }
        ]
        extensionsTimeBudget: 'string'
      }
      hardwareProfile: {
        vmSizeProperties: {
          vCPUsAvailable: int
          vCPUsPerCore: int
        }
      }
      licenseType: 'string'
      networkProfile: {
        healthProbe: {
          id: 'string'
        }
        networkApiVersion: '2020-11-01'
        networkInterfaceConfigurations: [
          {
            name: 'string'
            properties: {
              deleteOption: 'string'
              disableTcpStateTracking: bool
              dnsSettings: {
                dnsServers: [
                  'string'
                ]
              }
              enableAcceleratedNetworking: bool
              enableFpga: bool
              enableIPForwarding: bool
              ipConfigurations: [
                {
                  name: 'string'
                  properties: {
                    applicationGatewayBackendAddressPools: [
                      {
                        id: 'string'
                      }
                    ]
                    applicationSecurityGroups: [
                      {
                        id: 'string'
                      }
                    ]
                    loadBalancerBackendAddressPools: [
                      {
                        id: 'string'
                      }
                    ]
                    loadBalancerInboundNatPools: [
                      {
                        id: 'string'
                      }
                    ]
                    primary: bool
                    privateIPAddressVersion: 'string'
                    publicIPAddressConfiguration: {
                      name: 'string'
                      properties: {
                        deleteOption: 'string'
                        dnsSettings: {
                          domainNameLabel: 'string'
                        }
                        idleTimeoutInMinutes: int
                        ipTags: [
                          {
                            ipTagType: 'string'
                            tag: 'string'
                          }
                        ]
                        publicIPAddressVersion: 'string'
                        publicIPPrefix: {
                          id: 'string'
                        }
                      }
                      sku: {
                        name: 'string'
                        tier: 'string'
                      }
                    }
                    subnet: {
                      id: 'string'
                    }
                  }
                }
              ]
              networkSecurityGroup: {
                id: 'string'
              }
              primary: bool
            }
          }
        ]
      }
      osProfile: {
        adminPassword: 'string'
        adminUsername: 'string'
        allowExtensionOperations: bool
        computerNamePrefix: 'string'
        customData: 'string'
        linuxConfiguration: {
          disablePasswordAuthentication: bool
          enableVMAgentPlatformUpdates: bool
          patchSettings: {
            assessmentMode: 'string'
            automaticByPlatformSettings: {
              bypassPlatformSafetyChecksOnUserSchedule: bool
              rebootSetting: 'string'
            }
            patchMode: 'string'
          }
          provisionVMAgent: bool
          ssh: {
            publicKeys: [
              {
                keyData: 'string'
                path: 'string'
              }
            ]
          }
        }
        requireGuestProvisionSignal: bool
        secrets: [
          {
            sourceVault: {
              id: 'string'
            }
            vaultCertificates: [
              {
                certificateStore: 'string'
                certificateUrl: 'string'
              }
            ]
          }
        ]
        windowsConfiguration: {
          additionalUnattendContent: [
            {
              componentName: 'Microsoft-Windows-Shell-Setup'
              content: 'string'
              passName: 'OobeSystem'
              settingName: 'string'
            }
          ]
          enableAutomaticUpdates: bool
          enableVMAgentPlatformUpdates: bool
          patchSettings: {
            assessmentMode: 'string'
            automaticByPlatformSettings: {
              bypassPlatformSafetyChecksOnUserSchedule: bool
              rebootSetting: 'string'
            }
            enableHotpatching: bool
            patchMode: 'string'
          }
          provisionVMAgent: bool
          timeZone: 'string'
          winRM: {
            listeners: [
              {
                certificateUrl: 'string'
                protocol: 'string'
              }
            ]
          }
        }
      }
      priority: 'string'
      scheduledEventsProfile: {
        osImageNotificationProfile: {
          enable: bool
          notBeforeTimeout: 'string'
        }
        terminateNotificationProfile: {
          enable: bool
          notBeforeTimeout: 'string'
        }
      }
      securityPostureReference: {
        excludeExtensions: [
          {
            location: 'string'
            properties: {
              autoUpgradeMinorVersion: bool
              enableAutomaticUpgrade: bool
              forceUpdateTag: 'string'
              instanceView: {
                name: 'string'
                statuses: [
                  {
                    code: 'string'
                    displayStatus: 'string'
                    level: 'string'
                    message: 'string'
                    time: 'string'
                  }
                ]
                substatuses: [
                  {
                    code: 'string'
                    displayStatus: 'string'
                    level: 'string'
                    message: 'string'
                    time: 'string'
                  }
                ]
                type: 'string'
                typeHandlerVersion: 'string'
              }
              protectedSettings: any()
              protectedSettingsFromKeyVault: {
                secretUrl: 'string'
                sourceVault: {
                  id: 'string'
                }
              }
              provisionAfterExtensions: [
                'string'
              ]
              publisher: 'string'
              settings: any()
              suppressFailures: bool
              type: 'string'
              typeHandlerVersion: 'string'
            }
            tags: {}
          }
        ]
        id: 'string'
      }
      securityProfile: {
        encryptionAtHost: bool
        securityType: 'string'
        uefiSettings: {
          secureBootEnabled: bool
          vTpmEnabled: bool
        }
      }
      serviceArtifactReference: {
        id: 'string'
      }
      storageProfile: {
        dataDisks: [
          {
            caching: 'string'
            createOption: 'string'
            deleteOption: 'string'
            diskIOPSReadWrite: int
            diskMBpsReadWrite: int
            diskSizeGB: int
            lun: int
            managedDisk: {
              diskEncryptionSet: {
                id: 'string'
              }
              securityProfile: {
                diskEncryptionSet: {
                  id: 'string'
                }
                securityEncryptionType: 'string'
              }
              storageAccountType: 'string'
            }
            name: 'string'
            writeAcceleratorEnabled: bool
          }
        ]
        diskControllerType: 'string'
        imageReference: {
          communityGalleryImageId: 'string'
          id: 'string'
          offer: 'string'
          publisher: 'string'
          sharedGalleryImageId: 'string'
          sku: 'string'
          version: 'string'
        }
        osDisk: {
          caching: 'string'
          createOption: 'string'
          deleteOption: 'string'
          diffDiskSettings: {
            option: 'Local'
            placement: 'string'
          }
          diskSizeGB: int
          image: {
            uri: 'string'
          }
          managedDisk: {
            diskEncryptionSet: {
              id: 'string'
            }
            securityProfile: {
              diskEncryptionSet: {
                id: 'string'
              }
              securityEncryptionType: 'string'
            }
            storageAccountType: 'string'
          }
          name: 'string'
          osType: 'string'
          vhdContainers: [
            'string'
          ]
          writeAcceleratorEnabled: bool
        }
      }
      userData: 'string'
    }
    zoneBalance: bool
  }
  zones: [
    'string'
  ]
}
