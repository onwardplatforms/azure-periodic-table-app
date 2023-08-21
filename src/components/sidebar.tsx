'use client';
import Image from 'next/image';
import CodeSnippet from './code-snippet';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useEffect, useState } from 'react';
import type { Item } from '@/app/data';
import { categoryData } from './periodic-table';
import { prefix } from '@/prefix';
import useMobile from '@/custom-hooks/use-mobile';
import { Label } from './ui/label';
import { CopyBox } from './ui/copy-box';
import { Icons } from './ui/icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Sidebar({
  activeElement,
}: {
  setOpen?: Function;
  open: boolean;
  activeElement: Item | null;
}) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(true);
  const isMobile = useMobile();
  const hasPrivateEndpointData = (element: Item) => {
    if (!element?.dnsConfiguration) return false;

    const { commercial, government, china } = element.dnsConfiguration;

    return (
      (commercial?.subresourceNames?.length &&
        commercial?.subresourceNames?.length > 0) ||
      (government?.subresourceNames?.length &&
        government?.subresourceNames?.length > 0) ||
      (china?.subresourceNames?.length && china?.subresourceNames?.length > 0)
    );
  };

  // after 2 seconds have copied be false if active
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const path = usePathname();

  const navigate = useRouter();

  const isActive = activeElement
    ? path.includes(activeElement?.id)
      ? true
      : false
    : false;

  if (!activeElement) return null;

  return (
    <>
      <Sheet
        open={open}
        onOpenChange={() => {
          setOpen(false);
          // This is to show the animation
          setTimeout(() => {
            navigate.replace('/');
          }, 300);
        }}
      >
        <SheetContent className="sm:max-w-[720px] overflow-y-scroll">
          <SheetHeader>
            <div className="flex justify-start items-center">
              <Image
                width={44}
                height={44}
                alt={`icon for ${activeElement.name}`}
                src={`${prefix}${activeElement.icon}`}
              />
            </div>
          </SheetHeader>

          <SheetTitle className="mb-4">
            <div className="flex flex-col justify-center items-start mt-6 mb-2">
              <div className="flex">
                <h1 className="font-bold text-xl">{activeElement.name}</h1>
              </div>
              <div className="font-light">
                <CopyBox
                  text={`${activeElement?.resource}/${activeElement?.entity}`}
                />
              </div>
            </div>
          </SheetTitle>
          <div className="mb-4">
            <p className="text-left break-words w-full mb-4">
              {activeElement?.description}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start my-6">
            <div className="flex justify-center items-center">
              <span className="mr-6">
                {activeElement?.learnUrl && (
                  <a
                    target="_blank"
                    href={activeElement?.learnUrl}
                    className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all"
                  >
                    <div className="mr-2">
                      <Icons.Microsoft width={16} height={16} />
                    </div>
                    <span>{isMobile ? 'Learn' : 'Microsoft Learn'}</span>
                  </a>
                )}
              </span>
              <div
                className={`lg:mx-0 w-6 h-6 rounded my-1 ${categoryData.find(
                  (item) => item.name === activeElement.category
                )?.color
                  }`}
              />
              <span className="ml-2">{activeElement.category}</span>
            </div>
          </div>
          <div className="my-6 text-left">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>Naming</CardTitle>
                <CardDescription>
                  The conventions, rules, and restrictions for naming this service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="mb-4">
                    <Label>Naming Convention</Label>
                    <CopyBox text={activeElement.slug} />
                  </div>
                  <div className="mb-4">
                    <Label>Length</Label>
                    <div>
                      <span>{activeElement?.length}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label>Valid Characters</Label>
                    <div>
                      <span>{activeElement?.restrictions}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label>Scope</Label>
                    <div>
                      <span>{activeElement?.scope}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="my-6 text-left">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>Code</CardTitle>
                <CardDescription>
                  Deploy your infrastructure as code using your  preferred tooling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="terraform">
                  <TabsList>
                    <TabsTrigger value="terraform">Terraform</TabsTrigger>
                    <TabsTrigger value="bicep">Bicep</TabsTrigger>
                    <TabsTrigger value="arm">ARM Template</TabsTrigger>
                  </TabsList>
                  <TabsContent className="mt-4" value="terraform">
                    <div className="flex justify-start items-center flex-wrap">
                      {activeElement?.terraformUrl && (
                        <a
                          target="_blank"
                          href={activeElement?.terraformUrl}
                          className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                        >
                          <div className="mr-2">
                            <Icons.Terraform width={16} height={16} />
                          </div>
                          <span>Official Documentation</span>
                        </a>
                      )}
                    </div>
                    <div>
                      <CodeSnippet codeString={activeElement.terraformCode} language="hcl" />
                    </div>
                  </TabsContent>
                  <TabsContent className="mt-4" value="bicep">
                    <div className="flex justify-start items-center flex-wrap">
                      {activeElement?.resource && activeElement?.entity && (
                        <>
                          <a
                            target="_blank"
                            href={`https://learn.microsoft.com/en-us/azure/templates/${activeElement?.resource}/${activeElement?.entity}?pivots=deployment-language-bicep`}
                            className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                          >
                            <div className="mr-2">
                              <Icons.Microsoft width={16} height={16} />
                            </div>
                            <span>Official Documentation</span>
                          </a>
                        </>
                      )}
                    </div>
                    <div>
                      <CodeSnippet codeString={activeElement.bicepCode} language="bicep" />
                    </div>
                  </TabsContent>
                  <TabsContent className="mt-4" value="arm">
                    <div className="flex justify-start items-center flex-wrap">
                      {activeElement?.resource && activeElement?.entity && (
                        <>
                          <a
                            target="_blank"
                            href={`https://learn.microsoft.com/en-us/azure/templates/${activeElement?.resource}/${activeElement?.entity}?pivots=deployment-language-arm-template`}
                            className="flex justify-start items-center text-sm flex break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                          >
                            <div className="mr-2">
                              <Icons.Microsoft width={16} height={16} />
                            </div>
                            <span>Official Documentation</span>
                          </a>
                        </>
                      )}
                    </div>
                    <div>
                      <CodeSnippet codeString={activeElement.armCode} language="json" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          <div className="my-6 text-left">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>Utilities</CardTitle>
                <CardDescription>
                  Utilities to support with app deployment or configuration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-start items-center flex-wrap">
                  {activeElement?.portalUrl && (
                    <a
                      target="_blank"
                      href={activeElement?.portalUrl}
                      className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                    >
                      <div className="mr-2">
                        <Icons.Azure width={16} height={16} />
                      </div>
                      <span>{isMobile ? 'Portal' : 'Azure Portal'}</span>
                    </a>
                  )}
                  <a
                    target="_blank"
                    href='https://shell.azure.com'
                    className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                  >
                    <div className="mr-2">
                      <Icons.Azure width={16} height={16} />
                    </div>
                    <span>{isMobile ? 'Shell' : 'Cloud Shell'}</span>
                  </a>
                  <a
                    target="_blank"
                    href='https://azure.microsoft.com/en-us/pricing/calculator/'
                    className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
                  >
                    <div className="mr-2">
                      <Icons.Microsoft width={16} height={16} />
                    </div>
                    <span>{isMobile ? 'Pricing' : 'Pricing Calculator'}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="my-6 text-left">
            {hasPrivateEndpointData(activeElement) && (
              <div className="my-6 text-left">
                <Card className="w-[100%]">
                  <CardHeader>
                    <CardTitle>Private Endpoints</CardTitle>
                    <CardDescription>
                      Details to successfully deploy private endpoints on Azure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="commercial">
                      <TabsList>
                        {(activeElement?.dnsConfiguration?.commercial
                          ?.subresourceNames?.length ?? 0) > 0 && (
                            <TabsTrigger value="commercial">Commercial</TabsTrigger>
                          )}
                        {(activeElement?.dnsConfiguration?.government
                          ?.subresourceNames?.length ?? 0) > 0 && (
                            <TabsTrigger value="government">Government</TabsTrigger>
                          )}
                        {(activeElement?.dnsConfiguration?.china?.subresourceNames
                          ?.length ?? 0) > 0 && (
                            <TabsTrigger value="china">China</TabsTrigger>
                          )}
                      </TabsList>

                      {(activeElement?.dnsConfiguration?.commercial
                        ?.subresourceNames?.length ?? 0) > 0 && (
                          <TabsContent value="commercial">
                            <div className="mt-6">
                              <Label>Sub-Resource Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.commercial?.subresourceNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Private DNS Zone Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.commercial?.privateDnsZoneNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Public DNS Zone Forwarders</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.commercial?.publicDnsForwarderNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                          </TabsContent>
                        )}
                      {(activeElement?.dnsConfiguration?.government
                        ?.subresourceNames?.length ?? 0) > 0 && (
                          <TabsContent value="government">
                            <div className="mt-6">
                              <Label>Sub-Resource Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.government?.subresourceNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Private DNS Zone Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.government?.privateDnsZoneNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Public DNS Zone Forwarders</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.government?.publicDnsForwarderNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                          </TabsContent>
                        )}
                      {(activeElement?.dnsConfiguration?.china?.subresourceNames
                        ?.length ?? 0) > 0 && (
                          <TabsContent value="china">
                            <div className="mt-6">
                              <Label>Sub-Resource Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.china?.subresourceNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Private DNS Zone Names</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.china?.privateDnsZoneNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label>Public DNS Zone Forwarders</Label>
                              <div>
                                <span className="flex flex-wrap">
                                  {activeElement?.dnsConfiguration?.china?.publicDnsForwarderNames?.map(
                                    (name, index) => (
                                      <CopyBox key={index} text={name} />
                                    )
                                  )}
                                </span>
                              </div>
                            </div>
                          </TabsContent>
                        )}
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet >
    </>
  );
}