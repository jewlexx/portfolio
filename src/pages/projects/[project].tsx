import type { GetStaticPaths } from 'next';
import * as fs from 'fs/promises';
import * as path from 'path';

export async function getAllPostIds() {
  const postsDirectory = path.join(process.cwd(), 'src/projects');
  const fileNames = await fs.readdir(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export const getStaticPaths: GetStaticPaths = async (q) => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
