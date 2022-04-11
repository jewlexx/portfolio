import type { FunctionComponent } from "react";
import Head from "next/head";

interface PageProps {
  title: string;
  description: string;
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
