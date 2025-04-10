import { type HTMLAttributes, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@tabler/icons-react";

interface Props {
  title: string;
  prettyTitle?: string;
  url: string;
  icon: Icon;
  local?: boolean;
  disabled?: boolean;
  alt?: string;
  [key: string]: unknown;
}

export default function IconLink({
  title,
  url,
  icon: Icon,
  local = false,
  alt,
  className,
  ...rest
}: Props & HTMLAttributes<HTMLAnchorElement>) {
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

  const linkProps = { ...rest, color: undefined, prettyTitle: undefined };

  return (
    <Link
      role="button"
      href={adjustedUrl}
      title={title}
      target={local ? undefined : "_blank"}
      rel={local ? undefined : "noopener noreferrer"}
      className={`btn btn-circle lg:btn-lg m-1 [&>svg]:!text-white ${className}`}
      {...linkProps}
    >
      <Icon title={alt ?? title} />
    </Link>
  );
}
