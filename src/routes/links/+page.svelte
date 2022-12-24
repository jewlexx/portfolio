<script lang="ts">
	interface Link {
		name: string;
		url: URL;
		faviconUrl?: string;
	}

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
</script>

<ul>
	{#each links as link}
		<li>
			<img src={link.faviconUrl} alt={link.name} /><a
				target="_blank"
				rel="noreferrer"
				href={link.url.toString()}>{link.name}</a
			>
		</li>
	{/each}
</ul>
