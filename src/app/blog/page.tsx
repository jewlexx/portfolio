import { getAllPosts } from "$/content/blog/api";
import { IBlogPostFields } from "$/content/blog/types";

import styles from "./page.module.scss";

export default async function Blog() {
  const articles = await getAllPosts(false);

  return (
    <main>
      <h1>Blog</h1>
      {articles.map((article) => (
        <div key={article.slug}>
          <h2>{article.title}</h2>
          <p>{JSON.stringify(article.content)}</p>
        </div>
      ))}
    </main>
  );
}
