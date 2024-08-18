"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

import { PostInfo } from "$/content/posts";

import styles from "./index.module.scss";
import HorizontalHero from "../HorizontalHero";

export default function Projects({ posts }: { posts: PostInfo[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredTimeout = useRef<Timer | null>(null);

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
          <li className={`${styles.entry}`} key={post.slug}>
            <button
              onMouseEnter={() => {
                if (hoveredTimeout.current) {
                  clearTimeout(hoveredTimeout.current);
                }

                setHovered(post.slug);
              }}
              onMouseLeave={() => {
                if (hoveredTimeout.current) {
                  clearTimeout(hoveredTimeout.current);
                }

                hoveredTimeout.current = setTimeout(
                  () => setHovered(null),
                  1000
                );
              }}
            >
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
