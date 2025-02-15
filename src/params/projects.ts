import type { ParamMatcher } from '@sveltejs/kit';
import type { ProjectName } from '../app';
import { projectNames } from '$lib/content/projects';

export const match = ((param: string): param is ProjectName => {
	return projectNames.includes(param);
}) satisfies ParamMatcher;
