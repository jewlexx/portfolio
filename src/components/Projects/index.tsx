import { type ProjectInfo } from "$/content/projects";

export default function Projects({ posts }: { posts: ProjectInfo[] }) {
  return (
    <section className="min-h-full min-w-full">
      <ul className="flex flex-wrap justify-center gap-2">
        {posts.map((post) => (
          <li
            className="card prose bg-base-200/50 card-lg p-5 shadow-sm transition-transform duration-75 hover:z-50 hover:scale-105"
            key={post.slug}
          >
            <a className="no-underline" href={`/projects/${post.slug}`}>
              <img
                src={post.heroImage!}
                alt={`${post.title} Hero Image`}
                width={1200 / 4}
                height={630 / 4}
                // width = 1200 height = 630
                className="w-300"
              />
              <h1>
                {post.emoji} {post.title}
              </h1>
              <i>{post.description}</i>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
