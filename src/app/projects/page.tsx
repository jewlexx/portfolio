import Image from "next/image";
import fs from "fs";

import styles from "./page.module.scss";
import { ProgressBarLink } from "$/components/ProgressBar";

export default async function Projects() {
  const posts = await Promise.all(
    fs.readdirSync("./src/content/projects").map(async (file) => {
      const slug = file.replace(".mdx", "");
      const { metadata } = await import("$/content/projects/" + slug + ".mdx");

      return {
        slug,
        metadata,
      };
    })
  );

  posts.sort((a, b) => {
    if (a.metadata.featured) {
      return -1;
    }
    if (b.metadata.featured) {
      return 1;
    }

    const aPubDate = new Date(a.metadata.pubDate);
    const bPubDate = new Date(b.metadata.pubDate);

    if (aPubDate > bPubDate) {
      return -1;
    }
    if (aPubDate < bPubDate) {
      return 1;
    }

    return 0;
  });

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
                {post.metadata.heroImage && (
                  <Image
                    width={1020}
                    height={510}
                    src={post.metadata.heroImage}
                    alt=""
                  />
                )}
                {post.metadata.toy && (
                  <span className={styles.toy}>
                    🤏<span className={styles.tooltip}>Toy Project</span>
                  </span>
                )}
                <h4 className={styles.title}>{post.metadata.title}</h4>
              </ProgressBarLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
