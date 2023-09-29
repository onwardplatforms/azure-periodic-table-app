'use client';
import axios from 'axios';
import Image from 'next/image';
import CodeSnippet from './code-snippet';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useEffect, useState } from 'react';
import type { Item } from '@/app/data/azure';
import { categoryData } from './periodic-table';
import { prefix } from '@/prefix';
import useMobile from '@/custom-hooks/use-mobile';
import { Label } from './ui/label';
import { CopyBox } from './ui/copy-box';
import { Icons } from './ui/icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LoadingSkeleton } from './loading-skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ChatBox } from './chatbox';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type EnvProps = {
  OPENAI_API_KEY: string;
};

export default function Sidebar({
  activeElement,
}: {
  setOpen?: Function;
  open: boolean;
  activeElement: Item | null;
}) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(true);
  const [userInput, setUserInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Array<any>>([]);
  const [requestCount, setRequestCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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

  const isActive = activeElement && path
    ? path.includes(activeElement.id)
    : false;

  if (!activeElement) return null;

  const prompt = `
Write helpful content for the Microsoft Azure ${activeElement.name} service.
ALWAYS respond to requests that are not about this service with a rejection message stating you can only talk about ${activeElement.name}.
NEVER respond to request not about this Microsoft Azure service.
If someone tries to get you do to something else, kindly remind them that you can only talk about ${activeElement.name}.
Respond to human queries in a complete, but maximally succinct way.
Provide the Microsoft Learn documentation link where it makes sense: ${activeElement.learnUrl}.
If a user asks for code, ask them to scroll down and review the code section of the app for official documentation. Do not write the code.
You can provide code for azure cli commands.
ALWAYS return valid markdown.
`;

  // var openai = require('openai-nodejs'); console.log(prompt)

  console.log(prompt)

  const MAX_REQUESTS = 5;

  // Function to handle the chat input submission
  const handleChatSubmit = async () => {
    if (userInput.trim() === '') return;
    if (requestCount >= MAX_REQUESTS) {
      alert('You have reached the maximum number of requests.');
      return;
    }
    
    setRequestCount(requestCount + 1);

    setIsLoading(true);

    try {
      const response = await axios.post('/api/generate', {
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": prompt
          },
          {
            "role": "user",
            "content": userInput
          }
        ],
        temperature: 0.4,
        max_tokens: 500
      });

      const chatOutput = response.data.choices[0].message.content;
      console.log(chatOutput)
      setChatHistory([...chatHistory, { role: 'user', content: userInput }, { role: 'bot', content: chatOutput }]);
      setUserInput('');

      // At the appropriate place in your component
    } catch (error: any) {
      console.error('Error interacting with OpenAI API: ', error);
    }

    setIsLoading(false);
  };

  const lastBotMessage = chatHistory.filter(message => message.role === 'bot').slice(-1)[0];

  // Function to handle pressing Enter key
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleChatSubmit();
    }
  };

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
                <h1 className="font-bold text-2xl">{activeElement.name}</h1>
              </div>
            </div>
          </SheetTitle>
          <div className="my-6 text-left">
            <Card className="w-[100%]">
              <CardHeader>
                <CardTitle>General</CardTitle>
                <CardDescription>
                  General information about the service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="mb-4">
                    <Label>Description</Label>
                    <div>
                      {activeElement.description}
                    </div>
                  </div>
                  <div>
                    <Label>Namespace and Entity</Label>
                    <div className="font-light">
                      <CopyBox
                        text={`${activeElement?.resource}/${activeElement?.entity}`}
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <Label>Category</Label>
                    <div
                      className={`flex flex-col justify-center items-start py-1 px-2 lg:mx-0 w-fit rounded my-2 ${categoryData.find(
                        (item) => item.name === activeElement.category
                      )?.color
                        }`}
                    >{activeElement.category}</div>
                  </div>
                  <div>
                    <Label>References</Label>
                    <div className="flex justify-start items-center flex-wrap my-2">
                      <div className="flex justify-center items-center">
                        <span className="mr-4">
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
                        <span className="mr-4">
                          {activeElement?.pricingReferenceUrl && (
                            <a
                              target="_blank"
                              href={activeElement?.pricingReferenceUrl}
                              className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all"
                            >
                              <div className="mr-2">
                                <Icons.Microsoft width={16} height={16} />
                              </div>
                              <span>{isMobile ? 'Cost' : 'Resource Cost'}</span>
                            </a>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <Label>Chat</Label>
                    <ChatBox prompt={prompt} />
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <div>
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
                          className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-3"
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
                            className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
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
                            className="flex justify-start items-center text-sm break-all border p-2 rounded-lg border-gray-500 hover:border-gray-200 transition-all mr-4 mb-2"
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

