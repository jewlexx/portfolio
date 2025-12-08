import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winpax",
  description:
    "Creating blazing fast, package management solutions for the Windows platform.",
};

export default function WinpaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
