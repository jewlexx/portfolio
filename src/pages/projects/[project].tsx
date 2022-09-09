import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPostIds, readPostId } from '../../lib/projects';

interface RouteProps {
  project: string;
  contents: string;
}

const Project: NextPage<RouteProps> = ({ project, contents }) => {
  return <></>;
};

export const getStaticProps: GetStaticProps<RouteProps> = async (query) => {
  const projectId = query.params?.project as string;
  const postContents = await readPostId(projectId);

  return {
    props: {
      // Trust me :)
      project: projectId,
      contents: postContents,
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
