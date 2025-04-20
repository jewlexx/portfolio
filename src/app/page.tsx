import type { ComponentProps, ReactElement } from "react";
import { type IconType } from "react-icons/lib";
import Link from "next/link";

import {
  SiC,
  SiRust,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiSvelte,
  SiSolid,
  SiGnubash,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import {
  IoSpeedometerOutline,
  IoLibraryOutline,
  IoDesktopOutline,
  IoGlobeOutline,
} from "react-icons/io5";
import { HiOutlineCommandLine } from "react-icons/hi2";

import { ProgressBarLink } from "$/components/ProgressBar";
import AnybrowserDisplay from "$/components/AnybrowserDisplay";
import * as anybrowser from "$/assets/images/anybrowser";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="prose lg:prose-xl px-5">
      <h1 className="!mt-10 flex items-center gap-2">🧑‍🚀 Hello, Traveller!</h1>
      <p>
        My name is <span className="font-bold">Juliette</span>, and you have
        landed on my <span className="font-bold">silly little site</span>
        &trade;.
      </p>
      <p>
        Feel free to check out{" "}
        <ProgressBarLink href="/projects">
          some of my best projects
        </ProgressBarLink>
        , or return to the{" "}
        <a href="https://www.google.com">ever-expansive web</a>.
      </p>
      <section className="mt-10 space-y-4">
        <h2 id="who-am-i">Who am I?</h2>
        <p>I am a developer, working in a variety of areas, including:</p>
        <ul className="list">
          <SubListItem href="https://github.com/jewlexx/fauxchat">
            <IoDesktopOutline />
            Desktop Applications
          </SubListItem>
          <SubListItem href="/#who-am-i">
            <IoGlobeOutline />
            Web Applications
          </SubListItem>
          <SubListItem href="https://github.com/winpax/sfsu">
            <HiOutlineCommandLine />
            CLI Applications
          </SubListItem>
          <SubListItem href="https://github.com/jewlexx/discord-presence">
            <IoLibraryOutline />
            API Libraries
          </SubListItem>

          <h3>Low level code</h3>
          <SubListItem href="https://github.com/jewlexx/do-not-enter">
            <FiCpu />
            Kernel/OS Implementation
          </SubListItem>
          <SubListItem href="https://github.com/winpax/miniature">
            <IoSpeedometerOutline />
            Low level optimisations
          </SubListItem>

          <h3>Languages</h3>
          <SubListItem langCode="rust">
            <SiRust />
            Rust
          </SubListItem>
          <SubListItem langCode="c">
            <SiC />C
          </SubListItem>
          <SubListItem langCode="java">
            <FaJava />
            Java
          </SubListItem>
          <SubListItem langCode="typescript">
            <SiTypescript />
            TypeScript
          </SubListItem>

          <h3>Various web frameworks</h3>
          <SubListItem>
            <SiReact />
            React
          </SubListItem>
          <SubListItem>
            <SiNextdotjs />
            Next.js
          </SubListItem>
          <SubListItem>
            <SiSvelte />
            Svelte
          </SubListItem>
        </ul>
        <p>
          I am also a big fan of{" "}
          <a href="https://github.com/jewlexx">open source</a>, and I love to
          help people out with their projects.
        </p>
        <p>
          If you want to get in touch, you can find me on{" "}
          <a href="https://x.com/jewelexx">Twitter (X)</a>,{" "}
          <a href="https://github.com/jewlexx">GitHub</a>, or shoot me an email
          at <a href="mailto:juliette@cordor.dev">juliette@cordor.dev</a>.
        </p>
      </section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(88px,1fr))]">
        {Object.values(anybrowser).map((image) => {
          return <AnybrowserDisplay image={image} key={image.alt} />;
        })}
      </div>
    </main>
  );
}

type IconElement = ReactElement<ComponentProps<IconType>>;

function SubListItem({
  langCode,
  href,
  children,
}: {
  langCode?: string;
  href?: string;
  children: [IconElement, string, ...ReactElement[]];
}) {
  const [Icon, name, remainingChildren] = children;

  function InnerContent() {
    return (
      <li className="list-row">
        <div className="[&>svg]:size-5">{Icon}</div>
        <div>{name}</div>
        {remainingChildren}
      </li>
    );
  }

  const link =
    href ??
    (langCode &&
      `https://github.com/jewlexx?tab=repositories&q=&type=&language=${langCode}&sort=stargazers`);

  if (link) {
    return (
      <a href={link} rel="noreferrer" target="_blank">
        <InnerContent />
      </a>
    );
  } else {
    return <InnerContent />;
  }
}
