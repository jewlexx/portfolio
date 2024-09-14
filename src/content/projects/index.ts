import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const projectsDirectory = join(process.cwd(), "src/content/projects");

export interface Metadata {
  featured?: boolean;
  title: string;
  description: string;
  emoji?: string;
  pubDate: string;
  repo?: string;
  homepage?: string;
  heroImage?: string;
  profileImage?: string;
  shields?: Shield[];
  toy?: boolean;
  hideHero?: boolean;
}

export interface Shield {
  alt?: string;
  src?: string;
  href?: string;
}

export interface ProjectInfo extends Metadata {
  slug: string;
  content: string;
}

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getProjectBySlug(slug: string): ProjectInfo | null {
  try {
    return getProjectBySlugInner(slug);
  } catch (e) {
    return null;
  }
}

function getProjectBySlugInner(slug: string): ProjectInfo | null {
  const fullPath = join(projectsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...(data as Metadata),
    slug,
    content,
  };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => project !== null)
    .sort(sortProject);
}

export function sortProject(a: ProjectInfo, b: ProjectInfo) {
  if (a.featured) {
    return -1;
  }
  if (b.featured) {
    return 1;
  }

  if (a.pubDate === undefined || b.pubDate === undefined) {
    return 0;
  }

  if (new Date(a.pubDate) > new Date(b.pubDate)) {
    return -1;
  } else {
    return 1;
  }
}
