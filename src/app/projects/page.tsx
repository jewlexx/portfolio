import Image from "next/image";
import fs from "fs";

import styles from "./page.module.scss";
import { ProgressBarLink } from "$/components/ProgressBar";
import { getAllPosts, sortPost } from "$/content/posts";

export default async function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return (
    <main>
      <section>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li className={styles.entry} key={post.slug}>
              <ProgressBarLink
                href={`/projects/${post.slug}/`}
                className={styles.link}
              >
                {post.heroImage && (
                  <Image
                    width={1020}
                    height={510}
                    src={post.heroImage}
                    alt=""
                  />
                )}
                {post.toy && (
                  <span className={styles.toy}>
                    🤏<span className={styles.tooltip}>Toy Project</span>
                  </span>
                )}
                <h4 className={styles.title}>{post.title}</h4>
              </ProgressBarLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
