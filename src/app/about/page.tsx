import Content from "$/content/info/about.mdx";

import styles from "./page.module.scss";

export default function About() {
  return (
    <main className={styles.hero}>
      <Content />
    </main>
  );
}
