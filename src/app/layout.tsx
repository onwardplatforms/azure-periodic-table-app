/* src/app/layout.tsx */

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';
import TableWrapper from '@/components/table-wrapper';

declare global {
  interface Window {
    // @ts-ignore
    gtag: any;
  }
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Azure Periodic Table',
  description:
    'An essential resource for cloud developers, engineers, architects, and consultants seeking to understand Azure services. It provides links to Microsoft Learn documentation, examples of infrastructure as code using Terraform, Bicep, and ARM templates, as well as direct links to the Azure Portal for managing and deploying new resources.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ width: '100%' }}>
      <Head>
        <title>Azure Periodic Table</title>
        <meta property="og:title" content="Azure Periodic Table" key="title" />
        <meta
          property="og:image"
          content="https://azure-periodic-table.onwardplatforms.com/periodic-table.png"
        />
        <meta property="og:image:alt" content="The Azure Periodic Table" />
        <meta
          property="twitter:image"
          content="https://azure-periodic-table.onwardplatforms.com/periodic-table.png"
        />
        <meta property="twitter:image:alt" content="The Azure Periodic Table" />
      </Head>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GA_TRACKING_ID});
        `}
      </Script>
      <body className={inter.className} style={{ width: '100%' }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TableWrapper>
            <>{children}</>
          </TableWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
