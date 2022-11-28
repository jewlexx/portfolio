import type { NextPage } from 'next';
import Head from 'next/head';
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
