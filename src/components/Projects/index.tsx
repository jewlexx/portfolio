"use client";

import { PostInfo } from "$/content/posts";

import styles from "./index.module.scss";

export default function Projects({ posts }: { posts: PostInfo[] }) {
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
