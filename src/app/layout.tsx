import { Metadata } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import React from 'react';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Juliette Cordor',
  description: 'Juliette Cordor, developer and other things also',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/generated/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/generated/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/generated/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </Layout>
  );
}
