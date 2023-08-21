resource symbolicname 'Microsoft.Synapse/workspaces@2021-06-01' = {
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
    azureADOnlyAuthentication: bool
    cspWorkspaceAdminProperties: {
      initialWorkspaceAdminObjectId: 'string'
    }
    defaultDataLakeStorage: {
      accountUrl: 'string'
      createManagedPrivateEndpoint: bool
      filesystem: 'string'
      resourceId: 'string'
    }
    encryption: {
      cmk: {
        kekIdentity: {
          userAssignedIdentity: 'string'
          useSystemAssignedIdentity: any()
        }
        key: {
          keyVaultUrl: 'string'
          name: 'string'
        }
      }
    }
    managedResourceGroupName: 'string'
    managedVirtualNetwork: 'string'
    managedVirtualNetworkSettings: {
      allowedAadTenantIdsForLinking: [
        'string'
      ]
      linkedAccessCheckOnTargetResource: bool
      preventDataExfiltration: bool
    }
    privateEndpointConnections: [
      {
        properties: {
          privateEndpoint: {}
          privateLinkServiceConnectionState: {
            description: 'string'
            status: 'string'
          }
        }
      }
    ]
    publicNetworkAccess: 'string'
    purviewConfiguration: {
      purviewResourceId: 'string'
    }
    sqlAdministratorLogin: 'string'
    sqlAdministratorLoginPassword: 'string'
    trustedServiceBypassEnabled: bool
    virtualNetworkProfile: {
      computeSubnetId: 'string'
    }
    workspaceRepositoryConfiguration: {
      accountName: 'string'
      collaborationBranch: 'string'
      hostName: 'string'
      lastCommitId: 'string'
      projectName: 'string'
      repositoryName: 'string'
      rootFolder: 'string'
      tenantId: 'string'
      type: 'string'
    }
  }
}
