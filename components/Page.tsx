import type { FunctionComponent, ReactChildren } from "react";
import Head from "next/head";
import WithDefaultGlobalStyles from "./WithDefaultGlobalStyles";

interface PageProps {
  title: string;
  description: string;
  children: ReactChildren;
}

const Page: FunctionComponent<PageProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <WithDefaultGlobalStyles>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </WithDefaultGlobalStyles>
  );
};

export default Page;
