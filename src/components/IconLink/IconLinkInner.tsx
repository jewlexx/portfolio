import type { Icon } from "@tabler/icons-react";

export default function IconLinkInner({
  icon: Icon,
  alt,
  title,
  adjustedUrl,
  className,
  linkProps,
  local,
}: {
  icon: Icon;
  alt: string | undefined;
  title: string;
  adjustedUrl: string;
  className?: string;
  linkProps: Record<string, unknown>;
  local: boolean;
}) {
  return (
    <a
      role="button"
      href={adjustedUrl}
      target={local ? undefined : "_blank"}
      rel={local ? undefined : "noopener noreferrer"}
      className={`btn not-lg:btn-circle! btn-rounded lg:btn-lg m-1 lg:flex lg:justify-between ${className}`}
      {...linkProps}
    >
      <Icon title={alt ?? title} />
      <p className="not-lg:hidden">{title}</p>
    </a>
  );
}
