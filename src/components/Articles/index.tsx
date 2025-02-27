import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

import { IBlogPostFields } from "$/content/blog/types";
import ContentfulImage from "$/components/ContentfulImage";
import Date from "$/components/Date";

import styles from "./index.module.scss";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  return (
    <ul className={styles.list}>
      {articles.map((article) => {
        return (
          <div
            key={article.slug}
            className="card lg:card-lg bg-base-100 m-5 shadow-xl hover:[&_a]:scale-110"
          >
            <figure>
              <ContentfulImage
                src={
                  (article.coverImage as unknown as Record<string, string>).url
                }
                className="hero"
                alt={`Cover Image for ${article.title}`}
                width={512}
                height={512}
              />
            </figure>
            <span className="card-body">
              <Date date={article.date} />
              <h2 className="card-title">{article.title}</h2>
              {article.excerpt && <small>{article.excerpt}</small>}
              <div className="card-actions justify-end">
                <Link
                  className="btn btn-primary transition-transform duration-75 ease-in"
                  href={`/blog/${article.slug}`}
                >
                  Open Post <MdOpenInNew />
                </Link>
              </div>
            </span>
          </div>
        );
      })}
    </ul>
  );
}
