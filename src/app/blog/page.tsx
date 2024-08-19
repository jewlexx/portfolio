import { getAllPosts } from "$/content/blog/api";
import Articles from "$/components/Articles";

import styles from "./page.module.scss";

export default async function Blog() {
  const articles = await getAllPosts(false);

  return (
    <main>
      <h1>Blog</h1>
      {articles.length === 0 ? (
        <p>Coming soon...</p>
      ) : (
        <Articles articles={articles} />
      )}
    </main>
  );
}
