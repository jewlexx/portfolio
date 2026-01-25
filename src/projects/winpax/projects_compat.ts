import type { Project } from "$/projects";

export default function appendProject(
  imageUrl: string,
  projects: Project[],
): Project[] {
  return [
    ...projects,
    {
      emoji: "📦",
      slug: "winpax",
      content: "",
      title: "Winpax",
      description:
        "Creating blazing fast, package management solutions for the Windows platform.",
      // aproximate date
      pubDate: "",
      heroImage: imageUrl,
    },
  ];
}
