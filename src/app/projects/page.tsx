import { getAllProjects, sortProject } from "$/content/projects";

import PostDisplay from "$/components/PostLink";
import ProjectsComponent from "$/components/Projects";

import styles from "./page.module.scss";

export default function Projects() {
  const posts = getAllProjects().sort(sortProject);

  return <ProjectsComponent posts={posts} />;
}
