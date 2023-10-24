import ogs from 'open-graph-scraper';
import { getCollection } from 'astro:content';

export async function getProjects() {
	const projects = await getCollection('projects');

	const withOgIcons = projects.map(async (project) => {
		const data = project.data;
		if (data.repo) {
			const result = await ogs({
				url: data.repo
			});
			if (result.error) {
				console.error('Error fetching og data', project.slug, project.data.repo);
				return project;
			}

			data.heroImage = result.result.ogImage?.[0].url;
		}

		project.data = data;
		return project;
	});

	return Promise.all(withOgIcons);
}
