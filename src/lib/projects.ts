import * as fs from 'fs/promises';
import * as path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import axios from 'axios';

export interface PostMeta {
  upstream: string;
  title: string;
  content?: string;
}

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
  const fileContents = await fs.readFile(
    path.join(process.cwd(), 'src/projects', `${id}.md`),
    'utf8',
  );

  const matterResult = matter(fileContents);

  const contents = matterResult.data.content
    ? ((await axios.get(matterResult.data.content)).data as string)
    : matterResult.content;

  const htmlContents = await remark()
    .use(html)
    .process(contents)
    .then((x) => x.toString());

  return {
    project: id,
    contents: htmlContents,
    meta: matterResult.data as PostMeta,
  };
};
