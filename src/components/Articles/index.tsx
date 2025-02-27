import Link from "next/link";

import { IBlogPostFields } from "$/content/blog/types";
import ShortDate from "$/components/ShortDate";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  return (
    <ul className="list bg-base-100 rounded-box mx-[12.5vw] shadow-md">
      {articles.map((article) => {
        return (
          <Link
            href={`/blog/${article.slug}`}
            key={article.slug}
            className="hover:[&>li]:underline"
          >
            <li className="list-row">
              <div className="align-center flex flex-col justify-center opacity-30">
                <ShortDate date={article.date} />
              </div>
              <div>
                <div className="text-lg">{article.title}</div>
                {article.excerpt && (
                  <div className="text-xs opacity-60">{article.excerpt}</div>
                )}
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
