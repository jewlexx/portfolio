import { getAllPosts } from "$/content/blog/api";
import Articles from "$/components/Articles";
import { draftMode } from "next/headers";

import styles from "./page.module.scss";

export default async function Blog() {
  const { isEnabled: isDraft } = draftMode();
  const articles = await getAllPosts(isDraft);

  return (
    <main className={styles.main}>
      <div>
        <h1>Juliette&apos;s Blog</h1>
        {articles.length === 0 ? (
          <p>
            Coming soon,
            <br />
            Once I have stuff to say...
          </p>
        ) : (
          <p>
            Here are some of my thoughts.
            <br />
          </p>
        )}
      </div>
      {articles.length !== 0 && <Articles articles={articles} />}
    </main>
  );
}
