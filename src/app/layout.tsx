import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { VercelToolbar } from "@vercel/toolbar/next";

import Header from "$/components/Header";
import { twitterConfiguration } from "$/consts";
import Stars from "$/components/Stars";
import { ProgressBar } from "$/components/ProgressBar";
import { showStars } from "$/flags";

import "./globals.css";

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
        url: "https://cordor.dev/api/og?title=" + encodeURIComponent(title),
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
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar className="progress-bar">
          <Header />
          {children}
          {shouldShowStars && <Stars />}
          <SpeedInsights />
          <Analytics />
          {shouldInjectToolbar && <VercelToolbar />}
        </ProgressBar>
      </body>
    </html>
  );
}
