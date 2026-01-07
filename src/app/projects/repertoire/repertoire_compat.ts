import { ProjectInfo } from "$/content/projects";

export const repertoireInfo = {
  featured: true,
  emoji: "💊",
  slug: "repertoire",
  content: "",
  title: "Repertoire",
  description: "A simple application for managing eScripts",
  // aproximate date
  pubDate: "",
  heroImage:
    "https://cordor.dev/api/og?image=https%3A%2F%2Fcordor.dev%2Ficons%2Frepertoire.png&backgroundColor=rgba(0%2C0%2C0%2C0)&fontColor=black",
};

export default function appendProject(projects: ProjectInfo[]): ProjectInfo[] {
  return [...projects, repertoireInfo];
}
