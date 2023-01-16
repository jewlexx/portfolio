import brandGithub from './images/icons/icons/brand-github.svg';
import brandTwitch from '$icons/brand-twitch.svg';
import brandTwitter from '$icons/brand-twitter.svg';
import brandLinktree from '$icons/brand-linktree.svg';

export interface Link {
	name: string;
	url: string;
	emoji: string;
}

export const links: Link[] = [
	{
		emoji: brandGithub,
		name: 'Github',
		url: 'https://github.com/jewlexx'
	},
	{
		emoji: brandTwitch,
		name: 'Twitch',
		url: 'https://twitch.tv/sapphicjewl'
	},
	{
		emoji: brandTwitter,
		name: 'Twitter',
		url: 'https://twitter.com/jewelexx'
	},
	{
		emoji: brandLinktree,
		name: 'Linktree',
		url: 'https://linktr.ee/jewelexx'
	}
];
