import Content, { metadata } from "$/content/info/about.mdx";

import ProjectPage from "$/app/projects/[slug]/page";

import "$/styles/project.scss";

export default function About() {
  const { title, description } = metadata;

  return (
    <article>
      <div className="prose">
        <div className="title">
          <h1>{title}</h1>
          <i>{description}</i>
          <hr />
        </div>
        <Content />
      </div>
    </article>
  );
}
