import { getAllPosts, sortPost } from "$/content/posts";

import PostDisplay from "$/components/PostLink";

import styles from "./page.module.scss";

export default async function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return (
    <main>
      <section>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li
              className={`${styles.entry} ${post.featured && styles.featured}`}
              key={post.slug}
            >
              <PostDisplay post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
