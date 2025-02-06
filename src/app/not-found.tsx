"use client";

import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

import { ProgressBarLink } from "$/components/ProgressBar";
import { usePathname } from "next/navigation";
import "$/styles/error.scss";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

const cowsay404 = `
 _____
< 404 >
 -----
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main
      className={`${ibmPlexMono.className} terminal text-green-terminal-400`}
    >
      <p className="">$ curl {pathname}</p>
      <p>curl: (22) The requested URL returned error: 404</p>
      <br />
      <p>$ why</p>
      <p id="pathname">
        {pathname} could not be found. <br /> It probably doesn&apos;t exist...
      </p>
      <p>
        To return to a page that does exist, go to{" "}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="hover:text-green-terminal-200" href="/">
          https://www.cordor.dev/
        </a>
      </p>
      <br />
      <p>$ cowsay 404</p>
      {cowsay404
        .replace(/ /g, "\u00A0")
        .split("\n")
        .map((line, i) => (
          <p key={i}>{line}</p>
        ))}
    </main>
  );
}
