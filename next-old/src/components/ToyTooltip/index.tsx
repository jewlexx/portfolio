import styles from "./index.module.scss";

export default function ToyTooltip() {
  return (
    <span className={styles.toy}>
      🤏<span className={styles.tooltip}>Toy Project</span>
    </span>
  );
}
