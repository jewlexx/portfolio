import FormattedDate from "$/components/FormattedDate";

import styles from "./index.module.scss";

interface Props {
  released?: boolean;
  pubDate: Date | undefined;
}

export default function PubDate({ pubDate, released }: Props) {
  if (!pubDate) {
    return null;
  }

  return (
    <p className={styles.pubDate}>
      <i>
        {released ? "Released" : "Published"} on{" "}
        <FormattedDate date={pubDate} />
      </i>
    </p>
  );
}
