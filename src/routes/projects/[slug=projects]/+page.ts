import type { PageLoad } from './$types';
import type { Metadata } from '$lib/content/projects/types';

type MarkdownPage = typeof import('$lib/content/projects/sfsu.md');

export const load: PageLoad = async ({ params }) => {
	const markdownImport = await import(`../../../lib/content/projects/${params.slug}.md`);
	const data: { post: MarkdownPage['default']; metadata: Metadata } = {
		post: markdownImport.default,
		metadata: markdownImport.metadata
	};
	return data;
};
