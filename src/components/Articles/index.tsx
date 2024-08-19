import { IBlogPostFields } from "$/content/blog/types";
import ContentfulImage from "$/components/ContentfulImage";
import Date from "$/components/Date";

import styles from "./index.module.scss";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  const newArticles = new Array(5).fill(articles[0], 0, 5).map((article) => {
    return { ...article, excerpt: "Test Excerpt" };
  });

  return (
    <ul className={styles.list}>
      {newArticles.map((article) => (
        <a
          key={article.slug}
          className={styles.article}
          href={`/blog/${article.slug}`}
        >
          <ContentfulImage
            src={article.coverImage.url}
            width={512}
            height={512}
          />
          <span className={styles.articleInfo}>
            <Date date={article.date} />
            <h2>{article.title}</h2>
            {article.excerpt && <small>{article.excerpt}</small>}
          </span>
        </a>
      ))}
    </ul>
  );
}
