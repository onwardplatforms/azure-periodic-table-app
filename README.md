# Azure Periodic Table

The Azure Periodic Table is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This application serves as an interactive and intuitive way to explore Azure resources. It offers details about each service, their naming restrictions and conventions, and provides useful code snippets in Terraform. Whether you are new to Azure or an experienced user, this project aims to be a helpful reference for managing and provisioning Azure resources.

## Pre-requisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher) or Yarn (v1.22.0 or higher)

If you don't have Yarn installed, you can install it by following the instructions on the official [Yarn website](https://classic.yarnpkg.com/en/docs/install), or install it via npm:

```bash
npm install -g yarn
```

## Installation

Before starting the server, install the necessary dependencies. Navigate to the project directory and run:

```bash
yarn
```

## Getting Started

After installing the dependencies, you can start the development server:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses [next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.
  You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Deploy with Docker

This guide will walk you through the steps to deploy this application using Docker.

### Prerequisites

Before you start, ensure you have the following installed:

- [Docker](https://docs.docker.com/engine/install/) - Download and install Docker for your operating system.

### Getting Started

1. Clone the docker image:

```bash
docker pull onwardplatforms/azure-periodic-table-dockerversion
```
2. Once you pulled the image, use the below command to check the docker images

```bash
docker images
```
3. Once the image shows up, it's time to run the image on your docker engine.

```bash
docker run -d -p 3000:3000 <docker-imageid>
```
4. Please use the below command to verify the DockerImage is running sucessfully.

```bash
docker ps -a
```
