"use client";

import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

import { ProgressBarLink } from "$/components/ProgressBar";
import { usePathname } from "next/navigation";
import "$/styles/error.scss";

const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className={`${ibmPlexMono.className} terminal`}>
      <p className="terminal-output">$ curl {pathname}</p>
      <p className="terminal-output">404 Not Found</p>
      <p id="pathname" className="terminal-output">
        {pathname} could not be found. <br /> It probably doesn&apos;t exist...
      </p>
      <p className="terminal-output">
        To return to a page that does exist, go to
        <br />
        <ProgressBarLink href="/">https://cordor.dev</ProgressBarLink>
      </p>
      <p className="terminal-output">
        If you call a support person, give them this info:
        <br />
        Stop Code: 404 PAGE NOT FOUND
      </p>
      <p>$ catsay 404</p>
      <Image
        src="https://http.cat/404"
        alt="404 cat"
        width={750}
        height={600}
      />
    </main>
  );
}
