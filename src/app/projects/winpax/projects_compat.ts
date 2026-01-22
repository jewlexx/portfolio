import { ProjectInfo } from "$/content/projects";

export default function appendProject(projects: ProjectInfo[]): ProjectInfo[] {
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
      heroImage:
        "https://cordor.dev/api/og?title=Winpax&image=https%3A%2F%2Fcordor.dev%2Femojis%2Fpackage.svg&backgroundColor=rgba(0%2C0%2C0%2C0)&fontColor=black",
    },
  ];
}
