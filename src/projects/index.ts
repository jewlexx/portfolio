import fs from "fs";
import { join } from "path";

import { z } from "astro/zod";
import { match } from "ts-pattern";
import matter from "gray-matter";
import { Arch, Os, parseArch, parseOs } from "$/arch";

const projectsDirectory = join(process.cwd(), "src/content/projects");

export const archSchema = z.nativeEnum(Arch);

export const osSchema = z.nativeEnum(Os);

export const downloadSchema = z.object({
  src: z.literal("github"),
  infoExtractor: z.string().transform((input) => new RegExp(input)),
  arch: z.array(archSchema),
  os: z.array(osSchema),
});
export type Download = z.infer<typeof downloadSchema>;

export const shieldSchema = z.object({
  alt: z.string().optional(),
  src: z.string().optional(),
  href: z.string().optional(),
});
export type Shield = z.infer<typeof shieldSchema>;

export const metadataSchema = z.object({
  featured: z.boolean().optional(),
  title: z.string(),
  description: z.string(),
  emoji: z.string().optional(),
  pubDate: z.string(),
  repo: z.string().optional(),
  homepage: z.string().optional(),
  heroImage: z.string().optional(),
  profileImage: z.string().optional(),
  shields: z.array(shieldSchema).optional(),
  toy: z.boolean().optional(),
  hideHero: z.boolean().optional(),
  download: downloadSchema.optional(),
});
export type Metadata = z.infer<typeof metadataSchema>;

export const projectSchema = metadataSchema.extend({
  slug: z.string(),
  content: z.string().optional(),
});
export type Project = z.infer<typeof projectSchema>;

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    return getProjectBySlugInner(slug);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return null;
  }
}

function getProjectBySlugInner(slug: string): Project | null {
  const fullPath = join(projectsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.repo) {
    const repo: string = data.repo;

    const repoUrl = match(repo)
      .when(
        (repo) => repo.startsWith("http://"),
        () => repo.replace("http://", "https://"),
      )
      .when(
        (repo) => repo.startsWith("https://"),
        () => repo,
      )
      .when(
        (repo) => /^[a-zA-Z0-9\-_\.]+\/[a-zA-Z0-9\-_\.]+$/.test(repo),
        () => `https://github.com/${repo}`,
      )
      .when(
        (repo) => /^[a-zA-Z0-9\-_\.]+$/.test(repo),
        () => `https://github.com/jewlexx/${repo}`,
      )
      .otherwise(() => null);

    if (repoUrl) {
      data.repo = repoUrl;
    } else {
      throw new Error(`Invalid repo url for ${slug}`);
    }

    data.repo = repoUrl;
  }

  if (data.download) {
    const download = data.download;

    if (download.arch) {
      download.arch = download.arch.map((arch: string) => parseArch(arch));
    }
    if (download.os) {
      download.os = download.os.map((os: string) => parseOs(os));
    }

    data.download = download;
  }

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

export function sortProject(a: Project, b: Project) {
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
