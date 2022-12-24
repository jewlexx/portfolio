import { convertUrl } from 'icopng';

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
				// Protocol doesn't include the "//" for some reason
				faviconUrl: link.url.protocol + '//' + link.url.hostname + '/favicon.ico',
				...link
			};
		}
	});

	console.log(links.map((x) => x.faviconUrl));

	const colouredLinks: ColouredLink[] = await Promise.all(
		links.map((link) => {
			return (async () => {
				const colour = convertUrl(link.url.toString());

				return {
					colour: colour.colourHex,
					...link
				};
			})();
		})
	);

	return {
		links: colouredLinks
	};
}) satisfies PageServerLoad;
