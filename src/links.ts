import type React from "react";
import {
  IconBrandGithub,
  IconBrandLinktree,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandBluesky,
  IconRss,
} from "@tabler/icons-react";

import {
  black,
  purple,
  green,
  orange_lighter as rss_orange,
  bluesky_blue,
  twitter_blue,
} from "$/styles/_palette";

import type IconLink from "./components/IconLink";

export const links: (React.ComponentProps<typeof IconLink> & {
  color: string;
})[] = [
  {
    title: "GitHub",
    url: "github.com/jewlexx",
    icon: IconBrandGithub,
    color: black,
  },
  {
    title: "Bluesky",
    url: "bsky.app/profile/cordor.dev",
    icon: IconBrandBluesky,
    color: bluesky_blue,
  },
  {
    title: "Twitter",
    url: "twitter.com/jewelexx",
    icon: IconBrandTwitter,
    color: twitter_blue,
  },
  {
    title: "Twitch",
    url: "twitch.tv/digifem",
    icon: IconBrandTwitch,
    color: purple,
  },

  {
    title: "Linktree",
    url: "linktr.ee/jewelexx",
    icon: IconBrandLinktree,
    color: green,
  },
  {
    title: "RSS Feed",
    url: "/rss.xml",
    icon: IconRss,
    color: rss_orange,
  },
];

export const linksAbridged: typeof links = [
  links[0],
  links[1],
  links[4],
  links[5],
];
