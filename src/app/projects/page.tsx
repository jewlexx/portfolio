import { getAllProjects, sortProject } from "$/content/projects";

import ProjectsComponent from "$/components/Projects";

export default function Projects() {
  const posts = getAllProjects().sort(sortProject);

  return (
    <main data-glassmorphism="disabled">
      <ProjectsComponent posts={posts} />
    </main>
  );
}
