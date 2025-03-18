import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";

import Header from "$/components/Header";
import { ProgressBar } from "$/components/ProgressBar";
import { twitterConfiguration } from "$/consts";
import { knownTheme } from "$/theme";
import "./globals.css";
import GirlAnim from "$/components/GirlAnim";

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
  const cookieStore = await cookies();
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html
      lang="en"
      data-theme={cookieStore.get("theme")?.value ?? knownTheme.light}
    >
      <body className={inter.className}>
        <ProgressBar className="progress-bar">
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          {shouldInjectToolbar && <VercelToolbar />}
          <GirlAnim />
        </ProgressBar>
      </body>
    </html>
  );
}
