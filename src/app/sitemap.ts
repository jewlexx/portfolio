import type { MetadataRoute } from "next";

import { getAllProjects, ProjectInfo } from "$/content/projects";
import { BASE_URL } from "$/consts";
import { IBlogPostFields } from "$/content/blog/types";
import { getAllPosts } from "$/content/blog/api";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...generateProjectsSitemap(getAllProjects()),
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...generateBlogSitemap((await getAllPosts()) ?? []),
  ];
}

function generateProjectsSitemap(
  projects: ProjectInfo[],
): MetadataRoute.Sitemap {
  return projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.pubDate),
    changeFrequency: "yearly",
    priority: 0.3,
  }));
}

function generateBlogSitemap(
  blogPosts: IBlogPostFields[],
): MetadataRoute.Sitemap {
  return blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.3,
  }));
}
