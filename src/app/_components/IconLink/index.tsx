import { Icon } from "@tabler/icons-react";
import { useMemo } from "react";

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
      className={disabled ? "disabled" : ""}
    >
      <Icon title={alt ?? title} />
    </a>
  );
}
