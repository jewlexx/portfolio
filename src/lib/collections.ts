import ogs from 'open-graph-scraper';
import { getCollection } from 'astro:content';

export async function getProjects() {
	const projects = await getCollection('projects');

	projects.map(async (project) => {
		const data = project.data;
		if (data.repo) {
			const result = await ogs({
				url: data.repo
			});
			if (result.error) {
				console.error('Error fetching og data');
				return project;
			}

			// TODO: Get og info
			data.heroImage = result.result.ogImage?.[0].url;
		}

		console.error('Could not get og data');

		return {
			...project,
			data
		};
	});

	return Promise.all(projects);
}
