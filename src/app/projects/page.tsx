import { getAllProjects, sortProject } from "$/content/projects";

import ProjectsComponent from "$/components/Projects";
import appendProject from "$/computing_compat/appendProject";
import appendWinpax from "$/app/projects/winpax/projects_compat";
import appendRepertoire from "$/app/projects/repertoire/repertoire_compat";

export default function Projects() {
  const posts = appendRepertoire(
    appendWinpax(appendProject(getAllProjects())),
  ).sort(sortProject);

  return (
    <main>
      <ProjectsComponent posts={posts} />
    </main>
  );
}
