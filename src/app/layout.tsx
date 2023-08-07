/* src/app/layout.tsx */

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';

declare global {
  interface Window {
    gtag: any;
  }
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Azure Periodic Table',
  description: 'An essential resource for cloud developers, engineers, architects, and consultants seeking to understand Azure services. It provides links to Microsoft Learn documentation, examples of infrastructure as code using Terraform, Bicep, and ARM templates, as well as direct links to the Azure Portal for managing and deploying new resources.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ width: '100%' }}>
      <Head>
        <meta
          property="og:image"
          content="https://azure-periodic-table.onwardplatforms.com/periodic-table.png"
        />
        <meta
          property="og:image:alt"
          content="Azure Resource Naming Convention Periodic Table"
        />
        <meta
          property="twitter:image"
          content="https://azure-periodic-table.onwardplatforms.com/periodic-table.png"
        />
        <meta
          property="twitter:image:alt"
          content="Azure Resource Naming Convention Periodic Table"
        />
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
