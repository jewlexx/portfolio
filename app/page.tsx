import Image from 'next/image';
import links from './links';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>
            Juliette Cordor
            <small className={styles.pronouns}> (She/Her) </small>
          </h1>
          <div>
            {links.map((link) => (
              <a
                key={link.name}
                href={`https://${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.role} ${true && styles.motion}`}
              >
                <link.emoji />
              </a>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}
