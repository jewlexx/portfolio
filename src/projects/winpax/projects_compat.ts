import { projectSchema, type Project } from "$/projects";

export default function appendProject(
  imageUrl: string,
  projects: Project[],
): Project[] {
  const winpaxInfo = projectSchema.parse({
    emoji: "📦",
    slug: "winpax",
    content: "",
    title: "Winpax",
    description:
      "Creating blazing fast, package management solutions for the Windows platform.",
    // aproximate date
    pubDate: "",
    heroImage: imageUrl,
  });

  return [...projects, winpaxInfo];
}
