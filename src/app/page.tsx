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
        <p>
          I am an independent software developer, who works mostly on the
          backend, but I also dabble in frontends, for{" "}
          <a href="https://github.com/winpax/sfsu">CLI</a>,{" "}
          <a href="https://github.com/jewlexx/fauxchat">desktop</a>,{" "}
          <Link href="/#who-am-i">web</Link>, and mobile.
        </p>
        <p>
          I also have a couple of open-source Rust libraries, including{" "}
          <a href="https://github.com/jewlexx/discord-presence">
            discord-presence
          </a>
          , <a href="https://github.com/winpax/sprinkles">sprinkles</a> and{" "}
          <a href="https://github.com/jewlexx/quork">quork</a>.
        </p>
        <p>
          I have a range of experience, working with a variety of technologies,
          including:
        </p>
        <ul className="list">
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

          <h3>Various web frameworks including</h3>
          <SubListItem>
            <SiReact />
            React
          </SubListItem>
          <SubListItem>
            <SiNextdotjs />
            Next.js
          </SubListItem>
          <SubListItem>
            <SiAstro />
            Astro
          </SubListItem>
          <SubListItem>
            <SiSvelte />
            Svelte
          </SubListItem>
          <SubListItem>
            <SiSolid />
            SolidJS
          </SubListItem>

          <h3>Scripting and automation using</h3>
          <SubListItem>
            <SiGnubash />
            Bash
          </SubListItem>
          <SubListItem>
            <SiPython />
            Python
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
  children,
}: {
  langCode?: string;
  children: [IconElement, string];
}) {
  const [Icon, name] = children;

  function InnerContent() {
    return (
      <>
        <div className="[&>svg]:size-5">{Icon}</div>
        <div>{name}</div>
      </>
    );
  }

  if (!langCode) {
    return (
      <li className="list-row">
        <InnerContent />
      </li>
    );
  } else {
    const link = `https://github.com/jewlexx?tab=repositories&q=&type=&language=${langCode}&sort=stargazers`;

    return (
      <a className="list-row" href={link} rel="noreferrer" target="_blank">
        <InnerContent />
      </a>
    );
  }
}
