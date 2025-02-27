import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBluesky, FaTwitter } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

import ContentfulImage from "$/components/ContentfulImage";
import Date from "$/components/Date";
import { getPostBySlug } from "$/content/blog/api";
import { generate } from "$/links/generate";

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
    <main className="flex min-w-screen justify-center pb-15">
      <article className="prose sm:prose-sm lg:prose-lg mt-15 flex max-w-[50vw] flex-col items-center [&>p]:text-center">
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
        <Date date={article.date} />
        {article.excerpt && (
          <p className="font-bold opacity-75">{article.excerpt}</p>
        )}
        {content}

        <span className="mt-10 flex gap-10 *:opacity-75 **:size-6">
          <Link href="/blog">
            <IoMdArrowRoundBack />
          </Link>
          <a
            title="Tweet about it"
            href={generate.twitter(params.slug)}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a title="Bluesky about it?" href={generate.bluesky(params.slug)}>
            <FaBluesky />
          </a>
        </span>
      </article>
    </main>
  );
}
