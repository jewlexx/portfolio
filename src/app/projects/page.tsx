import { getAllPosts, sortPost } from "$/content/posts";

import PostDisplay from "$/components/PostLink";
import ProjectsComponent from "$/components/Projects";

import styles from "./page.module.scss";

export default function Projects() {
  const posts = getAllPosts().sort(sortPost);

  return <ProjectsComponent posts={posts} />;
}
