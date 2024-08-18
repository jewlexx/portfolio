import Image from "next/image";

import Astronaut from "$/assets/images/emojis/astronaut.svg";
import { ProgressBarLink } from "$/components/ProgressBar";
import * as post from "$/content/info/about.mdx";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.overlay}>
      <h1 className={styles.title}>
        <Image src={Astronaut} alt="Astronaut Emoji" /> Hello, Traveller!
      </h1>
      <p>
        My name is <span className={styles.name}>Juliette</span>, and you have
        landed on my <span className={styles.silly}>silly little site</span>
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
      <section className={styles.aboutProse}>
        <post.default />
      </section>
    </section>
  );
}
