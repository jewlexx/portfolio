import { ProjectInfo } from "$/content/projects";

export default function appendProject(projects: ProjectInfo[]): ProjectInfo[] {
  return [
    ...projects,
    {
      emoji: "🐍",
      slug: "computing",
      content: "",
      title: "Computing",
      description:
        "A little website originally made to walk my high school computing teacher through my Holiday Homework",
      // aproximate date
      pubDate: "2022-01-01",
      heroImage:
        "https://cordor.dev/api/og?title=Python%20Homework&image=https%3A%2F%2Fcordor.dev%2Femojis%2Fsparkles.svg&backgroundColor=rgba(0%2C0%2C0%2C0)&fontColor=black",
    },
  ];
}
