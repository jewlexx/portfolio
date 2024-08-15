import Image from "next/image";
import fs from "fs";

import styles from "./page.module.scss";

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

  return (
    <main>
      <section>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li className={styles.entry} key={post.slug}>
              <a href={`/projects/${post.slug}/`}>
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
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
