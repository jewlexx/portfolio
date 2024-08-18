import { getAllPosts, sortPost } from "$/content/posts";

import PostDisplay from "$/components/PostLink";

import styles from "./page.module.scss";

export default function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return (
    <section className={styles.projects}>
      <div className={styles.projectImage}>Image</div>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li className={`${styles.entry}`} key={post.slug}>
            <button>
              <p>
                {post.emoji} {post.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
