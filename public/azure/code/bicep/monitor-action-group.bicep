resource symbolicname 'Microsoft.Insights/actionGroups@2022-06-01' = {
  name: 'string'
  location: 'string'
  tags: {
    tagName1: 'tagValue1'
    tagName2: 'tagValue2'
  }
  properties: {
    armRoleReceivers: [
      {
        name: 'string'
        roleId: 'string'
        useCommonAlertSchema: bool
      }
    ]
    automationRunbookReceivers: [
      {
        automationAccountId: 'string'
        isGlobalRunbook: bool
        name: 'string'
        runbookName: 'string'
        serviceUri: 'string'
        useCommonAlertSchema: bool
        webhookResourceId: 'string'
      }
    ]
    azureAppPushReceivers: [
      {
        emailAddress: 'string'
        name: 'string'
      }
    ]
    azureFunctionReceivers: [
      {
        functionAppResourceId: 'string'
        functionName: 'string'
        httpTriggerUrl: 'string'
        name: 'string'
        useCommonAlertSchema: bool
      }
    ]
    emailReceivers: [
      {
        emailAddress: 'string'
        name: 'string'
        useCommonAlertSchema: bool
      }
    ]
    enabled: bool
    eventHubReceivers: [
      {
        eventHubName: 'string'
        eventHubNameSpace: 'string'
        name: 'string'
        subscriptionId: 'string'
        tenantId: 'string'
        useCommonAlertSchema: bool
      }
    ]
    groupShortName: 'string'
    itsmReceivers: [
      {
        connectionId: 'string'
        name: 'string'
        region: 'string'
        ticketConfiguration: 'string'
        workspaceId: 'string'
      }
    ]
    logicAppReceivers: [
      {
        callbackUrl: 'string'
        name: 'string'
        resourceId: 'string'
        useCommonAlertSchema: bool
      }
    ]
    smsReceivers: [
      {
        countryCode: 'string'
        name: 'string'
        phoneNumber: 'string'
      }
    ]
    voiceReceivers: [
      {
        countryCode: 'string'
        name: 'string'
        phoneNumber: 'string'
      }
    ]
    webhookReceivers: [
      {
        identifierUri: 'string'
        name: 'string'
        objectId: 'string'
        serviceUri: 'string'
        tenantId: 'string'
        useAadAuth: bool
        useCommonAlertSchema: bool
      }
    ]
  }
}
