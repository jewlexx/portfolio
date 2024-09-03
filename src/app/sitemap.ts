import type { MetadataRoute } from "next";

import { getAllProjects, ProjectInfo } from "$/content/projects";
import { BASE_URL } from "$/consts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...generateProjectsSitemap(getAllProjects()),
  ];
}

function generateProjectsSitemap(
  projects: ProjectInfo[]
): MetadataRoute.Sitemap {
  return projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.pubDate),
    changeFrequency: "yearly",
    priority: 0.3,
  }));
}
