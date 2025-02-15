import {
	IconBrandGithub,
	IconBrandLinktree,
	IconBrandTwitch,
	IconBrandTwitter,
	IconBrandBluesky,
	IconRss
} from '@tabler/icons-svelte';

export const links = [
	{
		title: 'GitHub',
		url: 'github.com/jewlexx',
		icon: IconBrandGithub,
		className: 'bg-black'
	},
	{
		title: 'Bluesky',
		url: 'bsky.app/profile/cordor.dev',
		icon: IconBrandBluesky,
		className: 'bg-bluesky'
	},
	{
		title: 'Twitter',
		url: 'twitter.com/jewelexx',
		icon: IconBrandTwitter,
		className: 'bg-twitter'
	},
	{
		title: 'Twitch',
		url: 'twitch.tv/digifem',
		icon: IconBrandTwitch,
		className: 'bg-twitch'
	},

	{
		title: 'Linktree',
		url: 'linktr.ee/jewelexx',
		icon: IconBrandLinktree,
		className: 'bg-linktree'
	},
	{
		title: 'RSS Feed',
		url: '/rss.xml',
		icon: IconRss,
		className: 'bg-rss'
	}
] as const;

// Subset of links to be displayed in the header
export const linksAbridged = [
	links.find((link) => link.title === 'GitHub')!,
	links.find((link) => link.title === 'Bluesky')!,
	links.find((link) => link.title === 'Linktree')!,
	links.find((link) => link.title === 'Twitter')!
	// links.find((link) => link.title === 'RSS Feed')!
] as const;
