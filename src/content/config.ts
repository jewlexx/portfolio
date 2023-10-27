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
};

const httpOnly: [(arg: string | undefined) => boolean, message: string] = [
	(arg) => {
		if (!arg) {
			return true;
		} else if (!arg.startsWith('https')) {
			return false;
		} else {
			return true;
		}
	},
	'HTTP is not secure, and thus not supported',
];

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		featured: z.boolean().optional(),
		toy: z.boolean().optional(),
		hideHero: z.boolean().optional(),
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		repo: z
			.string()
			.optional()
			.transform(repoToUrl)
			.refine(...httpOnly),
		homepage: z
			.string()
			.optional()
			.refine(...httpOnly),
		shields: z
			.array(
				z.object({
					alt: z.string(),
					src: z.string().refine(...httpOnly),
					href: z
						.string()
						.optional()
						.refine(...httpOnly),
				}),
			)
			.optional(),
	}),
});

export const collections = { projects };
