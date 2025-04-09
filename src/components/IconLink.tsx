import React, { useMemo } from "react";
import Link from "next/link";
import { Icon } from "@tabler/icons-react";

interface Props {
  title: string;
  prettyTitle?: string;
  url: string;
  icon: Icon;
  newTab?: boolean;
  disabled?: boolean;
  alt?: string;
  [key: string]: unknown;
}

export default function IconLink({
  title,
  url,
  icon: Icon,
  newTab = true,
  alt,
  className,
  ...rest
}: Props & React.HTMLAttributes<HTMLAnchorElement>) {
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

  const linkProps = { ...rest, color: undefined };

  return (
    <Link
      role="button"
      href={adjustedUrl}
      title={title}
      target={newTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`btn btn-circle lg:btn-lg m-1 [&>svg]:!text-white ${className}`}
      {...linkProps}
    >
      <Icon title={alt ?? title} />
    </Link>
  );
}
