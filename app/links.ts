import {
  type TablerIcon,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandLinktree,
} from '@tabler/icons';

export interface Link {
  name: string;
  url: string;
  emoji: TablerIcon;
}

const links: Link[] = [
  {
    emoji: IconBrandGithub,
    name: 'Github',
    url: 'https://github.com/jewlexx',
  },
  {
    emoji: IconBrandTwitch,
    name: 'Twitch',
    url: 'https://twitch.tv/sapphicjewl',
  },
  {
    emoji: IconBrandTwitter,
    name: 'Twitter',
    url: 'https://twitter.com/jewelexx',
  },
  {
    emoji: IconBrandLinktree,
    name: 'Linktree',
    url: 'https://linktr.ee/jewelexx',
  },
];

export default links;
