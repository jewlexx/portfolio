import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "$/components/Header";
import { twitterConfiguration } from "$/consts";

import "$/styles/global.scss";
import Footer from "$/components/Footer";
import Stars from "$/components/Stars";

const inter = Inter({ subsets: ["latin"] });

const title = "Juliette Cordor's Portfolio";
const description =
  "Juliette Cordor's section of the internet. Juliette is a developer, among other things, but mostly that.";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title="Juliette Cordor" />
        {children}
        <Stars />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
