import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getPostBySlug } from "$/content/blog/api";
import Date from "$/components/Date";
import ContentfulImage from "$/components/ContentfulImage";
import { notFound } from "next/navigation";

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await getPostBySlug(params.slug);

  if (article === undefined) {
    return notFound();
  }

  const content = documentToReactComponents(article.content.json);

  const coverImageUrl = (
    article.coverImage as unknown as Record<string, string> | undefined
  )?.url;

  return (
    <main>
      <article className="prose sm:prose-sm lg:prose-lg mt-15 flex min-w-screen flex-col items-center [&>p]:text-center">
        {coverImageUrl && (
          <ContentfulImage
            className="rounded-lg lg:w-[75vw]"
            src={coverImageUrl}
            alt={`Cover Image for ${article.title}`}
            width={512}
            height={512}
          />
        )}
        <h1>{article.title}</h1>
        {article.excerpt && <small>{article.excerpt}</small>}
        <Date date={article.date} />
        {content}
      </article>
    </main>
  );
}
