import type { ComponentProps } from "react";
import {
  IconBrandGithub,
  IconBrandLinktree,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandBluesky,
  IconRss,
  IconCoffee,
  IconMusic,
  IconBrandYoutube,
  IconLink,
} from "@tabler/icons-react";

import IconLinkComponent from "$/components/IconLink";

export type Links = ComponentProps<typeof IconLinkComponent>[];

export const links = [
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
  {
    title: "Links",
    prettyTitle: "My links",
    url: "/links",
    icon: IconLink,
    className: "btn-mylinks",
  },
  {
    title: "RSS Feed",
    prettyTitle: "Keep up to date",
    url: "/rss.xml",
    icon: IconRss,
    className: "btn-rss",
  },
  {
    title: "Ko-Fi",
    prettyTitle: "Buy me a coffee",
    url: "ko-fi.com/jewelexx",
    icon: IconCoffee,
    className: "btn-kofi",
  },
  {
    title: "Epidemic Sound",
    prettyTitle: "Music I use",
    url: "share.epidemicsound.com/nm2hwt",
    icon: IconMusic,
    className: "btn-epidemic",
  },
  {
    title: "YouTube",
    url: "youtube.com/@unfilmic",
    icon: IconBrandYoutube,
    className: "btn-youtube",
  },
] as const;

// Subset of links to be displayed in the header
export const linksAbridged: Links = [
  links.find((link) => link.title === "GitHub")!,
  links.find((link) => link.title === "Bluesky")!,
  links.find((link) => link.title === "RSS Feed")!,
  links.find((link) => link.title === "Links")!,
];

export const linksSupportMe: Links = [
  links.find((link) => link.title === "Ko-Fi")!,
  links.find((link) => link.title === "Epidemic Sound")!,
];

export const linksFindMe: Links = [
  links.find((link) => link.title === "GitHub")!,
  links.find((link) => link.title === "Twitter")!,
  links.find((link) => link.title === "Twitch")!,
  links.find((link) => link.title === "YouTube")!,
  links.find((link) => link.title === "Bluesky")!,
];
