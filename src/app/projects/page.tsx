import { getAllPosts, sortPost } from "$/content/posts";

import PostDisplay from "$/components/PostLink";

import styles from "./page.module.scss";

export default async function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return (
    <section className={styles.projects}>
      <div className={styles.projectImage}>Image</div>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li
            className={`${styles.entry} ${post.featured && styles.featured}`}
            key={post.slug}
          >
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
