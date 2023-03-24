import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const darkMode = cookies.get('darkMode');

	if (!darkMode) {
		cookies.set('darkMode', 'light', { path: '/' });
	}

	return { darkMode: darkMode === 'true' };
}) satisfies PageServerLoad;
