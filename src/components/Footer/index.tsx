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
          &quot;Woman Technologist&quot; emoji from{" "}
          <a href="https://github.com/notofonts/noto-fonts">Noto Fonts</a> under
          the{" "}
          <a href="https://openfontlicense.org/documents/OFL.txt">
            SIL Open Font License 1.1
          </a>
        </span>
      </footer>
    </div>
  );
}
