import { type ProjectInfo } from "$/content/projects";

import Image from "next/image";

export default function Projects({ posts }: { posts: ProjectInfo[] }) {
  return (
    <section className="min-h-full min-w-full">
      <ul className="flex flex-wrap justify-center gap-2">
        {posts.map((post) => (
          <li
            className="card prose bg-base-100 card-lg shadow-sm transition-transform duration-75 hover:z-50 hover:scale-105"
            key={post.slug}
          >
            <a className="no-underline" href={`/projects/${post.slug}`}>
              <figure>
                <Image
                  src={post.heroImage!}
                  alt={`${post.title} Hero Image`}
                  width={1200}
                  height={630}
                />
              </figure>
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
