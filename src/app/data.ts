/* src/app/data.ts */

import { Categories } from './constants';

/*
Review databases and add items:
https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations

Consider adding:
- Cloud service: 	Microsoft.Compute/cloudServices
- Communcation services: Microsoft.Communication/communicationServices
- Hosting environment:	Microsoft.Web/hostingEnvironments
- Image template: Microsoft.VirtualMachineImages/imageTemplates
- WebPubSub: Microsoft.SignalRService/webPubSub
- Service Bus Topic Subscription: Microsoft.ServiceBus/namespaces/topics/subscriptions
*/

export type Item = {
  name: string;
  slug: string;
  description: string;
  length: string;
  category: Categories;
  learnUrl: string;
  terraformUrl: string;
  restrictions: string;
  resource: string;
  entity: string;
  scope: string;
  icon: string;
  code: string;
  viewAllURL: string;
};

export type ColumnType = {
  items: Item[];
};

export const columns: ColumnType[] = [
  {
    items: [
      {
        name: 'management group',
        slug: 'mg-',
        description:
          'Azure Management Groups provide a level of scope above subscriptions. They allow you to organize subscriptions into containers called \'management groups\' and apply your governance conditions to the management groups. All subscriptions within a management group automatically inherit the conditions applied to the management group.',
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/governance/management-groups/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/management_group',
        restrictions:
          'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: 'Microsoft.Management',
        entity: 'managementGroups',
        scope: 'tenant',
        icon: '/icons/Management/Management Group.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ManagementGroups/ManagementGroupBrowseBlade/~/MGBrowse_overview',
      },
      {
        name: 'Subscriptions',
        slug: 'sub-',
        description: 'Subscriptions in Azure act as a single billing unit and provide the ability to administer resources, control resource usage, and organize resources according to individual business needs.',
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subscription',
        restrictions: 'Alphanumerics, hyphens, and underscores. Cannot begin or end with a hyphen or underscore. Cannot contain consecutive hyphens or underscores.',
        resource: 'Microsoft.Subscription',
        entity: 'subscriptions',
        scope: 'tenant',
        icon: '/icons/Management/Subscription.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBlade'
      },
      {
        name: 'resource group',
        slug: 'rg-',
        description:
          'Azure Resource Groups are logical containers for resources deployed within an Azure subscription. This group includes those resources that you want to manage as a group. You decide how to allocate resources to resource groups based on what makes the most sense for your organization.',
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group',
        restrictions:
          'Underscores, hyphens, periods, parentheses, and letters or digits as defined by the Char. IsLetterOrDigit function. Valid characters are members of the following categories in UnicodeCategory:UppercaseLetter,LowercaseLetter,TitlecaseLetter,ModifierLetter,OtherLetter,DecimalDigitNumber. Can not end with period.',
        resource: 'Microsoft.Resources',
        entity: 'resourcegroups',
        scope: 'subscription',
        icon: '/icons/Management/Resource Group.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResourceGroups',
      },
      {
        name: 'managed identity',
        slug: 'id-',
        description:
          'Azure Managed Identities for Azure resources provides Azure services with an automatically managed identity in Azure Active Directory. You can also create user assigned identities that you manage. These identities can be used to authenticate to services that support Azure AD authentication, without needing any credentials in your code.',
        length: '3-128',
        category: Categories.GENERAL,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/user_assigned_identity',
        restrictions:
          'Alphanumerics, hyphens, and underscores. Start with letter or number.',
        resource: 'Microsoft.ManagedIdentity',
        entity: 'userAssignedIdentities',
        scope: 'resource group',
        icon: '/icons/Identity/Managed Identity.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ManagedIdentity%2FuserAssignedIdentities',
      },
      {
        name: 'policy initiative',
        slug: 'set-',
        description: 'Azure Policy Set Definitions, also known as Initiatives, simplify managing and assigning policies. They are a set of Policy Definitions that are tailored towards achieving a singular overarching goal. By grouping policies together, you can ensure they\'re properly assigned to achieve full coverage across your resources.',
        length: '1-64',
        category: Categories.GENERAL,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/governance/policy/overview#initiative-definition',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/policy_set_definition',
        restrictions: 'Display name can contain any characters. Resource name Can not use:<>*%&:?. +/ or control characters. Can not end with period or space.',
        resource: 'Microsoft.Authorization',
        entity: 'policySetDefinitions',
        scope: 'scope of definition',
        icon: '/icons/Management/Policy Initiative.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Policy/PolicyMenuBlade/~/Overview'
      },
      {
        name: 'policy definition',
        slug: 'def-',
        description:
          'Azure Policy Definitions enforce different rules and effects over your resources, so those resources stay compliant with your corporate standards and service level agreements. Azure Policy does this by running evaluations of your resources and scanning for those not compliant with the policies you have created.',
        length: '1-64',
        category: Categories.GENERAL,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/governance/policy/overview#initiative-definition',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/policy_definition',
        restrictions:
          'Display name can contain any characters. Resource name Can not use:<>*%&:?. +/ or control characters. Can not end with period or space.',
        resource: 'Microsoft.Authorization',
        entity: 'policyDefinitions',
        scope: 'scope of definition',
        icon: '/icons/Management/Policy Definition.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Policy/PolicyMenuBlade/~/Overview',
      }
    ],
  },
  {
    items: [
      {
        name: 'application gateway',
        slug: 'agw-',
        description:
          'Azure Application Gateway is a web traffic load balancer that enables management of traffic to web applications. It provides routing services and can make routing decisions based on additional attributes of an HTTP request.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/application-gateway/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'applicationGateways',
        scope: 'resource group',
        icon: '/icons/Networking/Application Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/applicationgateways',
      },
      {
        name: 'app security group (asg)',
        slug: 'asg-',
        description:
          'Application Security Groups (ASG) in Azure enable fine-grained network control over your network architecture and the ability to secure direct access to applications based on role.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_security_group',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'applicationSecurityGroups',
        scope: 'resource group',
        icon: '/icons/Application/Application Security Group.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FapplicationSecurityGroups',
      },
      {
        name: 'cdn profile',
        slug: 'cdnp-',
        description:
          'Azure CDN profiles allow you to manage the delivery of your content through Microsoft\'s global CDN network. It is designed to send audio, video, applications, images, and other files faster and more reliably to customers using servers that are closest to each user.',
        length: '1-260',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/cdn/cdn-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cdn_profile',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Cdn',
        entity: 'profiles',
        scope: 'resource group',
        icon: '/icons/Networking/CDN Profile.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.cdn%2Fprofiles',
      },
      {
        name: 'cdn endpoint',
        slug: 'cdne-',
        description:
          'Azure CDN Endpoints are the specific points of presence (PoPs) in the CDN where your content is cached. Endpoints enable faster delivery of content to users who are in close proximity to these locations.',
        length: '1-50',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/cdn/cdn-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cdn_endpoint',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Cdn',
        entity: 'profiles/endpoints',
        scope: 'global',
        icon: '/icons/Networking/CDN Profile.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.cdn%2Fprofiles',
      },
      {
        name: 'expressroute circuit',
        slug: 'erc-',
        description:
          'Azure ExpressRoute is a service that enables establishing dedicated, private network connections between Azure datacenters and your on-premises infrastructure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/expressroute/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/express_route_circuit',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'expressRouteCircuits',
        scope: 'resource group',
        icon: '/icons/Networking/ExpressRoute Circuit.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FexpressRouteCircuits',
      },
      {
        name: 'expressroute connection',
        slug: 'gc-',
        description:
          'Azure ExpressRoute Connections enable private and dedicated network connections between your on-premises datacenter or network and Microsoft Azure. Through ExpressRoute, you can establish a reliable, low-latency, and high-bandwidth connection, which provides enhanced security and performance for accessing Azure resources.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/windows-365/enterprise/azure-network-connections',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_gateway_connection',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'connections',
        scope: 'resource group',
        icon: '/icons/Networking/ExpressRoute Connection.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FexpressRouteCircuits',
      },
      {
        name: 'dns zone',
        slug: 'dnsz-',
        description:
          'Azure DNS Zone is a service that allows you to host your domain\'s DNS records on Azure, providing name resolution using Microsoft Azure infrastructure. By hosting your domains in Azure, you can manage your DNS records using the same credentials and billing and support contract as your other Azure services.',
        length:
          '1-63',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/dns/dns-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/dns_zone',
        restrictions:
          'Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.',
        resource: 'Microsoft.Network',
        entity: 'dnsZones',
        scope: 'resource group',
        icon: '/icons/Networking/DNS Zone (Public).png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FdnsZones',
      },
      {
        name: 'private dns zone',
        slug: 'pdnsz-',
        description:
          'Azure Private DNS Zone is a service that provides an ability to use your own custom domain names, rather than the Azure-provided names. It helps in name resolution for virtual machines (VMs) within a virtual network and between virtual networks.',
        length:
          '1-63',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/dns/private-dns-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_dns_zone',
        restrictions:
          'Each label can contain alphanumerics, underscores, and hyphens. Each label is separated by a period.',
        resource: 'Microsoft.Network',
        entity: 'privateDnsZones',
        scope: 'resource group',
        icon: '/icons/Networking/DNS Zone (Private).png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FprivateDnsZones',
      },
      {
        name: 'firewall',
        slug: 'afw-',
        description:
          'Azure Firewall is a highly available and scalable firewall service in Microsoft Azure that provides inbound protection for non-HTTP/S protocols, outbound network-level protection for all ports and protocols, and application-level protection for outbound HTTP/S.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/firewall/overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/firewall',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End with alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'azureFirewalls',
        scope: 'resource group',
        icon: '/icons/Security/Azure Firewall.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FazureFirewalls',
      },
      {
        name: 'firewall policy',
        slug: 'afwp-',
        description:
          'Azure Firewall Policy is a security policy that is associated with one or more Azure Firewall instances. It provides fully qualified domain name (FQDN) filtering for outbound HTTP/S traffic and SQL server filtering for outbound TCP traffic. Threat intelligence-based filtering can also be enabled for outbound traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/firewall-manager/policy-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies',
        scope: 'resource group',
        icon: '/icons/Security/Azure Firewall Policy.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FfirewallPolicies',
      },
    ],
  },
  {
    items: [
      {
        name: 'bastion',
        slug: 'bas-',
        description:
          'Azure Bastion is a fully managed network security service that provides secure and seamless Remote Desktop Protocol (RDP) and Secure Shell (SSH) access to your virtual machines directly from the Azure portal.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/bastion/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/bastion_host',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'bastionHosts',
        scope: 'resource group',
        icon: '/icons/Networking/Bastion.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FbastionHosts',
      },
      {
        name: 'front door',
        slug: 'fd-',
        description:
          'Azure Front Door offers a scalable and secure entry point for fast delivery of your global web applications.',
        length: '5-64',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/frontdoor/front-door-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Network',
        entity: 'frontDoors',
        scope: 'global',
        icon: '/icons/Networking/Azure Front Door.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.cdn%2Fprofiles',
      },
      {
        name: 'front door firewall policy',
        slug: 'fdfp-',
        description:
          'Front Door Firewall Policies allow you to manage security policies associated with your Front Door instances, providing custom control on the handling of your web traffic.',
        length: '1-128',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/frontdoor/waf-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/frontdoor_firewall_policy',
        restrictions: 'Alphanumerics. Start with letter.',
        resource: 'Microsoft.Network',
        entity: 'frontdoorWebApplicationFirewallPolicies',
        scope: 'resource group',
        icon: '/icons/Networking/Azure Front Door.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.cdn%2Fprofiles',
      },
      {
        name: 'load balancer (internal)',
        slug: 'lbi-',
        description:
          'Internal Load Balancer in Azure is used to provide load balancing services within a private network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/load-balancer/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers',
        scope: 'resource group',
        icon: '/icons/Networking/Load Balancer.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/loadBalancers',
      },
      {
        name: 'load balancer (external)',
        slug: 'lbe-',
        description:
          'External Load Balancer in Azure is used to provide load balancing services for incoming Internet traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/load-balancer/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers',
        scope: 'resource group',
        icon: '/icons/Networking/Load Balancer.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/loadBalancers',
      },
      {
        name: 'load balancer rule',
        slug: 'rule-',
        description:
          'Load Balancer rules in Azure define the inbound traffic flow to the resources in your backend pool.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/load-balancer/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_rule',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'loadBalancers/inboundNatRules',
        scope: 'load balancer',
        icon: '/icons/Networking/Load Balancer Backend Load Balancing Rule.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/loadBalancers',
      },
      {
        name: 'local network gateway',
        slug: 'lgw-',
        description:
          'The local network gateway in Azure represents your on-premises network location to Azure for cross-premises connections.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/vpn-gateway/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/local_network_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'localNetworkGateways',
        scope: 'resource group',
        icon: '/icons/Networking/Local Network Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2Flocalnetworkgateways',
      },
      {
        name: 'nat gateway',
        slug: 'ngw-',
        description:
          'Azure NAT Gateway is a resource that provides outbound internet connectivity for virtual networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/nat-gateway/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'natGateways',
        scope: 'resource group',
        icon: '/icons/Networking/NAT Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FnatGateways',
      },
      {
        name: 'network interface (nic)',
        slug: 'nic-',
        description:
          'Network interface (NIC) is an interconnection between a virtual machine (VM) and the underlying Azure virtual network (VNet).',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkInterfaces',
        scope: 'resource group',
        icon: '/icons/Networking/Network Interface.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2Fnetworkinterfaces',
      },
      {
        name: 'network security group (nsg)',
        slug: 'nsg-',
        description:
          'A network security group (NSG) in Azure contains a list of security rules that allow or deny inbound or outbound network traffic based on source or destination IP address, port, and protocol.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/security-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_group',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkSecurityGroups',
        scope: 'resource group',
        icon: '/icons/Networking/Network Security Group.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FNetworkSecurityGroups',
      },
    ],
  },
  {
    items: [
      {
        name: 'nsg security rules',
        slug: 'nsgsr-',
        description:
          'NSG Security Rules define the allowed or denied traffic for Network Security Groups (NSGs) in Azure, enabling fine-tuned control over inbound and outbound network traffic.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/security-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_rule',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkSecurityGroups/securityRules',
        scope: 'network security group',
        icon: '/icons/Networking/Network Security Group Inbound Rule.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FNetworkSecurityGroups',
      },
      {
        name: 'network watcher',
        slug: 'nw-',
        description:
          'Azure Network Watcher provides network performance monitoring and diagnostic services. It helps to understand, diagnose, and gain insights to your network in Azure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/network-watcher/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_watcher',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'networkWatchers',
        scope: 'resource group',
        icon: '/icons/Networking/Network Watcher.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/NetworkWatcherMenuBlade/~/overview',
      },
      {
        name: 'private endpoint',
        slug: 'pep-',
        description:
          'Azure Private Endpoint enables a private and secure connection to Azure PaaS, customer-owned, or Microsoft partner services, directly from your virtual network. The private connection uses a private IP address from your VNet, effectively bringing the service into your VNet.',
        length: '2-64',
        category: Categories.NETWORKING,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/private-link/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_endpoint',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'privateEndpoints',
        scope: 'resource group',
        icon: '/icons/Networking/Private Endpoint.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/PrivateLinkCenterBlade/~/privateendpoints',
      },
      {
        name: 'public ip address',
        slug: 'pip-',
        description:
          'Public IP addresses in Azure allow inbound and outbound connectivity to the internet from Azure resources.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'publicIPAddresses',
        scope: 'resource group',
        icon: '/icons/Networking/Public IP Address.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FPublicIpAddresses',
      },
      {
        name: 'public ip prefix',
        slug: 'ippre-',
        description:
          'Azure Public IP Prefix is a reserved set of static IP addresses that can be used for your public-facing services.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/public-ip-address-prefix',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip_prefix',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'publicIPPrefixes',
        scope: 'resource group',
        icon: '/icons/Networking/Public IP Prefix.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FpublicIpPrefixes',
      },
      {
        name: 'route filter',
        slug: 'rf-',
        description:
          'Azure Route Filters are used to control routing paths in Azure, enabling you to influence the outbound traffic path for services connected to your ExpressRoute circuit.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/expressroute/how-to-routefilter-cli',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route_filter',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeFilters',
        scope: 'resource group',
        icon: '/icons/Networking/Route Filter.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FrouteFilters',
      },
      {
        name: 'route table',
        slug: 'rt-',
        description:
          'Azure Route Tables allow you to control the flow of traffic within your virtual networks. They can be associated with subnets, determining where network traffic is routed for each subnet.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/manage-route-table',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route_table',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeTables',
        scope: 'resource group',
        icon: '/icons/Networking/Route Table.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FrouteTables',
      },
      {
        name: 'service endpoint policy',
        slug: 'se-',
        description:
          'Service Endpoint Policies in Azure define which services are accessible from a subnet, providing granular network security for Azure service resources.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoint-policies-overview',
        terraformUrl:
          '',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'serviceEndpointPolicies',
        scope: 'resource group',
        icon: '/icons/Application/Service Endpoint Policy.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FserviceEndpointPolicies',
      },
      {
        name: 'traffic manager profile',
        slug: 'traf-',
        description:
          'Azure Traffic Manager allows you to control the distribution of user traffic to your service endpoints, providing a range of traffic-routing methods and endpoint monitoring options.',
        length: '1-63',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/traffic-manager/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/traffic_manager_profile',
        restrictions:
          'Alphanumerics, hyphens, and periods. Start and end with alphanumeric.',
        resource: 'Microsoft.Network',
        entity: 'trafficmanagerprofiles',
        scope: 'global',
        icon: '/icons/Networking/Traffic Manager Profile.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/TrafficManagers',
      },
      {
        name: 'user defined route (udr)',
        slug: 'udr-',
        description:
          'User Defined Routes (UDRs) in Azure allow for customization of network traffic routes, providing granular control over traffic flow within your virtual network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#user-defined',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'routeTables/routes',
        scope: 'route table',
        icon: '/icons/Networking/Route Table.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FrouteTables',
      },
    ],
  },
  {
    items: [
      {
        name: 'virtual network',
        slug: 'vnet-',
        description:
          'Azure Virtual Network is a fundamental building block for your private network in Azure, enabling many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks.',
        length: '2-64',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworks',
        scope: 'resource group',
        icon: '/icons/Networking/Virtual Network.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworks',
      },
      {
        name: 'subnet',
        slug: 'snet-',
        description:
          'Subnets in Azure represent a range within a Virtual Network that can have its own security and networking settings. Different types of Azure resources can be connected to different subnets within the same Virtual Network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualnetworks/subnets',
        scope: 'virtual network',
        icon: '/icons/Networking/Virtual Subnet.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworks',
      },
      {
        name: 'virtual network peering',
        slug: 'peer-',
        description:
          'Virtual Network Peering in Azure allows for seamless connectivity between Azure Virtual Networks, enabling resources in either Virtual Network to communicate with each other as if they are within the same network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_peering',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworks/virtualNetworkPeerings',
        scope: 'virtual network',
        icon: '/icons/Networking/Virtual Network Peering.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworks',
      },
      {
        name: 'virtual wan',
        slug: 'vwan-',
        description:
          'Azure Virtual WAN is a networking service that brings many networking, security, and routing functionalities together to provide a single operational interface. It enables global transit network architecture by connecting, and configuring multiple types of networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-wan/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_wan',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualWans',
        scope: 'resource group',
        icon: '/icons/Networking/Virtual WAN.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualWans',
      },
      {
        name: 'vpn gateway',
        slug: 'vpng-',
        description:
          'Azure VPN Gateway connects your on-premises networks to Azure through Site-to-Site VPNs in a similar way that you set up and connect to a remote branch office. It allows secure connections from on-premises networks to Azure virtual networks.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/vpn-gateway/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnGateways',
        scope: 'resource group',
        icon: '/icons/Networking/Virtual Network Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/applicationgateways',
      },
      {
        name: 'vpn gateway connection',
        slug: 'vcn-',
        description:
          'A VPN Gateway Connection in Azure is used to connect a virtual network gateway and a local network gateway, which is typically your on-premises network. It provides a secure, encrypted connection over the internet between your Azure virtual network and your on-premise network.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_connection',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnGateways/vpnConnections',
        scope: 'VPN gateway',
        icon: '/icons/Networking/Virtual Network Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworkGateways',
      },
      {
        name: 'vpn site',
        slug: 'vst-',
        description:
          'A VPN Site in Azure represents your on-premises location for a Site-to-Site VPN. It holds the VPN device information, such as the public IP address and the configuration values needed to connect with the VPN device.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpn-devices',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/vpn_site',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'vpnSites',
        scope: 'resource group',
        icon: '/icons/Networking/Virtual Network Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworkGateways',
      },
      {
        name: 'virtual network gateway',
        slug: 'vgw-',
        description:
          'A Virtual Network Gateway in Azure provides the capability to establish IPsec/IKE VPN tunnels between your virtual network and your on-premises hardware, or from a virtual network to a virtual network within Azure.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_gateway',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'virtualNetworkGateways',
        scope: 'resource group',
        icon: '/icons/Networking/Virtual Network Gateway.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworkGateways',
      },
      {
        name: 'web app firewall policy',
        slug: 'waf-',
        description:
          'Azure Web Application Firewall (WAF) policy provides centralized protection of your web applications from common exploits and vulnerabilities. WAF on Azure Front Door protects your applications from common threats such as SQL injection and cross-site scripting.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/web-application-firewall/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/web_application_firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies',
        scope: 'resource group',
        icon: '/icons/Security/WAF Policy.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FFrontDoorWebApplicationFirewallPolicies',
      },
      {
        name: 'waf policy rule group',
        slug: 'wafrg-',
        description:
          'A WAF Policy Rule Group in Azure represents a set of rules for a Web Application Firewall to act upon. The rules in a group are used to filter and control the incoming traffic to the web application.',
        length: '1-80',
        category: Categories.NETWORKING,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/web-application-firewall/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/web_application_firewall_policy',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.  End alphanumeric or underscore.',
        resource: 'Microsoft.Network',
        entity: 'firewallPolicies/ruleGroups',
        scope: 'firewall policy',
        icon: '/icons/Security/WAF Policy.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FFrontDoorWebApplicationFirewallPolicies',
      },
    ],
  },
  {
    items: [
      {
        name: 'app service environment',
        slug: 'ase-',
        description:
          'Azure App Service Environment is a fully isolated and dedicated environment for securely running App Service apps at high scale, including Web Apps, Mobile Apps, and APIs.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/app-service/environment/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service_environment',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain',
        icon: '/icons/Application/Application Service Environment.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FHostingEnvironments',
      },
      {
        name: 'app service plan',
        slug: 'asp-',
        description:
          'An Azure App Service Plan defines a set of compute resources for a web app to run, including the Tier, Number of Instances, and Size of the VMs.',
        length: '1-40',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_service_plan',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode',
        resource: 'Microsoft.Web',
        entity: 'serverfarms',
        scope: 'resource group',
        icon: '/icons/Application/Application Service Plan.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FserverFarms',
      },
      {
        name: 'availability set',
        slug: 'avail-',
        description:
          'An Availability Set is a logical grouping capability for isolating VM resources from each other when they\'re deployed.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/availability',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/availability_set',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End with alphanumeric or underscore.',
        resource: 'Microsoft.Compute',
        entity: 'availabilitySets',
        scope: 'resource group',
        icon: '/icons/Compute/Virtual Machine Availability Set.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FavailabilitySets',
      },
      {
        name: 'arc enabled server',
        slug: 'arcs-',
        description:
          'Azure Arc-enabled servers allow you to manage your Windows and Linux machines hosted outside of Azure, on your corporate network, or other cloud provider, similar to how you manage native Azure virtual machines.',
        length: '1-40',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-arc/servers/',
        terraformUrl:
          '',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode',
        resource: 'Microsoft.Web',
        entity: 'serverfarms',
        scope: 'resource group',
        icon: '/icons/Management/Azure Arc SCVMM Management Server.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_HybridCompute/AzureArcCenterBlade/~/scVmmManagementServer',
      },
      {
        name: 'arc enabled kubernetes cluster',
        slug: 'arck-',
        description:
          'Azure Arc-enabled Kubernetes enables you to attach and configure Kubernetes clusters anywhere using Azure. When a Kubernetes cluster is attached to Azure Arc, it will appear in the Azure portal, where you can use familiar Azure services and management capabilities.',
        length: '1-63',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-arc/kubernetes/overview',
        terraformUrl:
          '',
        restrictions:
          'Alphanumerics, underscores, and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.ContainerService',
        entity: 'managedClusters',
        scope: 'resource group',
        icon: '/icons/Management/Azure Arc Kubernetes.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_HybridCompute/AzureArcCenterBlade/~/kubernetesclusters',
      },
      {
        name: 'disk encryption set',
        slug: 'des-',
        description:
          'Azure Disk Encryption Sets is a resource that is used to provide disk encryption keys for Azure managed disks. It uses keys from your Azure Key Vault to encrypt and decrypt the disks of your virtual machines.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/disk_encryption_set',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'diskEncryptionSets',
        scope: 'resource group',
        icon: '/icons/Storage/Disk Encryption Set.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FdiskEncryptionSets',
      },
      {
        name: 'function app',
        slug: 'func-',
        description:
          'Azure Function App is a serverless compute service that lets you run event-triggered code without having to explicitly provision or manage infrastructure.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-functions/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/windows_function_app',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to PunycodeCan not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites/functions',
        scope: 'global or per domain',
        icon: '/icons/Application/Function App.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp',
      },
      {
        name: 'shared image gallery',
        slug: 'gal',
        description:
          'Azure Shared Image Gallery is a service that helps you build structure and organization around your images. It provides grouping of image definitions within a \'gallery\' container where each can have multiple versions.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/shared-image-galleries',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/shared_image_gallery',
        restrictions:
          'Alphanumerics and periods. Start and end with alphanumeric.',
        resource: 'Microsoft.Compute',
        entity: 'galleries',
        scope: 'resource group',
        icon: '/icons/Compute/Shared Image Gallery.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2Fgalleries',
      },
      {
        name: 'managed disk (os)',
        slug: 'osdisk-',
        description:
          'Azure Managed Disks are block-level storage volumes that are managed by Azure and used with Azure Virtual Machines. Managed Disks are like a physical disk in an on-premises server but virtualized.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine.html',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'disks',
        scope: 'resource group',
        icon: '/icons/Storage/Managed Disk Standard SSD.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2Fdisks',
      },
      {
        name: 'load testing service',
        slug: 'lt-',
        description: 'Microsoft Load Testing Service is a fully managed service in Azure, designed to help developers and testers generate high-scale load and run simulations. The service supports creating tests quickly without deep knowledge of load-testing tools, or allows uploading of existing Apache JMeter scripts. It provides actionable insights into performance, scalability, and capacity, supporting continuous improvement through automated CI/CD workflows.',
        length: '1-64',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/load-testing/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/load_test',
        restrictions: 'Alphanumerics, underscores, periods, and hyphens.',
        resource: 'Microsoft.LoadTestService',
        entity: 'loadTests',
        scope: 'resource group',
        icon: '/icons/Management/Azure Load Testing.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.LoadTestService%2FLoadTests',
      },
    ],
  },
  {
    items: [
      {
        name: 'managed disk (data)',
        slug: 'disk-',
        description:
          'Azure Managed Disks for data are block-level storage volumes that manage your data, used with Azure Virtual Machines. They operate like a physical disk in an on-premises server but are virtualized.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/managed_disk',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Compute',
        entity: 'disks',
        scope: 'resource group',
        icon: '/icons/Storage/Managed Disk Standard SSD.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2Fdisks',
      },
      {
        name: 'notification hubs',
        slug: 'nft-',
        description:
          'Azure Notification Hubs provide a scalable, tailored notification infrastructure that enables you to push notifications from any backend (in the cloud or on-premises) to any platform (iOS, Android, Windows, etc.).',
        length: '1-260',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/notification-hubs/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/notification_hub',
        restrictions:
          'Alphanumerics, periods, hyphens, and underscores. Start alphanumeric.',
        resource: 'Microsoft.NotificationHubs',
        entity: 'namespaces/notificationHubs',
        scope: 'namespace',
        icon: '/icons/Application/Notification Hub.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.NotificationHubs%2Fnamespaces%2FnotificationHubs',
      },
      {
        name: 'notification hubs namespace',
        slug: 'nftns-',
        description:
          'Azure Notification Hubs Namespaces provide a unique scoping container, in which you can create multiple notification hubs.',
        length: '6-50',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/notification-hubs/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/notification_hub_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with alphanumeric.',
        resource: 'Microsoft.NotificationHubs',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/Application/Notification Hub.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.NotificationHubs%2Fnamespaces',
      },
      {
        name: 'snapshot',
        slug: 'snap-',
        description:
          'Azure Snapshots are read-only, full copies of managed disks that are used to create exact replicas or to restore a disk to a previous state.',
        length: '1-80',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machines/disks-incremental-snapshots',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/snapshot',
        restrictions:
          'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End with alphanumeric or underscore.',
        resource: 'Microsoft.Compute',
        entity: 'snapshots',
        scope: 'resource group',
        icon: '/icons/Storage/Managed Disk Snapshot.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2Fsnapshots',
      },
      {
        name: 'static web app',
        slug: 'stapp-',
        description:
          'Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a GitHub repository.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/static-web-apps/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/static_site',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode. Can not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain',
        icon: '/icons/Application/Static Web App.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FStaticSites',
      },
      {
        name: 'virtual machine windows',
        slug: 'vmw',
        description:
          'Azure Virtual Machines (VMs) provide on-demand, high-scale, secure, virtualized infrastructure using Windows or Linux.',
        length: '1-15',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/virtual-machines/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/windows_virtual_machine',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Windows VMs Can not include period or end with hyphen. Linux VMs Can not end with period or hyphen and can have 1-64 characters rather than 15.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachines',
        scope: 'resource group',
        icon: '/icons/Compute/Virtual Machine Windows.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines'
      },
      {
        name: 'virtual machine linux',
        slug: 'vml',
        description:
          'Azure Virtual Machines (VMs) provide on-demand, high-scale, secure, virtualized infrastructure using Windows or Linux.',
        length: '1-64',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/virtual-machines/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Windows VMs Can not include period or end with hyphen. Linux VMs Can not end with period or hyphen and can have 1-64 characters rather than 15.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachines',
        scope: 'resource group',
        icon: '/icons/Compute/Virtual Machine Linux.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines',
      },
      {
        name: 'virtual machine scale set windows',
        slug: 'vmss-',
        description:
          'Azure Virtual Machine Scale Sets allow you to create and manage a group of identical, load balanced VMs, scaling automatically in response to demand.',
        length: '1-15',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/windows_virtual_machine_scale_set',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Can not start with underscore. Can not end with period or hyphen.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachineScaleSets',
        scope: 'resource group',
        icon: '/icons/Compute/Virtual Machine Scale Set.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Compute%2FvirtualMachineScaleSets',
      },
      {
        name: 'virtual machine scale set linux',
        slug: 'vmss-',
        description:
          'Azure Virtual Machine Scale Sets allow you to create and manage a group of identical, load balanced VMs, scaling automatically in response to demand.',
        length: '1-64',
        category: Categories.COMPUTEANDWEB,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set',
        restrictions:
          'Can not use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { }  | ;. Can not start with underscore. Can not end with period or hyphen.',
        resource: 'Microsoft.Compute',
        entity: 'virtualMachineScaleSets',
        scope: 'resource group',
        icon: '/icons/Compute/Virtual Machine Scale Set.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Compute%2FvirtualMachineScaleSets',
      },
      {
        name: 'app service',
        slug: 'app-',
        description:
          'Azure App Service is a fully managed platform that enables you to build, deploy, and scale enterprise-grade web applications with ease.',
        length: '2-60',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/app-service/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/windows_web_app',
        restrictions:
          'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode. Can not start or end with hyphen.',
        resource: 'Microsoft.Web',
        entity: 'sites',
        scope: 'global or per domain',
        icon: '/icons/Application/Application Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites',
      },
    ],
  },
  {
    items: [
      {
        name: 'container kubernetes service',
        slug: 'aks-',
        description:
          'Azure Kubernetes Service (AKS) is a managed container orchestration service provided by Azure, which simplifies Kubernetes management, deployment, and operations.',
        length: '1-63',
        category: Categories.CONTAINERS,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/aks/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kubernetes_cluster',
        restrictions:
          'Alphanumerics, underscores, and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.ContainerService',
        entity: 'managedClusters',
        scope: 'resource group',
        icon: '/icons/Compute/Container Kubernetes Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerService%2FmanagedClusters',
      },
      {
        name: 'container registry',
        slug: 'cr',
        description:
          'Azure Container Registry allows you to store and manage container images across all types of Azure deployments.',
        length: '5-50',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-registry/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_registry',
        restrictions: 'Alphanumerics.',
        resource: 'Microsoft.ContainerRegistry',
        entity: 'registries',
        scope: 'global',
        icon: '/icons/Compute/Container Registry.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries',
      },
      {
        name: 'container instance',
        slug: 'ci',
        description:
          'Azure Container Instances offers the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service.',
        length: '1-63',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-instances/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_group',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Can not start or end with hyphen. Consecutive hyphens aren\'t allowed.',
        resource: 'Microsoft.ContainerInstance',
        entity: 'containerGroups',
        scope: 'resource group',
        icon: '/icons/Compute/Container Instance.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerInstance%2FcontainerGroups',
      },
      {
        name: 'service fabric cluster',
        slug: 'sf-',
        description:
          'Azure Service Fabric is a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers.',
        length: '4-23',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/service-fabric/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/service_fabric_cluster',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Start with lowercase letter. End with lowercase letter or number.',
        resource: 'Microsoft.ServiceFabric',
        entity: 'clusters',
        scope: 'region',
        icon: '/icons/Compute/Container Service Fabric Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceFabric%2Fclusters',
      },
      {
        name: 'service fabric managed cluster',
        slug: 'sfmc-',
        description:
          'Azure Service Fabric is a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers.',
        length: '4-23',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/service-fabric/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/service_fabric_cluster',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Start with lowercase letter. End with lowercase letter or number.',
        resource: 'Microsoft.ServiceFabric',
        entity: 'managedClusters',
        scope: 'region',
        icon: '/icons/Application/Service Fabric Managed Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceFabric%2Fmanagedclusters',
      },
      {
        name: 'Container App Environment',
        slug: 'cae-',
        description: 'A Container Apps environment is a secure boundary around groups of container apps that share the same virtual network and write logs to the same logging destination. They are fully managed where Azure handles OS upgrades, scale operations, failover procedures, and resource balancing.',
        length: '2-32',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-apps/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_app_environment',
        restrictions: 'Lowercase letters, numbers, and hyphens. Start with a letter and end with an alphanumeric character.',
        resource: 'Microsoft.App',
        entity: 'managedEnvironments',
        scope: 'resource group',
        icon: '/icons/Application/Container App Environment.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.App%2FmanagedEnvironments',
      },
      {
        name: 'Container App',
        slug: 'ca-',
        description: 'Azure Container Apps is a fully managed platform for running containerized applications in the cloud. It supports both Linux and Windows containers, allowing developers to build and deploy a variety of applications without having to manage the underlying infrastructure.',
        length: '2-32',
        category: Categories.CONTAINERS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/container-apps/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_app',
        restrictions: 'Lowercase letters, numbers, and hyphens. Start with a letter and end with an alphanumeric character.',
        resource: 'Microsoft.App',
        entity: 'containerApps',
        scope: 'resource group',
        icon: '/icons/Application/Container App.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.App%2FcontainerApps',
      },
    ],
  },
  {
    items: [
      {
        name: 'cosmos db account',
        slug: 'cosmos-',
        description:
          'Azure Cosmos DB is a globally distributed, multi-model database service that enables you to elastically and independently scale throughput and storage across any number of Azure regions worldwide.',
        length: '3-44',
        category: Categories.DATABASES,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/cosmos-db/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cosmosdb_account',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Start with lowercase letter or number.',
        resource: 'Microsoft.DocumentDB',
        entity: 'databaseAccounts',
        scope: 'global',
        icon: '/icons/Data/Azure Cosmos DB.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DocumentDb%2FdatabaseAccounts',
      },
      {
        name: 'cache for redis',
        slug: 'redis-',
        description:
          'Azure Cache for Redis offers an in-memory data store based on software Redis. It gives you access to a secure, dedicated Redis cache, managed by Microsoft.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/redis_cache',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric. Consecutive hyphens not allowed.',
        resource: 'Microsoft.Cache',
        entity: 'Redis',
        scope: 'global',
        icon: '/icons/Networking/Azure Cache for Redis.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Cache%2FRedis',
      },
      {
        name: 'sql server',
        slug: 'sql-',
        description: 'Azure SQL Server is a fully managed relational database service by Microsoft. It provides the broadest SQL Server engine compatibility and up-to-date security and compliance standards. Users can focus on optimizing their database management and data manipulation without the need to manage infrastructure.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/azure-sql/?view=azuresql-db',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_server',
        restrictions: 'Lowercase letters, numbers, and hyphens. Cannot start or end with a hyphen.',
        resource: 'Microsoft.Sql',
        entity: 'servers',
        scope: 'global',
        icon: '/icons/Data/SQL Server.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers'
      },
      {
        name: 'sql database',
        slug: 'sqldb-',
        description:
          'Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most of the database management functions such as upgrading, patching, backups, and monitoring without user involvement.',
        length: '1-128',
        category: Categories.DATABASES,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-sql/?view=azuresql-db',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_database',
        restrictions:
          'Can not use:<>%&:/? or control charactersCan not end with period or space.',
        resource: 'Microsoft.Sql',
        entity: 'servers/databases',
        scope: 'server',
        icon: '/icons/Data/SQL Database.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers%2Fdatabases',
      },
      {
        name: 'mysql database',
        slug: 'mysqldb-',
        description:
          'Azure Database for MySQL provides a managed database service for app development and deployment that allows you to stand up a MySQL database in minutes and scale on the fly.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/mysql/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/mysql_database',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.DBforMySQL',
        entity: 'servers/databases',
        scope: 'servers',
        icon: '/icons/Data/Azure Database for MySQL.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DBforMySQL%2Fservers',
      },
      {
        name: 'postgresql database',
        slug: 'psqldb-',
        description:
          'Azure Database for PostgreSQL provides a managed database service for app development and deployment that allows you to stand up a PostgreSQL database in minutes and scale on the fly.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/postgresql/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_database',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.DBforPostgreSQL',
        entity: 'servers/databases',
        scope: 'servers',
        icon: '/icons/Data/Azure Database for PostgreSQL.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.AzureArcData%2FpostgresInstances',
      },
      {
        name: 'sql server stretch database',
        slug: 'sqlstrdb-',
        description:
          'Azure SQL Stretch Database is a service that lets you extend your SQL Server databases into the Azure cloud. This allows you to keep more of your historical data at your fingertips.',
        length: '1-128',
        category: Categories.DATABASES,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/sql-server-stretch-database/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_database',
        restrictions:
          'Can not use:<>%&:/? or control charactersCan not end with period or space.',
        resource: 'Microsoft.Sql',
        entity: 'servers/databases',
        scope: 'server',
        icon: '/icons/Data/SQL Database.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers%2Fdatabases/kind/v12.0%2Cuser%2Cstretch',
      },
      {
        name: 'sql managed instance',
        slug: 'sqlmi-',
        description:
          'Azure SQL Managed Instance is a fully managed SQL Server Database Engine hosted in Azure cloud which provides most of the SQL Server database engine features.',
        length: '1-63',
        category: Categories.DATABASES,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/sql_managed_instance',
        restrictions:
          'Lowercase letters, numbers, and hyphens. Can not start or end with hyphen.',
        resource: 'Microsoft.Sql',
        entity: 'managedInstances',
        scope: 'global',
        icon: '/icons/Data/SQL Managed Instance.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2FmanagedInstances',
      },
      {
        name: 'storage account',
        slug: 'st',
        description:
          'Azure Storage Account is a modern data storage solution that provides secure, scalable, and durable storage services. It includes Blob storage, File Storage, Queue Storage, Table Storage, and Azure Data Lake Storage.',
        length: '3-24',
        category: Categories.STORAGE,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.Storage',
        entity: 'storageAccounts',
        scope: 'global',
        icon: '/icons/Storage/Storage Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts',
      },
      {
        name: 'storsimple',
        slug: 'ssimp-',
        description:
          'Azure StorSimple is a hybrid cloud storage solution that integrates your on-premises IT environment with the Azure storage infrastructure. It provides primary storage, archive, backup, and disaster recovery, while reducing cost and IT workload.',
        length: '2-50',
        category: Categories.STORAGE,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/storsimple/',
        terraformUrl:
          '',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with alphanumeric.',
        resource: 'Microsoft.StorSimple',
        entity: 'managers',
        scope: 'resource group',
        icon: '/icons/Data/StorSimple Device Manager.png',
        code: '',
        viewAllURL: '',
      },
    ],
  },
  {
    items: [
      {
        name: 'machine learning workspace',
        slug: 'mlw-',
        description:
          'Azure Machine Learning workspace is a centralized place to work with all the artifacts you create when you use Azure Machine Learning. The workspace keeps a history of all training runs, including logs, metrics, output, and a snapshot of your scripts.',
        length: '1-260',
        category: Categories.AIANDML,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/machine-learning/concept-workspace',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/machine_learning_workspace',
        restrictions:
          'Can not use:<>%&:?+/ or control charactersCan not end with a space.',
        resource: 'Microsoft.MachineLearning',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/AI/Machine Learning.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.MachineLearning%2Fworkspaces',
      },
      {
        name: 'search service',
        slug: 'srch-',
        description:
          'Azure Search Service is a fully managed cloud search service that provides a rich search experience to custom applications. You can populate it with your own data and the service finds what\'s relevant to user queries.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/search/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/search_service',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.Search',
        entity: 'searchServices',
        scope: 'resource group',
        icon: '/icons/AI/Search Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/CognitiveSearch',
      },
      {
        name: 'openai service',
        slug: 'oai-',
        description:
          'Azure OpenAI service offers natural language processing capabilities, aiding applications in tasks such as translation, text summarization, sentiment analysis, and more.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Azure OpenAI.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/OpenAI',
      },
      {
        name: 'speech service',
        slug: 'spch-',
        description:
          'Azure Speech service provides real-time and batch speech-to-text and text-to-speech conversion capabilities, enabling applications to understand and speak naturally.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Speech Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/SpeechServices',
      },
      {
        name: 'language service',
        slug: 'lang-',
        description:
          'Azure Language service facilitates understanding and translation of human languages, enhancing applications with capabilities like sentiment analysis, entity extraction, and language identification.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Language.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/TextAnalytics',
      },
      {
        name: 'translator service',
        slug: 'tran-',
        description:
          'Azure Translator service allows applications to translate text in real-time or batch across more than 60 languages, supporting multi-lingual user experiences.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Text Translator.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/TextTranslation',
      },
      {
        name: 'vision service',
        slug: 'vis-',
        description:
          'Azure Vision service offers image-processing algorithms to smartly identify, caption, index, and moderate pictures and videos for comprehensive visual experiences.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Vision.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/ComputerVision',
      },
      {
        name: 'face service',
        slug: 'face-',
        description:
          'Azure Face service enables detecting, recognizing, and analyzing human faces in images, empowering applications to handle tasks like face verification and similar face searching.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Face API.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/Face',
      },
      {
        name: 'anomaly detector service',
        slug: 'ad-',
        description:
          'Azure Anomaly Detector service provides AI-based anomaly detection capabilities to identify abnormal patterns or trends in your data quickly and accurately.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Anomaly Detector.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/AnomalyDetector',
      },
      {
        name: 'content safety service',
        slug: 'cs-',
        description:
          'Azure Content Safety service is designed to identify potentially harmful or inappropriate content across images, text, and videos to ensure user safety and compliance.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Content Safety.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/ContentSafety',
      },
    ],
  },
  {
    items: [
      {
        name: 'personalizer service',
        slug: 'pers-',
        description:
          'Azure Personalizer service offers real-time personalization capabilities, helping to deliver personalized experiences to each user based on their specific needs and preferences.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Personaliser.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/Personalizer',
      },
      {
        name: 'bot service',
        slug: 'bot-',
        description:
          'Azure Bot Service enables rapid intelligent bot development powered by the Microsoft Bot Framework, allowing you to build, connect, test, and deploy AI-rich bots.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Bot Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/AppliedAIHub/~/BotServices',
      },
      {
        name: 'document intelligence service',
        slug: 'doci-',
        description:
          'Azure Document Intelligence service enables extraction of insights and information from unstructured documents, turning them into actionable results.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Form Recogniser.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/FormRecognizer',
      },
      {
        name: 'metrics advisor service',
        slug: 'ma-',
        description:
          'Azure Metrics Advisor service provides an AI-powered anomaly detection and metric monitoring tool for personalized alert configuration, root cause analysis, and proactive problem remediation.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/Management/Metrics Advisor.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/MetricsAdvisor',
      },
      {
        name: 'video indexer service',
        slug: 'vi-',
        description:
          'Azure Video Indexer service extracts insights from videos using AI technologies, including emotions, sentiment, spoken and written words, people, and objects.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Video Indexer.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.VideoIndexer%2Faccounts',
      },
      {
        name: 'immersive reader service',
        slug: 'ir-',
        description:
          'Azure Immersive Reader service enhances reading and comprehension of text, offering features like reading aloud, translating into different languages, and focus mode.',
        length: '2-64',
        category: Categories.AIANDML,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/cognitive-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cognitive_account',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.CognitiveServices',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/AI/Cognitive Services Immersive Reader.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/ImmersiveReader',
      },
      {
        name: 'Microsoft Fabric',
        slug: 'fab-',
        description:
          'Microsoft Fabric is an all-in-one analytics solution for enterprises. It covers everything from data movement to data science, Real-Time Analytics, and business intelligence. The service offers a comprehensive suite of services, including data lake, data engineering, and data integration, all in one place. It is built on a foundation of Software as a Service (SaaS), which takes simplicity and integration to a whole new level.',
        length: '3-63',
        category: Categories.AIANDML,
        learnUrl: 'https://learn.microsoft.com/en-us/fabric/get-started/',
        terraformUrl:
          '',
        restrictions:
          'Alphanumerics. Start with alphanumeric.',
        resource: 'Microsoft.Fabric',
        entity: 'capacity',
        scope: 'region',
        icon: '/icons/AI/Microsoft Fabric.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Fabric%2Fcapacities',
      }
    ],
  },
  {
    items: [
      {
        name: 'analysis services server',
        slug: 'as',
        description:
          'Azure Analysis Services is a fully managed platform as a service (PaaS) that provides enterprise-grade data models in the cloud. It is a part of Microsoft\'s business analytics stack that lets you develop semantic data models to simplify data analysis and reporting.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/analysis-services/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/analysis_services_server',
        restrictions:
          'Lowercase letters and numbers. Start with lowercase letter.',
        resource: 'Microsoft.AnalysisServices',
        entity: 'servers',
        scope: 'resource group',
        icon: '/icons/Data/Analysis Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.AnalysisServices%2Fservers',
      },
      {
        name: 'databricks workspace',
        slug: 'dbw-',
        description:
          'Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform. It provides a workspace environment where you can create Apache Spark clusters, write notebooks, and build workflows.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/databricks/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/databricks_workspace',
        restrictions: 'Alphanumerics, underscores, and hyphens',
        resource: 'Microsoft.Databricks',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/Data/Azure Databricks.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Databricks%2Fworkspaces',
      },
      {
        name: 'stream analytics',
        slug: 'asa-',
        description:
          'Azure Stream Analytics is a real-time analytics and complex event-processing engine that is designed to analyze and visualize streaming data in real-time. It enables you to setup real-time analytic computations on streaming data from multiple sources such as devices, sensors, web sites, social media, applications, infrastructure systems, and more.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/stream-analytics/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/stream_analytics_job',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.StreamAnalytics',
        entity: 'streamingjobs',
        scope: 'resource group',
        icon: '/icons/Application/Stream Analytics Job.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.StreamAnalytics%2FStreamingJobs',
      },
      {
        name: 'data explorer cluster',
        slug: 'dec',
        description:
          'Azure Data Explorer (ADX) is a fast, fully managed data analytics service for real-time analysis on large volumes of data streaming from applications, websites, IoT devices, and more. You can use Azure Data Explorer to collect, store, and analyze diverse data to improve products, enhance customer experiences, monitor devices, and boost operations.',
        length: '4-22',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/data-explorer/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kusto_cluster.html',
        restrictions: 'Lowercase letters and numbers. Start with letter.',
        resource: 'Microsoft.Kusto',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Data/Azure Data Explorer Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Kusto%2Fclusters',
      },
      {
        name: 'data explorer cluster database',
        slug: 'dedb-',
        description:
          'A database in Azure Data Explorer (ADX) is a logical container for data. Each database belongs to a cluster and contains a set of tables where each table is a collection of ordered columns.',
        length: '1-260',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/data-explorer/',
        terraformUrl: '',
        restrictions: 'Alphanumerics, hyphens, spaces, and periods.',
        resource: 'Microsoft.Kusto',
        entity: '/clusters/databases',
        scope: 'cluster',
        icon: '/icons/Data/Azure Data Explorer Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Kusto%2Fclusters',
      },
      {
        name: 'data factory',
        slug: 'adf-',
        description:
          'Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/data-factory/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.DataFactory',
        entity: 'factories',
        scope: 'global',
        icon: '/icons/Data/Data Factory.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataFactory%2FdataFactories',
      },
      {
        name: 'data lake store account',
        slug: 'dls',
        description:
          'Azure Data Lake Store is an enterprise-wide hyper-scale repository for big data analytic workloads. It enables you to capture data of any size, type, and ingestion speed in one single place for operational and exploratory analytics.',
        length: '3-24',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_lake_store',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.DataLakeAnalytics',
        entity: 'accounts/dataLakeStoreAccounts',
        scope: 'account',
        icon: '/icons/Data/Data Lake.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataLakeStore%2Faccounts',
      },
      {
        name: 'data lake analytics account',
        slug: 'dla',
        description:
          'Azure Data Lake Analytics is an on-demand analytics job service that simplifies big data. Instead of deploying, configuring, and tuning hardware, you write queries to transform your data and extract valuable insights.',
        length: '3-24',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/data-lake-analytics/data-lake-analytics-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_lake_analytics_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.DataLakeAnalytics',
        entity: 'accounts',
        scope: 'global',
        icon: '/icons/Data/Data Lake Analytics.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataLakeAnalytics%2Faccounts',
      },
      {
        name: 'event hub namespace',
        slug: 'evhns-',
        description:
          'Azure Event Hubs is a big data streaming platform and event ingestion service. The Event Hubs namespace provides a unique scoping container, in which you create one or more event hubs.',
        length: '6-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/event-hubs/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventhub_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.EventHub',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/Application/Event Hub.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.EventHub%2Fnamespaces',
      },
      {
        name: 'event hub',
        slug: 'evh-',
        description:
          'An Event Hub is a unique entity within an Event Hubs namespace that provides a target for applications to send event data. It can receive and process millions of events per second, so you can process and analyze the massive amounts of data produced by your connected devices and applications.',
        length: '6-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/event-hubs/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventhub',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.EventHub',
        entity: 'clusters',
        scope: 'resource group',
        icon: '/icons/Application/Event Hub.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.EventHub%2Fnamespaces',
      },
    ],
  },
  {
    items: [
      {
        name: 'event grid',
        slug: 'evgd-',
        description:
          'Azure Event Grid is a service that manages all the events your application needs, from a single place. It allows for uniform event consumption using a publish-subscribe model.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/event-grid/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_domain',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'domains',
        scope: 'resource group',
        icon: '/icons/Application/Event Grid Namespace.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_EventGrid/EventGridCentralMenuBlade/~/overview',
      },
      {
        name: 'event grid subscription',
        slug: 'egst-',
        description:
          'Event Grid subscriptions represent the relationship between an event source and an endpoint. They define the events you want to track, and where to send the events.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/event-grid/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_event_subscription',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'eventSubscriptions',
        scope: 'resource group',
        icon: '/icons/Application/Event Grid Subscription.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_EventGrid/EventGridCentralMenuBlade/~/overview',
      },
      {
        name: 'event grid topic',
        slug: 'evgt-',
        description:
          'Event Grid Topics provide a user-defined endpoint that you post your event data to. Subscribers decide which topics they want to subscribe to.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/event-grid/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/eventgrid_topic',
        restrictions: 'Alphanumerics and hyphens.',
        resource: 'Microsoft.EventGrid',
        entity: 'domains/topics',
        scope: 'domain',
        icon: '/icons/Application/Event Grid Topic.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_EventGrid/EventGridCentralMenuBlade/~/system_topics',
      },
      {
        name: 'hdinsight - hadoop cluster',
        slug: 'hadoop-',
        description:
          'Azure HDInsight Hadoop cluster is a cloud distribution of Hadoop components. It provides a software framework designed for processing, analyzing and deriving insights from data.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/hdinsight/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_hadoop_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'hdinsight - hbase cluster',
        slug: 'hbase-',
        description:
          'Azure HDInsight HBase cluster is a NoSQL database built on Hadoop that provides random access and strong consistency for large amounts of unstructured and semi-structured data.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/hdinsight/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_hbase_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'hdinsight - kafka cluster',
        slug: 'kafka-',
        description:
          'Azure HDInsight Kafka cluster is a managed platform that makes it easy to process streams of real-time data. It offers an effective platform to ingest data from IoT devices and real-time applications.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/hdinsight/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_kafka_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'hdinsight - spark cluster',
        slug: 'spark-',
        description:
          'Azure HDInsight Spark cluster is an open-source, parallel-processing framework that supports in-memory processing to boost the performance of big-data analytic applications.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/hdinsight/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/hdinsight_spark_cluster',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'hdinsight - storm cluster',
        slug: 'storm-',
        description:
          'Azure HDInsight Storm cluster is a distributed real-time computation system for processing large volumes of high-velocity data. It\'s reliable, and you can use it with any programming language.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/hdinsight/storm/apache-storm-overview',
        terraformUrl: '',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'hdinsight - ml services cluster',
        slug: 'mls-',
        description:
          'Azure HDInsight ML Services cluster integrates R Server with Spark and the Apache Hadoop framework, providing an ideal environment for your machine learning workloads.',
        length: '3-59',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/hdinsight/',
        terraformUrl: '',
        restrictions:
          'Alphanumerics and hyphens. Start and end with letter or number.',
        resource: 'Microsoft.HDInsight',
        entity: 'clusters',
        scope: 'global',
        icon: '/icons/Compute/HDInsight Cluster.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HDInsight%2Fclusters',
      },
      {
        name: 'iot hub',
        slug: 'iot-',
        description:
          'Azure IoT Hub is a managed service that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages.',
        length: '3-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/iot-hub/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub',
        restrictions: 'Alphanumerics and hyphens. Can not end with hyphen.',
        resource: 'Microsoft.Devices',
        entity: 'IotHubs',
        scope: 'global',
        icon: '/icons/IoT/IoT Hub.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Devices%2FIotHubs',
      },
    ],
  },
  {
    items: [
      {
        name: 'iot device provisioning services',
        slug: 'provs-',
        description:
          'Azure IoT Hub Device Provisioning Service is a helper service for IoT Hub that enables zero-touch, just-in-time provisioning to the right IoT hub without requiring human intervention.',
        length: '3-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/iot-dps/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub_dps',
        restrictions: 'Alphanumerics and hyphens. End with alphanumeric.',
        resource: 'Microsoft.Devices',
        entity: 'provisioningServices',
        scope: 'resource group',
        icon: '/icons/IoT/IoT Device Provisioning Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Devices%2FIotHubs',
      },
      {
        name: 'provisioning services certificate',
        slug: 'pcert-',
        description:
          'Certificates in the IoT Hub Device Provisioning Service enhance security in device provisioning by enabling provisioning services to verify the identity of devices.',
        length: '1-64',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/iot-dps/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iothub_dps_certificate',
        restrictions: 'Alphanumerics, hyphens, periods, and underscores.',
        resource: 'Microsoft.Devices',
        entity: 'provisioningServices/certificates',
        scope: 'provisioningServices',
        icon: '/icons/IoT/IoT Device Provisioning Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Devices%2FIotHubs',
      },
      {
        name: 'power bi embedded',
        slug: 'pbi-',
        description: 'Power BI Embedded is a Microsoft Azure service that lets developers embed visuals, reports, and dashboards into an application. This embedding is done through a capacity-based, hourly metered model. It provides data insights and analytics capabilities without the need for building the features from scratch.',
        category: Categories.ANALYTICSANDIOT,
        length: '3-63',
        learnUrl: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/powerbi_embedded',
        restrictions: 'Alphanumerics and hyphens. Cannot start with hyphen. Cannot use consecutive hyphens.',
        resource: 'Microsoft.PowerBIDedicated',
        entity: 'capacities',
        scope: 'resource group',
        icon: '/icons/AI/Power BI Embedded.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.PowerBIDedicated%2Fcapacities'
      },
      {
        name: 'power bi workspace',
        slug: 'pbiw-',
        description:
          'Power BI is a suite of business analytics tools by Microsoft that deliver insights throughout your organization. It connects to hundreds of data sources, simplifies data prep and drives ad hoc analysis.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/powerbi_embedded',
        restrictions:
          'Alphanumerics and hyphens. Can not start with hyphen. Can not use consecutive hyphens.',
        resource: 'Microsoft.PowerBI',
        entity: 'workspaceCollections',
        scope: 'region',
        icon: '/icons/AI/Power BI.png',
        code: '',
        viewAllURL: 'https://app.powerbi.com/',
      },
      {
        name: 'time series insights environment',
        slug: 'tsi-',
        description:
          'Azure Time Series Insights is a fully managed analytics, storage, and visualization service for managing IoT-scale time-series data in the cloud. It provides a way to store, visualize, and query large amounts of time series data.',
        length: '1-90',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/time-series-insights/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/iot_time_series_insights_standard_environment',
        restrictions: 'Can not use:\'<>%&:?/# or control characters',
        resource: 'Microsoft.TimeSeriesInsights',
        entity: 'environments',
        scope: 'resource group',
        icon: '/icons/Data/Time Series Insights Environment.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.TimeSeriesInsights%2Fenvironments',
      },
      {
        name: 'synapse analytics workspace',
        slug: 'synw-',
        description:
          'Azure Synapse Analytics is an integrated analytics service that accelerates the time it takes to get insights and to unlock the value of your data.',
        length: '1-50',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/synapse-analytics/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_workspace',
        restrictions:
          'Lowercase letters, hyphens, and numbers. Start and end with letter or number. Can not contain -ondemand',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces',
        scope: 'global',
        icon: '/icons/Data/Azure Synapse Analytics.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Synapse%2Fworkspaces',
      },
      {
        name: 'synapse analytics sql dedicated pool',
        slug: 'syndp',
        description:
          'Azure Synapse SQL Dedicated Pool (formerly SQL Data Warehouse) is a distributed system designed to perform analytics on large data. It supports massive parallel processing (MPP), which makes it suitable for running high-performance analytics.',
        length: '1-60',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_sql_pool',
        restrictions:
          'Can not contain <>%&:/?@- or control characters. Can not end with . or space. Can not contain reserved word.',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces/sqlPools',
        scope: 'workspace',
        icon: '/icons/Data/Azure Synapse Analytics Dedicated SQL Pool.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Synapse%2Fworkspaces',
      },
      {
        name: 'synapse analytics spark pool',
        slug: 'synsp',
        description:
          'Spark pools in Azure Synapse Analytics are used for big data processing. It provides a computation cluster that allows you to analyze large amounts of data using Spark jobs.',
        length: '1-15',
        category: Categories.ANALYTICSANDIOT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/synapse_spark_pool',
        restrictions:
          'Letters and numbers. Start with letter. End with letter or number. Can not contain reserved word.',
        resource: 'Microsoft.Synapse',
        entity: 'workspaces/bigDataPools',
        scope: 'workspace',
        icon: '/icons/Data/Azure Synapse Analytics Spark Pool.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Synapse%2Fworkspaces',
      },
      {
        name: 'digital twins instance',
        slug: 'dt-',
        description: 'Azure Digital Twins is a developer platform for next-generation IoT solutions that lets you create, run, and manage digital representations of your business environment, securely and efficiently in the cloud.',
        length: '3-63',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/digital-twins/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/digital_twins_instance',
        restrictions: 'Alphanumerics and hyphens are allowed. Value must start and end with an alphanumeric.',
        resource: 'Microsoft.DigitalTwins',
        entity: 'digitalTwinsInstances',
        scope: 'resource group',
        icon: '/icons/IoT/IoT Digital Twin.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DigitalTwins%2FdigitalTwinsInstances',
      },
      {
        name: 'batch account',
        slug: 'ba-',
        description: 'Azure Batch is a cloud-based job scheduling service that parallelizes and distributes the processing of large volumes of data across many computers. Ideal for high-performance computing (HPC) applications, it\'s designed to provide scalable and efficient computation with no server management.',
        length: '3-24',
        category: Categories.ANALYTICSANDIOT,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/batch/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/batch_account',
        restrictions: 'Lowercase letters and numbers.',
        resource: 'Microsoft.Batch',
        entity: 'batchAccounts',
        scope: 'region',
        icon: '/icons/Data/Azure Batch Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Batch%2FbatchAccounts'
      },
    ],
  },
  {
    items: [
      {
        name: 'virtual desktop host pool',
        slug: 'vdpool-',
        description:
          'Azure Virtual Desktop Host Pool is a collection of VMs in Azure Virtual Desktop environment. It hosts remote apps and desktops that users can access from anywhere.',
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/virtual-desktop/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_host_pool',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'hostPools',
        scope: 'resource group',
        icon: '/icons/Compute/AVD Host Pool.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DesktopVirtualization%2FHostPools',
      },
      {
        name: 'virtual desktop app group',
        slug: 'vdag-',
        description:
          'Azure Virtual Desktop Application Group is a logical grouping of applications installed on a host pool\'s session hosts. Users are granted access to an application group to use the apps.',
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/virtual-desktop/manage-app-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_application_group',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'applicationGroups',
        scope: 'resource group',
        icon: '/icons/Application/Application Group.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DesktopVirtualization%2FApplicationGroups',
      },
      {
        name: 'virtual desktop workspace',
        slug: 'vdws-',
        description:
          'Azure Virtual Desktop Workspace is a logical grouping of application groups in a host pool. Users are presented with resources from all the application groups in a workspace.',
        length: '1-64',
        category: Categories.VIRTUALDESKTOP,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/virtual-desktop/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_desktop_workspace',
        restrictions: 'Alphanumerics, hyphens, and underscores.',
        resource: 'Microsoft.DesktopVirtualization',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/Compute/AVD Workspace.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_WVD/WvdManagerMenuBlade/~/overview',
      },
      {
        name: 'app configuration store',
        slug: 'appcs-',
        description:
          'Azure App Configuration provides a service to centrally manage application settings and feature flags. Modern programs, especially programs running in a cloud, generally have many components that are distributed in nature.',
        length: '5-50',
        category: Categories.DEVTOOLS,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-app-configuration/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/app_configuration',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.AppConfiguration',
        entity: 'configurationStores',
        scope: 'resource group',
        icon: '/icons/Application/App Configuration.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.AppConfiguration%2FconfigurationStores',
      },
      {
        name: 'signalr',
        slug: 'sigr-',
        description:
          'Azure SignalR Service is an Azure managed service that adds real-time functionality to applications. SignalR Service is fully-managed, freeing you to focus on your application instead of hosting and scaling a SignalR server.',
        length: '3-63',
        category: Categories.DEVTOOLS,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/azure-signalr/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/signalr_service',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or number.',
        resource: 'Microsoft.SignalRService',
        entity: 'signalR',
        scope: 'global',
        icon: '/icons/Application/SignalR.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.SignalRService%2FSignalR',
      },
      {
        name: 'maps account',
        slug: 'map-',
        description: 'Azure Maps Account provides access to Azure Maps services and geospatial capabilities. It includes a range of APIs providing mapping, search, routing, traffic, time zones, geolocation, geofencing, and other geospatial capabilities, enabling the development of location-aware applications and IoT solutions.',
        length: '1-98',
        category: Categories.DEVTOOLS,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/azure-maps/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/maps_account',
        restrictions: 'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric.',
        resource: 'Microsoft.Maps',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/Application/Azure Maps Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Maps%2Faccounts',
      }
    ],
  },
  {
    items: [
      {
        name: 'api management',
        slug: 'apim-',
        description:
          'Azure API Management is a full-featured service that enables customers to create, secure, publish, and analyze APIs in minutes. It helps organizations publish APIs to external, partner, and internal developers to unlock the potential of their data and services.',
        length: '1-50',
        category: Categories.INTEGRATION,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/api-management/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/api_management',
        restrictions:
          'Alphanumerics and hyphens. Start with letter and end with alphanumeric.',
        resource: 'Microsoft.ApiManagement',
        entity: 'service',
        scope: 'global',
        icon: '/icons/Management/API Management Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ApiManagement%2Fservice',
      },
      {
        name: 'integration account',
        slug: 'ia-',
        description:
          'Azure Integration Account is a component of Logic Apps service, providing a secure and scalable way to store and manage resources such as schemas, maps, partners, and agreements for enterprise integrations.',
        length: '1-80',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/logic_app_integration_account',
        restrictions:
          'Alphanumerics, hyphens, underscores, periods, and parenthesis.',
        resource: 'Microsoft.Logic',
        entity: 'integrationAccounts',
        scope: 'resource group',
        icon: '/icons/Deployment/Integration Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Logic%2FintegrationAccounts',
      },
      {
        name: 'logic apps',
        slug: 'logic-',
        description:
          'Azure Logic Apps is a cloud-based service that enables users to schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services across enterprises or organizations.',
        length: '1-43',
        category: Categories.INTEGRATION,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/logic-apps/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/logic_app_workflow',
        restrictions:
          'Alphanumerics, hyphens, underscores, periods, and parenthesis.',
        resource: 'Microsoft.Logic',
        entity: 'workflows',
        scope: 'resource group',
        icon: '/icons/Application/Logic App.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Logic%2Fworkflows',
      },
      {
        name: 'service bus namespace',
        slug: 'sbns-',
        description:
          'Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. It provides a reliable and secure platform for asynchronous transfer of data and state.',
        length: '6-50',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/service-bus-messaging/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_namespace',
        restrictions:
          'Alphanumerics and hyphens. Start with a letter. End with a letter or number. For more information, see Create namespace.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces',
        scope: 'global',
        icon: '/icons/Data/Service Bus.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceBus%2Fnamespaces',
      },
      {
        name: 'service bus queue',
        slug: 'sbq-',
        description:
          'Service Bus Queue supports a set of cloud-based, message-oriented middleware technologies including reliable message queuing and durable publish/subscribe messaging.',
        length: '1-260',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_queue',
        restrictions:
          'Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces/queues',
        scope: 'namespace',
        icon: '/icons/Data/Service Bus Queue.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceBus%2Fnamespaces',
      },
      {
        name: 'service bus topic',
        slug: 'sbt-',
        description:
          'Service Bus Topic supports a publish/subscribe messaging communication model. It provides much more complex messaging solutions by allowing multiple, concurrent subscribers to independently retrieve published messages.',
        length: '1-260',
        category: Categories.INTEGRATION,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_topic',
        restrictions:
          'Alphanumerics, periods, hyphens, underscores, and slashes. Start and end with alphanumeric.',
        resource: 'Microsoft.ServiceBus',
        entity: 'namespaces/topics',
        scope: 'namespace',
        icon: '/icons/Data/Service Bus Topic.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceBus%2Fnamespaces',
      },
      {
        name: 'database migration service',
        slug: 'dms-',
        description:
          'Azure Database Migration Service (DMS) is designed as a seamless, end-to-end solution for moving on-premises SQL Server databases to the cloud.',
        length: '2-62',
        category: Categories.MIGRATION,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/dms/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/database_migration_service',
        restrictions:
          'Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.',
        resource: 'Microsoft.DataMigration',
        entity: 'services',
        scope: 'resource group',
        icon: '/icons/Management/Database Migration Service.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataMigration%2Fservices',
      },
      {
        name: 'database migration project',
        slug: 'migr-',
        description:
          'Azure Migration Projects provides a centralized hub to discover, assess, and migrate to Azure on-premises servers, infrastructure, applications, and data. It provides tools to help you plan, track, and conduct migrations.',
        length: '2-57',
        category: Categories.MIGRATION,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/migrate/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/database_migration_projectt',
        restrictions:
          'Alphanumerics, hyphens, periods, and underscores. Start with alphanumeric.',
        resource: 'Microsoft.DataMigration',
        entity: 'services/projects',
        scope: 'service',
        icon: '/icons/Management/Database Migration Project.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataMigration%2Fservices%2Fprojects',
      },
      {
        name: 'recovery services vault',
        slug: 'rsv-',
        description:
          'Azure Recovery Services vault is a unified platform to manage backup and site recovery, providing efficient replication, failover and recovery of on-premises or Azure virtual machines and physical servers.',
        length: '2-50',
        category: Categories.MIGRATION,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/backup/backup-azure-recovery-services-vault-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/recovery_services_vault',
        restrictions: 'Alphanumerics and hyphens. Start with letter.',
        resource: 'Microsoft.RecoveryServices',
        entity: 'vaults',
        scope: 'resource group',
        icon: '/icons/Management/Recovery Services Vault.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.RecoveryServices%2Fvaults',
      },
    ],
  },
  {
    items: [
      {
        name: 'automation account',
        slug: 'aa-',
        description:
          'Azure Automation Account provides a way to automate the manual, long-running, error-prone, and frequently repeated tasks that are commonly performed in a cloud and enterprise environment. It saves time and increases the reliability of regular administrative tasks.',
        length: '6-50',
        category: Categories.MANAGEMENT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/automation/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/automation_account',
        restrictions:
          'Alphanumerics and hyphens. Start with letter and end with alphanumeric.',
        resource: 'Microsoft.Automation',
        entity: 'automationAccounts',
        scope: 'resource group and region',
        icon: '/icons/Management/Automation Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Automation%2FAutomationAccounts',
      },
      {
        name: 'app insights',
        slug: 'appi-',
        description:
          'Azure Application Insights is a feature of Azure Monitor and provides application performance management (APM) services for developers and IT professionals. It helps to detect issues, solve problems, and continuously improve web applications.',
        length: '1-260',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_insights',
        restrictions:
          'Can not use:%&?/ or control characters Can not end with space or period.',
        resource: 'Microsoft.Insights',
        entity: 'components',
        scope: 'resource group',
        icon: '/icons/Management/Application Insights.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.insights%2Fcomponents',
      },
      {
        name: 'monitor action group',
        slug: 'ag-',
        description:
          'Azure Monitor Action Groups provide a collection of notification preferences defined by the user. Azure Monitor and Service Health alerts use action groups to notify users that an alert has been triggered.',
        length: '1-260',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_action_group',
        restrictions:
          'Can not use::<>+/&%? or control characters Can not end with space or period.',
        resource: 'Microsoft.Insights',
        entity: 'actionGroups',
        scope: 'resource group',
        icon: '/icons/Management/Azure Monitor.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Monitoring_Alerts/ActionGroupsBlade/resourceGroupNames~/%5B%5D',
      },
      {
        name: 'purview instances',
        slug: 'pview-',
        description:
          'Azure Purview is a unified data governance service that helps organizations achieve a complete understanding of their data. Purview helps you catalog, understand, and manage data across your enterprise.',
        length: '6-50',
        category: Categories.MANAGEMENT,
        learnUrl: 'https://learn.microsoft.com/en-us/purview/',
        terraformUrl: '',
        restrictions: '',
        resource: 'Microsoft.Purview',
        entity: 'accounts',
        scope: 'resource group',
        icon: '/icons/Data/Purview Account.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Purview%2FAccounts',
      },
      {
        name: 'blueprint',
        slug: 'bp-',
        description:
          'Azure Blueprints enables cloud architects and central information technology groups to define a repeatable set of Azure resources that implements and adheres to an organization\'s standards, patterns, and requirements.',
        length: '90',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/governance/blueprints/',
        terraformUrl: '',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Blueprint',
        entity: 'blueprint',
        scope: 'Management groups, Subscriptions, Resource groups',
        icon: '/icons/Deployment/Blueprint.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Policy/BlueprintsMenuBlade/~/GetStarted',
      },
      {
        name: 'blueprint assignment',
        slug: 'bpa-',
        description:
          'Blueprint Assignment in Azure is the process of assigning a blueprint to a subscription, allowing the blueprint to create, update, or delete resources to align with the blueprint definition.',
        length: '90',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/governance/blueprints/',
        terraformUrl: '',
        restrictions: 'Alphanumerics, underscores, and hyphens.',
        resource: 'Microsoft.Blueprint',
        entity: 'blueprintAssignments',
        scope: 'Management groups, Subscriptions, Resource groups',
        icon: '/icons/Deployment/Blueprint.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/Microsoft_Azure_Policy/BlueprintsMenuBlade/~/GetStarted',
      },
      {
        name: 'key vault',
        slug: 'kv-',
        description:
          'Azure Key Vault is a tool for securely storing and accessing secrets. A secret could be a credit card number, bank account details, or a connection string for a database.',
        length: '3-24',
        category: Categories.MANAGEMENT,
        learnUrl: 'https://learn.microsoft.com/en-us/azure/key-vault/general/',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault',
        restrictions:
          'Alphanumerics and hyphens. Start with letter. End with letter or digit. Can not contain consecutive hyphens.',
        resource: 'Microsoft.KeyVault',
        entity: 'vaults',
        scope: 'global',
        icon: '/icons/Security/Key Vault.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.KeyVault%2Fvaults',
      },
      {
        name: 'log analytics workspace',
        slug: 'log-',
        description:
          'Azure Log Analytics Workspace is a unique environment for Azure Monitor log data. Each workspace has its own data repository and configuration, and data sources and solutions are configured to store their data in a workspace.',
        length: '4-63',
        category: Categories.MANAGEMENT,
        learnUrl:
          'https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-workspace-overview',
        terraformUrl:
          'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/log_analytics_workspace',
        restrictions:
          'Alphanumerics and hyphens. Start and end with alphanumeric.',
        resource: 'Microsoft.OperationalInsights',
        entity: 'workspaces',
        scope: 'resource group',
        icon: '/icons/Management/Log Analytics Workspace.png',
        code: '',
        viewAllURL: 'https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.OperationalInsights%2Fworkspaces',
      },
    ],
  },
];
