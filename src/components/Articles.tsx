import { IBlogPostFields } from "$/content/blog/types";
import ArticleGroup from "./ArticleGroup";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  const groupedArticles = articles.reduce(
    (acc, article) => {
      const date = new Date(article.date);
      const year = date.getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(article);
      return acc;
    },
    {} as Record<number, IBlogPostFields[]>,
  );

  return (
    <>
      {Object.entries(groupedArticles)
        .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
        .map(([year, group]) => (
          <ArticleGroup key={year} year={+year} articles={group} />
        ))}
    </>
  );
}
