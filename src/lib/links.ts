import {
	type Icon,
	IconClock,
	IconBrandGithub,
	IconBrandTwitch,
	IconBrandTwitter,
	IconBrandLinktree,
	IconBrandMastodon,
	IconHeadphones,
	IconHeadphonesOff
} from '@tabler/icons-svelte';

export interface Link {
	name: string;
	url: string;
	emoji: any;
	rel?: string;
}

export const links: Link[] = [
	{
		emoji: IconBrandGithub,
		name: 'Github',
		url: 'https://github.com/jewlexx'
	},
	{
		emoji: IconBrandTwitch,
		name: 'Twitch',
		url: 'https://twitch.tv/sapphicjewl'
	},
	{
		emoji: IconBrandTwitter,
		name: 'Twitter',
		url: 'https://twitter.com/jewelexx'
	},
	{
		emoji: IconBrandMastodon,
		name: 'Mastodon',
		url: 'https://tech.lgbt/@jewelexx',
		rel: 'me'
	},
	{
		emoji: IconBrandLinktree,
		name: 'Linktree',
		url: 'https://linktr.ee/jewelexx'
	}
];
