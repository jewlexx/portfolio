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
  IconBrandGitlab,
} from "@tabler/icons-react";

import IconLinkComponent from "$/components/IconLink.astro";
import type { ComponentProps } from "astro/types";

export type Links = ComponentProps<typeof IconLinkComponent>[];

export const links: Links = [
  {
    title: "Gitlab",
    url: "gitlab.com/cordor",
    icon: IconBrandGitlab,
    class: "btn-gitlab",
  },
  {
    title: "GitHub",
    url: "github.com/jewlexx",
    icon: IconBrandGithub,
    class: "btn-github",
  },
  {
    title: "Bluesky",
    url: "bsky.app/profile/cordor.dev",
    icon: IconBrandBluesky,
    class: "btn-bluesky",
  },
  {
    title: "Twitter",
    url: "twitter.com/jewelexx",
    icon: IconBrandTwitter,
    class: "btn-twitter",
  },
  {
    title: "Twitch",
    url: "twitch.tv/digifem",
    icon: IconBrandTwitch,
    class: "btn-twitch",
  },

  {
    title: "Linktree",
    url: "linktr.ee/jewelexx",
    icon: IconBrandLinktree,
    class: "btn-linktree",
  },
  {
    title: "Links",
    prettyTitle: "All of My links",
    url: "/links",
    local: true,
    icon: IconLink,
    class: "btn-mylinks",
  },
  {
    title: "RSS Feed",
    prettyTitle: "Keep up to date",
    url: "/rss.xml",
    icon: IconRss,
    class: "btn-rss",
  },
  {
    title: "Ko-Fi",
    prettyTitle: "Buy me a coffee",
    url: "ko-fi.com/jewelexx",
    icon: IconCoffee,
    class: "btn-kofi",
  },
  {
    title: "Epidemic Sound",
    prettyTitle: "Music I use",
    url: "share.epidemicsound.com/nm2hwt",
    icon: IconMusic,
    class: "btn-epidemic",
  },
  {
    title: "YouTube",
    url: "youtube.com/@unfilmic",
    icon: IconBrandYoutube,
    class: "btn-youtube",
  },
] as const;

// Subset of links to be displayed in the header
export const linksAbridged: Links = [
  // links.find((link) => link.title === "GitHub")!,
  // links.find((link) => link.title === "Bluesky")!,
  links.find((link) => link.title === "Links")!,
  links.find((link) => link.title === "RSS Feed")!,
  links.find((link) => link.title === "Ko-Fi")!,
];

export const linksSupportMe: Links = [
  links.find((link) => link.title === "Ko-Fi")!,
  links.find((link) => link.title === "Epidemic Sound")!,
];

export const linksFindMe: Links = [
  links.find((link) => link.title === "GitHub")!,
  links.find((link) => link.title === "Gitlab")!,
  links.find((link) => link.title === "Bluesky")!,
  links.find((link) => link.title === "Twitch")!,
  links.find((link) => link.title === "YouTube")!,
];
