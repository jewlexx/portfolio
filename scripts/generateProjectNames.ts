import { join } from 'node:path';
import fs from 'node:fs/promises';

const rootDir = process.cwd();

const projectsPath = join(rootDir, 'src/lib/content/projects');

const projectFiles = await fs
	.readdir(projectsPath)
	.then((files) =>
		files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''))
	);

async function writeDeclaration() {
	const types = projectFiles.map((file) => `"${file}"`).join(' | ');
	const typeDeclaration = `export type ProjectName = ${types};`;

	const file = Bun.file('src/lib/content/projects/gen.types.d.ts');

	await file.write(typeDeclaration);
}

async function writeProjectNames() {
	const names = projectFiles.map((file) => `"${file}"`).join(',\n');
	const typeDeclaration = `export const projectNames = [${names}];`;

	const file = Bun.file('src/lib/content/projects/gen.names.ts');

	await file.write(typeDeclaration);
}

await writeDeclaration();

await writeProjectNames();
