resource symbolicname 'Microsoft.Logic/workflows@2019-05-01' = {
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
    accessControl: {
      actions: {
        allowedCallerIpAddresses: [
          {
            addressRange: 'string'
          }
        ]
        openAuthenticationPolicies: {
          policies: {}
      }
      contents: {
        allowedCallerIpAddresses: [
          {
            addressRange: 'string'
          }
        ]
        openAuthenticationPolicies: {
          policies: {}
      }
      triggers: {
        allowedCallerIpAddresses: [
          {
            addressRange: 'string'
          }
        ]
        openAuthenticationPolicies: {
          policies: {}
      }
      workflowManagement: {
        allowedCallerIpAddresses: [
          {
            addressRange: 'string'
          }
        ]
        openAuthenticationPolicies: {
          policies: {}
      }
    }
    definition: any()
    endpointsConfiguration: {
      connector: {
        accessEndpointIpAddresses: [
          {
            address: 'string'
          }
        ]
        outgoingIpAddresses: [
          {
            address: 'string'
          }
        ]
      }
      workflow: {
        accessEndpointIpAddresses: [
          {
            address: 'string'
          }
        ]
        outgoingIpAddresses: [
          {
            address: 'string'
          }
        ]
      }
    }
    integrationAccount: {
      id: 'string'
    }
    integrationServiceEnvironment: {
      id: 'string'
    }
    parameters: {}
    state: 'string'
  }
}
