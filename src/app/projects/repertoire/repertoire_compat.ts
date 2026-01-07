import { ProjectInfo } from "$/content/projects";

const nextUrl = process.env.NEXT_PUBLIC_URL;
const imageUrl = encodeURIComponent(`${nextUrl}/icons/repertoire.png`);

export const repertoireInfo: ProjectInfo = {
  featured: true,
  emoji: "💊",
  slug: "repertoire",
  content: "",
  title: "Repertoire",
  description: "A simple application for managing eScripts",
  // aproximate date
  pubDate: "",
  profileImage: imageUrl,
  heroImage: `${nextUrl}/api/og?image=${imageUrl}&backgroundColor=rgba(0%2C0%2C0%2C0)&fontColor=black`,
};

export default function appendProject(projects: ProjectInfo[]): ProjectInfo[] {
  return [...projects, repertoireInfo];
}
