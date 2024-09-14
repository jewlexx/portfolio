import RSS, { type FeedOptions } from "rss";
import { getAllProjects, type ProjectInfo } from "./projects";
import { BASE_URL } from "$/consts";
import { getAllPosts } from "./blog/api";
import { IBlogPostFields } from "./blog/types";

interface RSSOPtions {
  projects?: boolean;
  blog?: boolean;
}

export async function generateRssFeed(): Promise<RSS>;

export async function generateRssFeed(rssOptions: RSSOPtions): Promise<RSS>;

export async function generateRssFeed(
  rssOptions: RSSOPtions = { projects: true, blog: true }
) {
  const feedOptions: FeedOptions = {
    title: "Juliette Cordor's Portfolio | RSS Feed",
    feed_url: `${BASE_URL}/rss.xml`,
    image_url: `${BASE_URL}/api/og?title=Juliette Cordor's Portfolio&image=https%3A%2F%2Fcordor.dev%2Femojis%2Fsparkles.svg&backgroundColor=none`,
    site_url: BASE_URL,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  if (rssOptions.projects ?? true) {
    getAllProjects().forEach((post) => {
      feed.item(projectItem(post));
    });
  }

  if (rssOptions.blog ?? true) {
    const blogPosts = await getAllPosts();

    blogPosts.forEach((post) => {
      feed.item(blogItem(post));
    });
  }

  return feed;
}

export function projectItem(project: ProjectInfo): RSS.ItemOptions {
  return {
    title: project.title,
    description: project.description,
    url: `${BASE_URL}/projects/${project.slug}`,
    date: new Date(project.pubDate!),
    guid: project.slug,
    author: "Juliette Cordor",
  };
}

export function blogItem(post: IBlogPostFields): RSS.ItemOptions {
  return {
    title: post.title,
    description: post.excerpt ?? "",
    url: `${BASE_URL}/blog/${post.slug}`,
    date: new Date(post.date),
    guid: post.slug,
    author: post.author.name,
  };
}
