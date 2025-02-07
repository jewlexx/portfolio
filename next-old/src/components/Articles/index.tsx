import { IBlogPostFields } from "$/content/blog/types";
import ContentfulImage from "$/components/ContentfulImage";
import Date from "$/components/Date";

import styles from "./index.module.scss";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  const adjustedArticles = articles;

  return (
    <ul className={styles.list}>
      {adjustedArticles.map((article, i) => {
        return (
          <a
            key={article.slug}
            className={styles.article}
            href={`/blog/${article.slug}`}
          >
            <ContentfulImage
              src={(article.coverImage as any).url}
              width={512}
              height={512}
            />
            <span className={styles.articleInfo}>
              <Date date={article.date} />
              <h2>{article.title}</h2>
              {article.excerpt && <small>{article.excerpt}</small>}
            </span>
          </a>
        );
      })}
    </ul>
  );
}
