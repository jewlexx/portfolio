/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	IconBrandGithub,
	IconBrandTwitch,
	IconBrandX as IconBrandTwitter,
	IconBrandLinktree,
} from '@tabler/icons-svelte';

export interface Link {
	title: string;
	url: string;
	emoji: typeof IconBrandGithub;
}

export const links: Link[] = [
	{
		emoji: IconBrandGithub,
		title: 'GitHub',
		url: 'https://github.com/jewlexx',
	},
	{
		emoji: IconBrandTwitch,
		title: 'Twitch',
		url: 'https://twitch.tv/possiblyjuliette',
	},
	{
		emoji: IconBrandTwitter,
		title: 'X (Twitter)',
		url: 'https://twitter.com/jewelexx',
	},
	{
		emoji: IconBrandLinktree,
		title: 'Linktree',
		url: 'https://linktr.ee/jewelexx',
	},
];
