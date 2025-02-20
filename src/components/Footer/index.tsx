import styles from "./index.module.scss";

export default function Footer() {
  const today = new Date();

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <span>
          &copy; {today.getFullYear()} Juliette Cordor. All rights reserved.
        </span>
        <span>
          Emojis used from{" "}
          <a
            href="https://github.com/twitter/twemoji"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twemoji
          </a>{" "}
          under the{" "}
          <a
            href="https://opensource.org/license/mit"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT
          </a>{" "}
          license
        </span>
      </footer>
    </div>
  );
}
