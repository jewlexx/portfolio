import BrandGithub from '@tabler/icons/brand-github.svg';
import BrandTwitch from '@tabler/icons/brand-twitch.svg';
import BrandTwitter from '@tabler/icons/brand-twitter.svg';
import BrandLinktree from '@tabler/icons/brand-linktree.svg';

export interface Link {
	title: string;
	url: string;
	icon: ImageMetadata;
}

export const links: Link[] = [
	{
		icon: BrandGithub,
		title: 'GitHub',
		url: 'https://github.com/jewlexx',
	},
	{
		icon: BrandTwitch,
		title: 'Twitch',
		url: 'https://twitch.tv/possiblyjuliette',
	},
	{
		icon: BrandTwitter,
		title: 'X (Twitter)',
		url: 'https://twitter.com/jewelexx',
	},
	{
		icon: BrandLinktree,
		title: 'Linktree',
		url: 'https://linktr.ee/jewelexx',
	},
];
