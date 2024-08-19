import RSS, { type FeedOptions } from "rss";
import { getAllProjects, type ProjectInfo } from "./projects";
import { siteUrl } from "$/consts";

interface RSSOPtions {
  projects?: boolean;
}

export function generateRssFeed(): RSS;

export function generateRssFeed(rssOptions: RSSOPtions): RSS;

export function generateRssFeed(rssOptions: RSSOPtions = { projects: true }) {
  const feedOptions: FeedOptions = {
    title: "Juliette Cordor's Portfolio | RSS Feed",
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/api/og?title=Juliette Cordor's Portfolio&image=https%3A%2F%2Fcordor.dev%2Femojis%2Fsparkles.svg&backgroundColor=none`,
    site_url: siteUrl,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  if (rssOptions.projects ?? true) {
    getAllProjects().forEach((post) => {
      feed.item(projectItem(post));
    });
  }

  return feed;
}

export function projectItem(project: ProjectInfo): RSS.ItemOptions {
  return {
    title: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    date: new Date(project.pubDate!),
    guid: project.slug,
    author: "Juliette Cordor",
  };
}
