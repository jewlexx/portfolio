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
        </div>
      </header>
    </main>
  );
}
