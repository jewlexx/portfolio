import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPostIds, readPostId, type PostMeta } from '../../lib/projects';

interface RouteProps {
  project: string;
  contents: string;
  meta: PostMeta;
}

const Project: NextPage<RouteProps> = ({ project, contents, meta }) => {
  return <></>;
};

export const getStaticProps: GetStaticProps<RouteProps> = async (query) => {
  const projectId = query.params?.project as string;
  const postContents = await readPostId(projectId);

  return {
    props: {
      // Trust me :)
      ...postContents,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export default Project;
