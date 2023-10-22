import { defineCollection, z } from 'astro:content';

const GITHUB_USER = 'jewlexx';

const repoToUrl = (arg: string | undefined, ctx: z.RefinementCtx): string | undefined => {
	if (!arg) {
		return undefined;
	}

	if (arg.startsWith('https')) {
		return arg;
	}
	const repoPath = arg.split('/', 2);
	if (repoPath.length > 1) {
		const [user, repo] = repoPath;
		return `https://github.com/${user}/${repo}`;
	} else {
		const [repo] = repoPath;
		return `https://github.com/${GITHUB_USER}/${repo}`;
	}

}

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		repo: z.string().optional().transform(repoToUrl),
		homepage: z.string().optional(),
	}),
});

export const collections = { projects };
