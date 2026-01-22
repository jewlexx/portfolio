interface Props {
  enabled?: boolean;
  href?: string;
  // new_tab: boolean;
  src?: string;
  alt?: string;
  class?: string;
}

export default function Shield({
  enabled = true,
  href,
  src,
  alt,
  class: className,
}: Props) {
  if (!enabled) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`mr-2 inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </a>
  );
}
