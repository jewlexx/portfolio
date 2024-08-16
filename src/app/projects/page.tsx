import Image from "next/image";

import { ProgressBarLink } from "$/components/ProgressBar";
import { getAllPosts, sortPost } from "$/content/posts";

import styles from "./page.module.scss";
import PostDisplay from "$/components/PostLink";

export default async function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return (
    <main>
      <section>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li className={styles.entry} key={post.slug}>
              <PostDisplay post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
