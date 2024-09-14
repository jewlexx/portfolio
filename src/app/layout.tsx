import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "$/components/Header";
import { twitterConfiguration } from "$/consts";
import Stars from "$/components/Stars";
import { ProgressBar } from "$/components/ProgressBar";

import styles from "./layout.module.scss";

import "$/styles/global.scss";
import { showStars } from "$/flags";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const title = "Juliette Cordor's Portfolio";
const description =
  "Juliette Cordor's section of the internet. Juliette is a developer, among other things, but mostly that.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cordor.dev"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://cordor.dev",
    title,
    description,
    images: [
      {
        url: "https://cordor.dev/api/og",
      },
    ],
    siteName: "Juliette Cordor's Portfolio",
  },
  twitter: twitterConfiguration,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldShowStars = await showStars();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar className={styles.progress}>
          <Header title="Juliette Cordor" />
          {children}
          {shouldShowStars && <Stars />}
          <SpeedInsights />
        </ProgressBar>
      </body>
    </html>
  );
}
