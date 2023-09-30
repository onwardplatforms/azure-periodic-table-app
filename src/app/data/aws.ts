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
  consoleUrl?: string;
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
        id: 'api-gateway',
        name: 'api-gateway',
        slug: 'agw-',
        description: 'Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/api-gateway/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_resource',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: 'Microsoft.Management',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
        bicepCode: ``,
        armCode: ``,
        pricingReferenceUrl: '',
        consoleUrl: '',
      },
      {
        id: 'aws-app-mesh',
        name: 'aws-app-mesh',
        slug: 'aam-',
        description: 'Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/app-mesh/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appmesh_mesh',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: 'Microsoft.Management',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
        bicepCode: ``,
        armCode: ``,
        pricingReferenceUrl: '',
        consoleUrl: '',
      },
    ],
  },
];
