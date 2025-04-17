import { notFound } from "next/navigation";
import { FaBluesky, FaTwitter } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

import ContentfulImage from "$/components/ContentfulImage";
import Date from "$/components/Date";
import renderPost from "$/components/NodeRenderers";
import { getAllPosts, getPostBySlug } from "$/content/blog/api";
import { generate } from "$/links/generate";
import { ProgressBarLink } from "$/components/ProgressBar";

export const revalidate = 3600; // 1 hour
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = (await getAllPosts(false)) ?? [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await getPostBySlug(params.slug);

  if (article === undefined) {
    return notFound();
  }

  // const headings: Heading[] = article.content.json.content
  //   .filter((node) => node.nodeType.startsWith("heading"))
  //   .map((node) => {
  //     if (node.content.length !== 1) {
  //       throw new Error("Heading node should have one child");
  //     }

  //     const header = node.content[0];

  //     if (header.nodeType !== "text") {
  //       throw new Error("Heading node should have text content");
  //     }

  //     return {
  //       headerType: node.nodeType as HeadingType,
  //       text: header.value,
  //       id: parseHeaderId(header.value),
  //     };
  //   });

  const content = renderPost(article);

  const coverImageUrl = (
    article.coverImage as unknown as Record<string, string> | undefined
  )?.url;

  return (
    <main className="flex min-w-screen justify-center pb-15">
      <article className="prose sm:prose-sm lg:prose-lg mt-15 flex flex-col lg:max-w-[50vw]">
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
          <ProgressBarLink href="/blog">
            <IoMdArrowRoundBack />
          </ProgressBarLink>
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
        {/* <HeadingSelector headings={headings} /> */}
      </article>
    </main>
  );
}
