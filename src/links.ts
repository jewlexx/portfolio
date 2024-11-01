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
  blue,
  green,
  orange_lighter,
  orange,
  bluesky_blue,
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
    color: blue,
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
    color: orange,
  },
];
