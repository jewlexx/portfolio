import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src/content/projects");

export interface Metadata {
  featured?: boolean;
  title?: string;
  description?: string;
  pubDate?: string;
  repo?: string;
  homepage?: string;
  heroImage?: string;
  shields?: Shield[];
  toy?: boolean;
  hideHero?: boolean;
}

export interface Shield {
  alt?: string;
  src?: string;
  href?: string;
}

export interface PostInfo extends Metadata {
  slug: string;
  content: string;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string): PostInfo {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).sort(sortPost);
  return posts;
}

export function sortPost(a: PostInfo, b: PostInfo) {
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
