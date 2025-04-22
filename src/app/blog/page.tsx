import { getAllPosts } from "$/content/blog/api";
import Articles from "$/components/Articles";

export const revalidate = 3600;

export default async function Blog() {
  const articles = await getAllPosts();

  return (
    <main>
      <div className="prose sm:prose-sm lg:prose-lg mt-15 flex min-w-screen flex-col items-center [&>p]:text-center">
        <h1>Juliette&apos;s Blog</h1>
        {(articles === undefined || articles.length === 0) && (
          <p>
            Coming soon,
            <br />
            Once I have stuff to say...
          </p>
        )}
      </div>
      {articles !== undefined && articles.length !== 0 && (
        <Articles articles={articles} />
      )}
    </main>
  );
}
