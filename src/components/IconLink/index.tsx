import React, { useMemo } from "react";
import Link from "next/link";
import { Icon } from "@tabler/icons-react";

import styles from "./index.module.scss";

interface Props {
  title: string;
  url: string;
  icon: Icon;
  newTab?: boolean;
  disabled?: boolean;
  alt?: string;
  [key: string]: any;
}

export default function IconLink({
  title,
  url,
  icon: Icon,
  newTab = true,
  disabled = false,
  alt,
  ...rest
}: React.PropsWithRef<Props & React.HTMLAttributes<HTMLAnchorElement>>) {
  const adjustedUrl = useMemo(() => {
    // Local url
    if (url.startsWith("/")) {
      return url;
    }

    // External url
    if (!url.startsWith("http")) {
      return `https://${url}`;
    } else {
      return url;
    }
  }, [url]);

  return (
    <Link
      href={adjustedUrl}
      title={title}
      target={newTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${styles.link} ${disabled ? styles.disabled : ""}`}
      {...rest}
    >
      <Icon title={alt ?? title} />
    </Link>
  );
}
