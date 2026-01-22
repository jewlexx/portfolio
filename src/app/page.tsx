import { type ComponentProps, type ReactElement } from "react";
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

import Collapsible from "$/components/Collapsible.tsx";
import { Introduction } from "$/components/Header.tsx";
import { EMAIL } from "$/consts.tsx";
import CollapsibleIcon from "$/components/CollapsibleIcon.tsx";

export default function Home() {
  return (
    <main className="prose lg:prose-xl px-5">
      <h1 className="mt-10! flex items-center gap-2">👩‍🚀 Hello, Traveller!</h1>
      <Introduction />
      <p>
        Feel free to check out{" "}
        <a href="/projects">
          some of my best projects
        </a>
        , or return to the <Link href="/engine">ever-expansive web</Link>.
      </p>
      <section className="mt-10 space-y-4">
        <h2 id="who-am-i">Who am I?</h2>
        <p>I am a developer, working in a variety of areas, including:</p>

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
    </main>
  );
}

type IconElement = ReactElement<ComponentProps<IconType>>;

function InnerContent({
  Icon,
  name,
  remainingChildren,
}: {
  Icon: IconElement;
  name: string;
  remainingChildren: ReactElement;
}) {
  return (
    <li className="list-row">
      <div className="[&>svg]:size-5">{Icon}</div>
      <div>{name}</div>
      {remainingChildren}
    </li>
  );
}

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

  const link =
    href ??
    (langCode &&
      `https://github.com/jewlexx?tab=repositories&q=&type=&language=${langCode}&sort=stargazers`);

  if (link) {
    return (
      <a href={link} rel="noreferrer" target="_blank">
        <InnerContent
          Icon={Icon}
          name={name}
          remainingChildren={remainingChildren}
        />
      </a>
    );
  } else {
    return (
      <InnerContent
        Icon={Icon}
        name={name}
        remainingChildren={remainingChildren}
      />
    );
  }
}
