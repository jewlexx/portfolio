import type { ComponentProps, ReactElement } from "react";
import Link from "next/link";

import { type IconType } from "react-icons/lib";
import {
  SiC,
  SiRust,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTauri,
} from "react-icons/si";
import { FaJava, FaDiscord } from "react-icons/fa";
import { FiCpu, FiPackage } from "react-icons/fi";
import {
  IoSpeedometerOutline,
  IoLibraryOutline,
  IoDesktopOutline,
  IoGlobeOutline,
} from "react-icons/io5";
import { HiOutlineCommandLine } from "react-icons/hi2";

import Collapsible from "$/components/Collapsible";
import { ProgressBarLink } from "$/components/ProgressBar";
import { Introduction } from "$/components/Header";
import AnybrowserDisplay from "$/components/AnybrowserDisplay";
import * as anybrowser from "$/assets/images/anybrowser";
import { EMAIL } from "$/consts";
import CollapsibleIcon from "$/components/CollapsibleIcon";

export default function Home() {
  return (
    <main className="prose lg:prose-xl px-5">
      <h1 className="!mt-10 flex items-center gap-2">🧑‍🚀 Hello, Traveller!</h1>
      <Introduction />
      <p>
        Feel free to check out{" "}
        <ProgressBarLink href="/projects">
          some of my best projects
        </ProgressBarLink>
        , or return to the <Link href="/engine">ever-expansive web</Link>.
      </p>
      <section className="mt-10 space-y-4">
        <h2 id="who-am-i">Who am I?</h2>
        <p>I am a developer, working in a variety of areas, including:</p>
        <ul className="list">
          <CollapsibleIcon
            title="Desktop Applications"
            icon={<IoDesktopOutline />}
          >
            <SubListItem href="https://github.com/jewlexx/fauxchat">
              <SiTauri />
              Tauri
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon title="Web Applications" icon={<IoGlobeOutline />}>
            <SubListItem href="/#who-am-i">
              <SiNextdotjs />
              Next.js
            </SubListItem>
            <SubListItem href="https://winpax.cordor.dev">
              <SiReact />
              React
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon
            title="CLI Applications"
            icon={<HiOutlineCommandLine />}
          >
            <SubListItem href="https://github.com/winpax/sfsu">
              <FiPackage />
              Package Manager
            </SubListItem>
          </CollapsibleIcon>
          <CollapsibleIcon title="API Libraries" icon={<IoLibraryOutline />}>
            <SubListItem href="https://github.com/jewlexx/discord-presence">
              <FaDiscord />
              Discord Presence
            </SubListItem>
          </CollapsibleIcon>
        </ul>

        <p className="!m-0">As well as:</p>
        <ul className="list !mt-0">
          <Collapsible title="Low level code">
            <SubListItem href="https://github.com/jewlexx/do-not-enter">
              <FiCpu />
              Kernel/OS Implementation
            </SubListItem>
            <SubListItem href="https://github.com/winpax/miniature">
              <IoSpeedometerOutline />
              Low level optimisations
            </SubListItem>
          </Collapsible>

          <Collapsible title="Various Languages">
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
          </Collapsible>

          <Collapsible title="Various web frameworks">
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
          </Collapsible>
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
          at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
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
