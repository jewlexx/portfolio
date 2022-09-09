import * as fs from 'fs/promises';
import * as path from 'path';

export const getAllPostIds = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/projects');
  const fileNames = await fs.readdir(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        project: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const readPostId = async (id: string) => {
  return fs.readFile(
    path.join(process.cwd(), 'src/projects', `${id}.md`),
    'utf8',
  );
};
