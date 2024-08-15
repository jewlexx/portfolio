import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "$/components/Header";

import "./globals.scss";
import "$/app/styles/global.scss";

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
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jewelexx",
    site: "https://cordor.dev",
    title,
    description,
  },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
