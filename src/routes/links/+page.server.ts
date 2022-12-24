import { getAverageColor } from 'fast-average-color-node';

import type { PageServerLoad } from './$types';

interface Link {
	name: string;
	url: URL;
	faviconUrl?: string;
}

interface ColouredLink extends Link {
	// Hex string
	colour: string;
}

export const load = (async () => {
	const linksNoFavicon: Link[] = [
		{
			name: 'Twitch',
			url: new URL('https://twitch.tv/sapphicjewl')
		}
	];

	// Get the favicon url from the link
	const links = linksNoFavicon.map((link) => {
		if (link.faviconUrl) {
			return link;
		} else {
			return {
				faviconUrl: link.url.protocol + link.url.hostname + '/favicon.ico',
				...link
			};
		}
	});

	const colouredLinks: ColouredLink[] = await Promise.all(
		links.map((link) => {
			return (async () => {
				const colour = await getAverageColor(link.url.toString());

				return {
					colour: colour.hex,
					...link
				};
			})();
		})
	);

	return {
		links: colouredLinks
	};
}) satisfies PageServerLoad;
