import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getPostBySlug } from "$/content/blog/api";
import Date from "$/components/Date";

// import styles from "./page.module.scss";

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  const content = documentToReactComponents(post.content.json);

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.excerpt && <small>{post.excerpt}</small>}
        <Date date={post.date} />
        {content}
      </article>
    </main>
  );
}
