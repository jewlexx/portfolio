import { useMemo } from "react";

import { Icon } from "@tabler/icons-react";

import styles from "./index.module.scss";

interface Props {
  title: string;
  url: string;
  icon: Icon;
  disabled?: boolean;
  alt?: string;
}

export default function IconLink({
  title,
  url,
  icon: Icon,
  disabled = false,
  alt,
}: Props) {
  const adjustedUrl = useMemo(() => {
    if (!url.startsWith("http")) {
      return `https://${url}`;
    } else {
      return url;
    }
  }, [url]);

  return (
    <a
      href={adjustedUrl}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${disabled ? styles.disabled : ""}`}
    >
      <Icon title={alt ?? title} />
    </a>
  );
}
