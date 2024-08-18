"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { PostInfo } from "$/content/posts";
import HorizontalHero from "$/components/HorizontalHero";
import { usePortrait } from "$/hooks/portrait";

import styles from "./index.module.scss";

export default function Projects({ posts }: { posts: PostInfo[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredTimeout = useRef<Timer | null>(null);
  const { isPortrait, loading } = usePortrait();

  const hoveredPost = useMemo(() => {
    return posts.find((post) => post.slug === hovered);
  }, [hovered, posts]);

  const onImageHover = useCallback((post: PostInfo) => {
    if (hoveredTimeout.current) {
      clearTimeout(hoveredTimeout.current);
    }

    setHovered(post.slug);
  }, []);

  const onImageLeave = useCallback(() => {
    if (hoveredTimeout.current) {
      clearTimeout(hoveredTimeout.current);
    }

    hoveredTimeout.current = setTimeout(() => setHovered(null), 1000);
  }, []);

  return (
    <section className={styles.projects}>
      {!isPortrait && (
        <a
          href={`/projects/${hoveredPost?.slug}`}
          className={styles.projectImage}
          onMouseEnter={() => hoveredPost && onImageHover(hoveredPost)}
          onMouseLeave={onImageLeave}
        >
          <HorizontalHero
            enabled={hoveredPost?.heroImage !== null}
            width={1200}
            height={630}
            src={hoveredPost?.heroImage}
            alt={`${hoveredPost?.title} Hero Image`}
            slug={hoveredPost?.slug}
          />
        </a>
      )}
      <ul className={styles.list}>
        {posts.map((post) => (
          <li className={styles.entry} key={post.slug}>
            <a
              href={`/projects/${post.slug}`}
              onMouseEnter={() => onImageHover(post)}
              onMouseLeave={onImageLeave}
            >
              <span>
                {post.emoji} {post.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
