import Stars from "./_components/Stars";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.hero}>
      <Stars />
      <div className={styles.overlay}>
        <h1 className={styles.title}>🧑‍🚀Hello, Traveller!</h1>
        <p>
          My name is <span className={styles.name}>Juliette</span>, and you have
          landed on my <span className={styles.silly}>silly little site</span>
          &trade;.
        </p>
        <p>
          Feel free to check out{" "}
          <a href="/projects">some of my best projects</a>, or return to the{" "}
          <a href="https://www.google.com">ever-expansive web</a>.
        </p>
      </div>
    </main>
  );
}
