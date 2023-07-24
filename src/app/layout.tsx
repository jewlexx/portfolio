import { Metadata } from 'next';
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
      {children}
    </Layout>
  );
}
