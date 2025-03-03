import { cookies } from "next/headers";
import Image from "next/image";

import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import HeaderLink from "$/components/HeaderLink";
import IconLink from "$/components/IconLink";
import { ProgressBarLink } from "$/components/ProgressBar";
import Shrunk from "$/components/Shrunk";
import ThemeToggle from "$/components/ThemeToggle";
import { linksAbridged } from "$/links";
import { knownTheme } from "$/theme";

export default async function Header() {
  const cookieStore = await cookies();

  return (
    <nav
      className="bg-base-200 m-4 flex shrink grow-0 items-center justify-between rounded-xl px-8 py-4 shadow-md"
      role="navigation"
    >
      <span className="flex items-center">
        <ProgressBarLink
          className="text-base-300 mr-4 block rounded-full text-4xl decoration-0 hover:scale-125"
          href="/"
          rel="prefetch"
        >
          <Image
            className="glass mr-2 flex size-16 items-center rounded-full text-black"
            src={WomanTechnologist}
            alt="Juliette Cordor"
          />
        </ProgressBarLink>
      </span>
      {/* TODO: Add headerlinks on mobile screens */}
      <Shrunk hide="portrait">
        <HeaderLink href="/projects" className="link link-hover">
          <h3 className="text-xl font-bold">Projects</h3>
        </HeaderLink>
        <HeaderLink href="/blog" className="link link-hover">
          <h3 className="text-xl font-bold">Blog</h3>
        </HeaderLink>
      </Shrunk>
      <span className="flex">
        {linksAbridged.map((linkProps) => (
          <IconLink key={linkProps.title} {...linkProps} />
        ))}
        <ThemeToggle
          defaultTheme={cookieStore.get("theme")?.value ?? knownTheme.light}
        />
      </span>
    </nav>
  );
}
