import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";
import IconLink from "$/components/IconLink";
import { linksAbridged } from "$/links";
import { ProgressBarLink } from "$/components/ProgressBar";
import { FaBlog, FaGithub } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

export function Introduction(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props}>
      My name is <span className="font-bold">Juliette</span>, and you have
      landed on my <span className="font-bold">silly little site</span>
      &trade;.
    </p>
  );
}

function HeaderLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <ProgressBarLink
      {...props}
      className={twMerge(
        "btn btn-ghost lg:btn-block text-xl hover:font-bold xl:text-3xl",
        props.className,
      )}
      href={href}
    >
      {children}
    </ProgressBarLink>
  );
}

export default function Header() {
  return (
    <nav
      className="bg-base-200 m-4 flex max-h-screen shrink grow-0 items-center justify-between rounded-tr-xl rounded-br-xl px-4 py-4 shadow-md not-lg:rounded-xl lg:m-0 lg:flex-col"
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

      <h3 className="px-4 not-lg:hidden">
        <Introduction />
      </h3>

      <span className="flex w-full items-center justify-center gap-4 lg:flex-col">
        <HeaderLink href="/projects">
          <FaProjectDiagram />
          Projects
        </HeaderLink>
        <HeaderLink href="/blog" className="gap-4">
          <FaBlog />
          Blog
        </HeaderLink>
      </span>
      <span className="float-left !m-0 !mb-8 flex self-start !p-0 lg:bottom-5 lg:left-5 lg:flex-col">
        {linksAbridged.map((linkProps) => (
          <IconLink key={linkProps.title} {...linkProps} />
        ))}
      </span>

      <a
        className="absolute bottom-4 !m-0 flex items-center justify-center gap-1 !p-0 opacity-75"
        href="https://github.com/jewlexx/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        This website is open source!
      </a>
    </nav>
  );
}
