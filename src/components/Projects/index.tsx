"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { PostInfo } from "$/content/posts";

import styles from "./index.module.scss";
import HorizontalHero from "../HorizontalHero";

export default function Projects({ posts }: { posts: PostInfo[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const hoveredHero = useMemo(() => {
    return posts.find((post) => post.slug === hovered)?.heroImage;
  }, [hovered, posts]);

  return (
    <section className={styles.projects}>
      <div className={styles.projectImage}>
        {hoveredHero && (
          <HorizontalHero width={1200} height={630} src={hoveredHero} alt="" />
        )}
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
