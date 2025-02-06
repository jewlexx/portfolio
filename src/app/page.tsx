import { ProgressBarLink } from "$/components/ProgressBar";
import { type IconType } from "react-icons/lib";

import Link from "next/link";

export default function Home() {
  return (
    <main className="prose lg:prose-xl px-5">
      <h1 className="flex items-center gap-2 !mt-10">🧑‍🚀 Hello, Traveller!</h1>
      <p>
        My name is <span className="text-secondary font-bold">Juliette</span>,
        and you have landed on my{" "}
        <span className="text-accent font-bold">silly little site</span>
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
          <SiListItem technology="Rust" />
          <SiListItem technology="C" />
          <FaListItem technology="Java" />
          <SiListItem technology="Typescript" displayName="TypeScript" />

          <h3>Various web frameworks including</h3>
          <SiListItem technology="React" />
          <SiListItem technology="Nextdotjs" displayName="Next.js" />
          <SiListItem technology="Astro" />
          <SiListItem technology="Svelte" />
          <SiListItem technology="Solid" displayName="SolidJS" />

          <h3>Scripting and automation using</h3>
          <SiListItem technology="Gnubash" displayName="Bash" />
          <SiListItem technology="Python" />
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
    </main>
  );
}

async function FaListItem({
  technology,
  displayName = technology,
}: {
  technology: string;
  displayName?: string;
}) {
  const Icon: IconType | undefined = (await import("react-icons/fa"))[
    `Fa${technology}` as string
  ] as any;

  if (!Icon) {
    return null;
  }

  return <SubListItem icon={Icon} displayName={displayName} />;
}

async function SiListItem({
  technology,
  displayName = technology,
}: {
  technology: string;
  displayName?: string;
}) {
  const Icon: IconType | undefined = (await import("react-icons/si"))[
    `Si${technology}` as string
  ] as any;

  if (!Icon) {
    return null;
  }

  return <SubListItem icon={Icon} displayName={displayName} />;
}

function SubListItem({
  icon: Icon,
  displayName,
}: {
  icon: IconType;
  displayName: string;
}) {
  return (
    <li className="list-row">
      <div>
        <Icon className="size-5" />
      </div>
      <div>{displayName}</div>
    </li>
  );
}
