"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { type ProjectInfo } from "$/content/projects";
import { usePortrait } from "$/hooks/portrait";

import styles from "./index.module.scss";
import Image from "next/image";

export default function Projects({ posts }: { posts: ProjectInfo[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredTimeout = useRef<Timer | null>(null);
  const { isPortrait, loading } = usePortrait();

  const hoveredPost = useMemo(() => {
    return posts.find((post) => post.slug === hovered);
  }, [hovered, posts]);

  const onImageHover = useCallback((post: ProjectInfo) => {
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
    <section className="min-w-full min-h-full">
      <ul className="flex flex-wrap gap-2 justify-center">
        {posts.map((post) => (
          <li
            className="card prose  bg-base-100 card-lg shadow-sm"
            key={post.slug}
          >
            <figure>
              <Image
                src={post.heroImage!}
                alt={`${post.title} Hero Image`}
                width={1200}
                height={630}
              />
            </figure>
            <a
              className="link link-hover"
              href={`/projects/${post.slug}`}
              onMouseEnter={() => onImageHover(post)}
              onMouseLeave={onImageLeave}
            >
              <h1>
                {post.emoji} {post.title}
              </h1>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
