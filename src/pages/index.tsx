import type { NextPage } from 'next';
import Head from 'next/head';
import { motion, useScroll } from 'framer-motion';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';

interface Link {
  name: string;
  url: string;
  emoji: string;
}

const Home: NextPage = () => {
  const links: Link[] = [
    {
      emoji: '👩‍💻',
      name: 'Github',
      url: 'github.com/jewlexx',
    },
    {
      emoji: '🕊️',
      name: 'Twitter',
      url: 'twitter.com/jewelexx',
    },
    {
      emoji: '🌲',
      name: 'Linktree',
      url: 'linktr.ee/jewelexx',
    },
  ];

  const { scrollYProgress } = useScroll();

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
      <motion.svg
        x="0px"
        y="0px"
        viewBox="0 0 473.931 473.931"
        className={styles.sun}
        style={{ scaleX: scrollYProgress }}
      >
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
      </motion.svg>

      <main>
        <header className={styles.hero}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>
              Juliette Cordor
              <small className={styles.subtitle}>
                <span className={styles.pronouns}>(She/Her)</span>
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
