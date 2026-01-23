import type { Project } from "..";

export function repertoireInfo(imageUrl: string): Project {
  return {
    featured: true,
    emoji: "💊",
    slug: "repertoire",
    content: "",
    title: "Repertoire",
    description: "A simple application for managing eScripts",
    // aproximate date
    pubDate: "",
    profileImage: imageUrl,
    heroImage: "/hero-images/repertoire.webp",
  };
}

export function appendRepertoire(
  imageUrl: string,
  projects: Project[],
): Project[] {
  return [...projects, repertoireInfo(imageUrl)];
}
