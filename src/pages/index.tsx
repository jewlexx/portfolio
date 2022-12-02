import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import Head from 'next/head';
import { SiGithub, SiTwitter, SiLinktree } from 'react-icons/si';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';
import SpringyText from '../components/SpringyText';

interface Link {
  name: string;
  url: string;
  emoji: ReactNode;
}

const Home: NextPage = () => {
  const links: Link[] = [
    {
      emoji: <SiGithub />,
      name: 'Github',
      url: 'github.com/jewlexx',
    },
    {
      emoji: <SiTwitter />,
      name: 'Twitter',
      url: 'twitter.com/jewelexx',
    },
    {
      emoji: <SiLinktree />,
      name: 'Linktree',
      url: 'linktr.ee/jewelexx',
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          property="og:description"
          content="Juliette Cordor, developer and other things also"
        />
        <title>Juliette Cordor</title>
      </Head>

      <Nav />

      {/* Downloaded from https://www.svgrepo.com/ under the CC0 license as detailed here: https://www.svgrepo.com/page/licensing */}
      <svg x="0px" y="0px" viewBox="0 0 473.931 473.931" className={styles.sun}>
        <circle
          style={{ fill: '#F2BE3E' }}
          cx="236.966"
          cy="236.966"
          r="236.966"
        />
        <circle
          style={{ fill: '#F1EB75' }}
          cx="236.966"
          cy="236.966"
          r="117.154"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>

      <main>
        <header className={styles.hero}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>
              Juliette Cordor
              <small className={styles.subtitle}>
                <SpringyText className={styles.pronouns}>(She/Her)</SpringyText>
              </small>
            </h1>
            <div>
              {links.map(({ emoji, name, url }) => (
                <a
                  key={`${emoji}-${name}-${url}`}
                  href={`https://${url}`}
                  className={styles.role}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {emoji} {name}
                </a>
              ))}
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Home;
