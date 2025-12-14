import { getAllProjects, sortProject } from "$/content/projects";

import ProjectsComponent from "$/components/Projects";
import appendProject from "$/computing_compat/appendProject";
import appendWinpax from "$/app/projects/winpax/projects_compat";

export default function Projects() {
  const posts = appendWinpax(appendProject(getAllProjects())).sort(sortProject);

  return (
    <main>
      <ProjectsComponent posts={posts} />
    </main>
  );
}
