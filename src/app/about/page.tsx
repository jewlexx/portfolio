import * as post from "$/content/info/about.mdx";

import "$/styles/project.scss";

export const metadata = (post as any).metadata;

export default function About() {
  const { title, description } = (post as any).metadata;

  return (
    <article>
      <div className="prose">
        <div className="title">
          <h1>{title}</h1>
          <i>{description}</i>
          <hr />
        </div>
        <post.default />
      </div>
    </article>
  );
}
