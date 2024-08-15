import Image from "next/image";

import { ProgressBarLink } from "$/components/ProgressBar";
import { getAllPosts, sortPost } from "$/content/posts";

import styles from "./page.module.scss";

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
                    width={1200}
                    height={630}
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
