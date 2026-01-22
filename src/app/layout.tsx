import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";

import { twitterConfiguration } from "$/consts";
import { knownTheme } from "$/theme";
import Header from "$/components/Header";
import "./globals.css";
import { Back } from "$/components/Back";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"], preload: true });

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
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" data-theme={knownTheme.light}>
      <body
        className={twMerge(
          inter.className,
          "min-h-screen grid-cols-[25fr_75fr] gap-4 *:max-h-screen *:overflow-auto lg:grid",
        )}
      >
        <Back />
        <Header />
        <div className="py-5">{children}</div>
      </body>
      {shouldInjectToolbar && <VercelToolbar />}
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
