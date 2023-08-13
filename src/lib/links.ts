/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	IconBrandGithub,
	IconBrandTwitch,
	IconBrandTwitter,
	IconBrandLinktree
} from '@tabler/icons-svelte';

export interface Link {
	name: string;
	url: string;
	emoji: typeof IconBrandGithub;
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
		url: 'https://twitch.tv/possiblyjuliette'
	},
	{
		emoji: IconBrandTwitter,
		name: 'Twitter',
		url: 'https://twitter.com/jewelexx'
	},
	{
		emoji: IconBrandLinktree,
		name: 'Linktree',
		url: 'https://linktr.ee/jewelexx'
	}
];
