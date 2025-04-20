import type { AnchorHTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import IconLink from "$/components/IconLink";
import { linksAbridged } from "$/links";
import { ProgressBarLink } from "$/components/ProgressBar";

function HeaderLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <ProgressBarLink
      href={href}
      className={twMerge(
        props.className,
        "btn btn-ghost btn-block text-xl hover:font-bold xl:text-3xl",
      )}
      {...props}
    >
      {children}
    </ProgressBarLink>
  );
}

export default function Header() {
  return (
    <nav
      className="bg-base-200 m-4 flex max-h-screen shrink grow-0 items-center justify-between rounded-xl px-8 py-4 shadow-md lg:flex-col"
      role="navigation"
    >
      <ProgressBarLink
        className="decoration-0 transition-transform hover:scale-110"
        href="/"
        rel="prefetch"
      >
        <Image
          className="glass size-16 rounded-full lg:size-32"
          src={WomanTechnologist}
          alt="Juliette Cordor"
        />
      </ProgressBarLink>
      <span className="flex w-full grow flex-col items-center justify-center gap-4">
        <HeaderLink href="/projects">
          <p>Projects</p>
        </HeaderLink>
        <HeaderLink href="/blog">
          <p>Blog</p>
        </HeaderLink>
      </span>
      <span className="flex lg:absolute lg:bottom-5 lg:left-5 lg:flex-col">
        {linksAbridged.map((linkProps) => (
          <IconLink key={linkProps.title} {...linkProps} />
        ))}
      </span>
    </nav>
  );
}
