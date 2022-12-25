import {
	type IconDefinition,
	faGithub,
	faTwitch,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';

export interface Link {
	name: string;
	url: string;
	emoji: IconDefinition;
}

export const links: Link[] = [
	{
		emoji: faGithub,
		name: 'Github',
		url: 'https://github.com/jewlexx'
	},
	{
		emoji: faTwitch,
		name: 'Twitch',
		url: 'https://twitch.tv/sapphicjewl'
	},
	{
		emoji: faTwitter,
		name: 'Twitter',
		url: 'https://twitter.com/jewelexx'
	},
	{
		emoji: faTree,
		name: 'Linktree',
		url: 'https://linktr.ee/jewelexx'
	}
];
