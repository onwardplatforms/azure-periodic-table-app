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
        consoleUrl: '',
      },
      {
        id: 'aws-cloud-map',
        name: 'aws-cloud-map',
        slug: 'acm-',
        description: 'AWS Cloud Map lets you configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance of the service becomes available, you can call the AWS Cloud Map API to register the instance with AWS Cloud Map. For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/cloud-map/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudmap_service',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
        consoleUrl: '',
      },
      {
        id: 'aws-cloudfront',
        name: 'aws-cloudfront',
        slug: 'acf-',
        description: 'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/cloudfront/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
        consoleUrl: '',
      },
      {
        id: 'aws-direct-connect',
        name: 'aws-direct-connect',
        slug: 'adc-',
        description: 'AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or colocation environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based connections.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/directconnect/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dx_connection',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-global-accelerator',
        name: 'aws-global-accelerator',
        slug: 'aga-',
        description: 'AWS Global Accelerator is a networking service that sends your user’s traffic through Amazon Web Service’s global network infrastructure, improving your internet user performance by up to 60%. It provides static IP addresses that act as a fixed entry point to your applications hosted in AWS Regions, and routes end users to the optimal application endpoint. This improves the availability and performance of your applications.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/global-accelerator/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/globalaccelerator_accelerator',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
        consoleUrl: '',
      },
      {
        id: 'aws-route53',
        name: 'aws-route53',
        slug: 'ar53-',
        description: 'Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/route53/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-vpc',
        name: 'aws-vpc',
        slug: 'avpc-',
        description: 'Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you’ve defined. This virtual network closely resembles a traditional network that you’d operate in your own data center, with the benefits of using the scalable infrastructure of AWS.',
        length: '1-90',
        category: Categories.NETWORKING,
        learnUrl: 'https://aws.amazon.com/vpc/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        resource: '',
        entity: 'managementGroups',
        scope: '',
        icon: '/aws/icons',
        terraformCode: ``,
      },
    ],
  },
  {
    items: [
      {
        id: 'aws-app-runner',
        name: 'aws-app-runner',
        slug: 'aar-',
        description: 'AWS App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs, at scale and with no prior infrastructure experience required. Simply point to your source code repository—App Runner will analyze your code, build and deploy your application, and run it with automatic scaling and high availability.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/apprunner/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apprunner_service',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-batch',
        name: 'aws-batch',
        slug: 'ab-',
        description: 'AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources (e.g., CPU or memory optimized instances) based on the volume and specific resource requirements of the batch jobs submitted. With AWS Batch, there is no need to install and manage batch computing software or server clusters that you use to run your jobs, allowing you to focus on analyzing results and solving problems. AWS Batch plans, schedules, and executes your batch computing workloads across the full range of AWS compute services and features, such as Amazon EC2 and Spot Instances.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/batch/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/batch_compute_environment',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``, 
      },
      {
        id: 'aws-ec2',
        name: 'aws-ec2',
        slug: 'aec2-',
        description: 'Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/ec2/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_instance',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-ec2-image-builder',
        name: 'aws-ec2-image-builder',
        slug: 'aeb-',
        description: 'AWS EC2 Image Builder is a fully managed AWS service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date “golden” server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/image-builder/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/imagebuilder_image_recipe',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'elastic-beanstalk',
        name: 'elastic-beanstalk',
        slug: 'aeb-',
        description: 'AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/elasticbeanstalk/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elastic_beanstalk_application_version',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'lambda',
        name: 'lambda',
        slug: 'alam-',
        description: 'AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/lambda/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-lightsail',
        name: 'aws-lightsail',
        slug: 'als-',
        description: 'Amazon Lightsail is the easiest way to get started with AWS for developers who just need virtual private servers. Lightsail includes everything you need to launch your project quickly – a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP – for a low, predictable price. You manage those Lightsail servers through the Lightsail console or by using the API or command-line interface (CLI).',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/lightsail/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lightsail_instance',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-outposts',
        name: 'aws-outposts',
        slug: 'ao-',
        description: 'AWS Outposts is a fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to virtually any datacenter, co-location space, or on-premises facility for a truly consistent hybrid experience.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/outposts/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/outposts_outpost_instance_type_association',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-serverless-application-repository',
        name: 'aws-serverless-application-repository',
        slug: 'asar-',
        description: 'The AWS Serverless Application Repository is a managed repository for serverless applications. It enables teams, organizations, and individual developers to store and share reusable applications, and easily assemble and deploy serverless architectures in powerful new ways.',
        length: '1-90',
        category: Categories.COMPUTEANDWEB,
        learnUrl: 'https://aws.amazon.com/serverless/serverlessrepo/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/serverlessapplicationrepository_application_version',
        restrictions: 'Alphanumerics, hyphens, and parentheses. Cannot begin or end with a hyphen. Cannot contain consecutive hyphens.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
    ],
  },
  {
    items: [
      {
        id: 'aws-ecr',
        name: 'aws-ecr',
        slug: 'ecr-',
        description: 'Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. Amazon ECR is integrated with Amazon Elastic Container Service (ECS), simplifying your development to production workflow.',
        length: '1-90',
        category: Categories.CONTAINERS,
        learnUrl: 'https://aws.amazon.com/ecr/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecr_repository',
        restrictions: 'Alphanumerics, hyphens, and underscores. Must be unique within your AWS account. 2-256 characters.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-ecs',
        name: 'aws-ecs',
        slug: 'ecs-',
        description: 'Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service. Customers such as Duolingo, Samsung, GE, and Cookpad use ECS to run their most sensitive and mission critical applications because of its security, reliability, and scalability.',
        length: '1-90',
        category: Categories.CONTAINERS,
        learnUrl: 'https://aws.amazon.com/ecs/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition',
        restrictions: 'Alphanumerics, hyphens, and underscores. Must be unique within your AWS account. 2-256 characters.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
      {
        id: 'aws-eks',
        name: 'aws-eks',
        slug: 'eks-',
        description: 'Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed Kubernetes service. Customers such as Intel, Snap, Intuit, GoDaddy, and Autodesk trust EKS to run their most sensitive and mission critical applications because of its security, reliability, and scalability.',
        length: '1-90',
        category: Categories.CONTAINERS,
        learnUrl: 'https://aws.amazon.com/eks/',
        terraformUrl: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_cluster',
        restrictions: 'Alphanumerics, hyphens, and underscores. Must be unique within your AWS account. 2-256 characters.',
        icon: '/aws/icons',
        terraformCode: ``,
      },
    ],
  },
];
