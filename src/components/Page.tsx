import type { FunctionComponent, ReactNode } from "react";
import Head from "next/head";

interface PageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Page;
