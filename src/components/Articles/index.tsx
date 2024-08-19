import { IBlogPostFields } from "$/content/blog/types";

export default function Articles({
  articles,
}: {
  articles: IBlogPostFields[];
}) {
  return (
    <ul>
      {articles.map((article) => (
        <div key={article.slug}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </ul>
  );
}
