import ShortDate from "$/components/ShortDate";
import { IBlogPostFields } from "$/content/blog/types";
import { ProgressBarLink } from "./ProgressBar";

export default function ArticleGroup({
  year,
  articles,
}: {
  year: number;
  articles: IBlogPostFields[];
}) {
  return (
    <div className="prose mt-10 flex min-w-screen flex-col items-center gap-y-2 *:not-lg:w-screen *:lg:w-[75vw]">
      <h1 className="!m-0 p-0">{year}</h1>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {articles.map((article) => {
          return (
            <ProgressBarLink
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="no-underline hover:[&>li]:underline"
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
            </ProgressBarLink>
          );
        })}
      </ul>
    </div>
  );
}
