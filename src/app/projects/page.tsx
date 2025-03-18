import { getAllProjects, sortProject } from "$/content/projects";

import ProjectsComponent from "$/components/Projects";
import appendProject from "$/computing_compat/appendProject";

export default function Projects() {
  const posts = appendProject(getAllProjects().sort(sortProject));

  return (
    <main>
      <ProjectsComponent posts={posts} />
    </main>
  );
}
