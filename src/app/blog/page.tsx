import { getAllPosts } from "$/content/blog/api";

import styles from "./page.module.scss";

export default async function Blog() {
  const articles = await getAllPosts(false);

  return (
    <>
      <h1>Blog</h1>
      {articles.length === 0 ? (
        <p>Coming soon...</p>
      ) : (
        articles.map((article) => (
          <div key={article.slug}>
            <h2>{article.title}</h2>
          </div>
        ))
      )}
    </>
  );
}
