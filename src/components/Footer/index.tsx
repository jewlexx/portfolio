import styles from "./index.module.scss";

export default function Footer() {
  const today = new Date();

  return (
    <footer className={styles.footer}>
      &copy; {today.getFullYear()} Juliette Cordor. All rights reserved.
    </footer>
  );
}
