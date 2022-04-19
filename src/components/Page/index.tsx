import type { FunctionComponent, ReactNode } from 'react';
import { type NextSeoProps, NextSeo } from 'next-seo';

interface PageProps extends NextSeoProps {
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = (pageProps) => {
  return (
    <>
      <NextSeo {...pageProps} />
      {pageProps.children}
    </>
  );
};

export default Page;
