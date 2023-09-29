/* src/app/aws.ts */

import { Categories } from '../constants';

export type Item = {
  id: string;
  name: string;
  slug: string;
  description: string;
  length: string;
  category: Categories;
  learnUrl: string;
  terraformUrl: string;
  restrictions: string;
  icon: string;
  terraformCode: string;
  resource?: string;
  entity?: string;
  scope?: string;
  bicepCode?: string;
  armCode?: string;
  pricingReferenceUrl?: string;
  portalUrl?: string;
  dnsConfiguration?: {
    commercial?: {
      subresourceNames: string[];
      privateDnsZoneNames: string[];
      publicDnsForwarderNames: string[];
    };
    government?: {
      subresourceNames: string[];
      privateDnsZoneNames: string[];
      publicDnsForwarderNames: string[];
    };
    china?: {
      subresourceNames: string[];
      privateDnsZoneNames: string[];
      publicDnsForwarderNames: string[];
    };
  };
};

export type ColumnType = {
  items: Item[];
};

export const columns: ColumnType[] = [
  {
    items: [
      {
        id: 'management-group',
        name: 'management group',
        slug: 'mg-',
        description: 'Azure Management Groups provide a level of scope above subscriptions. They allow you to organize subscriptions into containers called \'management groups\' and apply your governance conditions to the management groups. All subscriptions within a management group automatically inherit the conditions applied to the management group.',
        length: '1-90',
        category: Categories.GENERAL,
        learnUrl: 'https://docs.microsoft.com/en-us/azure/governance/management-groups/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/management_group',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: 'Microsoft.Management',
        entity: 'managementGroups',
        scope: 'tenant',
        icon: '/azure/icons/Management/Management Group.png',
        terraformCode: ``,
        bicepCode: ``,
        armCode: ``,
        pricingReferenceUrl: '',
        portalUrl: 'https://portal.azure.com/#view/Microsoft_Azure_ManagementGroups/ManagementGroupBrowseBlade/~/MGBrowse_overview',
      },
    ],
  },
];
