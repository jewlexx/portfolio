import { projectSchema, type Project } from "..";

export function appendRepertoire(
  imageUrl: string,
  projects: Project[],
): Project[] {
  const repertoireInfo = projectSchema.parse({
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
  });

  return [...projects, repertoireInfo];
}
