import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Giscus from '@giscus/react';

import { getAllPostIds, readPostId, type PostMeta } from '../../lib/projects';
import styles from '../../styles/Project.module.scss';

interface RouteProps {
  project: string;
  contents: string;
  meta: PostMeta;
}

const Project: NextPage<RouteProps> = ({ project, contents, meta }) => {
  return (
    <>
      <Head>
        <title>{`About: ${meta.title}`}</title>
      </Head>

      <main className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
        <div className={styles.discussion}>
          <h3>Discuss below</h3>
          <Giscus
            repo={`jewlexx/${project}`}
            repoId=""
            category="General"
            // categoryId="DIC_kwDOF1L2fM4B-hVS"
            mapping="title"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
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
