import { getAllProjects, sortProject } from "$/content/projects";

import ProjectsComponent from "$/components/Projects";
import appendProject from "$/computing_compat/appendProject";

export const dynamic = "force-static";

export default function Projects() {
  const posts = appendProject(getAllProjects()).sort(sortProject);

  return (
    <main>
      <ProjectsComponent posts={posts} />
    </main>
  );
}
