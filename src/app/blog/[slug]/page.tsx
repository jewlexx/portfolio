import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getPostBySlug } from "$/content/blog/api";
import Date from "$/components/Date";
import ContentfulImage from "$/components/ContentfulImage";

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await getPostBySlug(params.slug);
  const content = documentToReactComponents(article.content.json);

  return (
    <main>
      <article className="prose sm:prose-sm lg:prose-lg mt-15 flex min-w-screen flex-col items-center [&>p]:text-center">
        <ContentfulImage
          className="rounded-lg lg:w-[75vw]"
          src={(article.coverImage as unknown as Record<string, string>).url}
          alt={`Cover Image for ${article.title}`}
          width={512}
          height={512}
        />
        <h1>{article.title}</h1>
        {article.excerpt && <small>{article.excerpt}</small>}
        <Date date={article.date} />
        {content}
      </article>
    </main>
  );
}
