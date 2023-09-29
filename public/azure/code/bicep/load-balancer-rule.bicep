resource symbolicname 'Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01' = {
  name: 'string'
  parent: resourceSymbolicName
  properties: {
    backendAddressPool: {
      id: 'string'
    }
    backendPort: int
    enableFloatingIP: bool
    enableTcpReset: bool
    frontendIPConfiguration: {
      id: 'string'
    }
    frontendPort: int
    frontendPortRangeEnd: int
    frontendPortRangeStart: int
    idleTimeoutInMinutes: int
    protocol: 'string'
  }
}
