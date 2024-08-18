"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { PostInfo } from "$/content/posts";

import styles from "./index.module.scss";
import HorizontalHero from "../HorizontalHero";

export default function Projects({ posts }: { posts: PostInfo[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const hoveredPost = useMemo(() => {
    return posts.find((post) => post.slug === hovered);
  }, [hovered, posts]);

  return (
    <section className={styles.projects}>
      <div className={styles.projectImage}>
        <HorizontalHero
          enabled={hoveredPost?.heroImage !== null}
          width={1200}
          height={630}
          src={hoveredPost?.heroImage}
          alt={`${hoveredPost?.title} Hero Image`}
        />
      </div>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li
            className={`${styles.entry}`}
            key={post.slug}
            onMouseEnter={() => setHovered(post.slug)}
            onMouseLeave={() => setHovered(null)}
          >
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
