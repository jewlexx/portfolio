import type React from "react";
import {
  IconBrandGithub,
  IconBrandLinktree,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandBluesky,
  IconRss,
} from "@tabler/icons-react";

import type IconLink from "./components/IconLink";

export const links: React.ComponentProps<typeof IconLink>[] = [
  {
    title: "GitHub",
    url: "github.com/jewlexx",
    icon: IconBrandGithub,
    className: "btn-github",
  },
  {
    title: "Bluesky",
    url: "bsky.app/profile/cordor.dev",
    icon: IconBrandBluesky,
    className: "btn-bluesky",
  },
  {
    title: "Twitter",
    url: "twitter.com/jewelexx",
    icon: IconBrandTwitter,
    className: "btn-twitter",
  },
  {
    title: "Twitch",
    url: "twitch.tv/digifem",
    icon: IconBrandTwitch,
    className: "btn-twitch",
  },

  {
    title: "Linktree",
    url: "linktr.ee/jewelexx",
    icon: IconBrandLinktree,
    className: "btn-linktree",
  },
  { title: "RSS Feed", url: "/rss.xml", icon: IconRss, className: "btn-rss" },
];

// Subset of links to be displayed in the header
export const linksAbridged: typeof links = [
  links.find((link) => link.title === "GitHub")!,
  links.find((link) => link.title === "Bluesky")!,
  links.find((link) => link.title === "Linktree")!,
  links.find((link) => link.title === "RSS Feed")!,
];
