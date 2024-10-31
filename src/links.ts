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
  },
  {
    title: "Bluesky",
    url: "bsky.app/profile/cordor.dev",
    icon: IconBrandBluesky,
  },
  {
    title: "Twitter",
    url: "twitter.com/jewelexx",
    icon: IconBrandTwitter,
  },
  {
    title: "Twitch",
    url: "twitch.tv/digifem",
    icon: IconBrandTwitch,
  },

  {
    title: "Linktree",
    url: "linktr.ee/jewelexx",
    icon: IconBrandLinktree,
  },
  {
    title: "RSS Feed",
    url: "/rss.xml",
    icon: IconRss,
  },
];
