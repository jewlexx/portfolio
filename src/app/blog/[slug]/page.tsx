import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { parseISO, format } from "date-fns";

import { getAllPosts, getPostBySlug } from "$/content/blog/api";
import { IBlogPostFields } from "$/content/blog/types";
import Date from "$/components/Date";

// import styles from "./page.module.scss";

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const content = documentToReactComponents(post.content.json);

  return (
    <main>
      <h1>{post.title}</h1>
      {post.excerpt && <small>{post.excerpt}</small>}
      <Date date={post.date} />
      {content}
    </main>
  );
}
