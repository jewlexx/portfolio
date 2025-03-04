import type { AnchorHTMLAttributes } from "react";

import { ProgressBarLink } from "$/components/ProgressBar";

export default function HeaderLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <ProgressBarLink
      href={href}
      className={
        props.className ||
        "inline-block p-2 decoration-0 active:font-bold active:decoration-1 portrait:text-[3vw]"
      }
      {...props}
    >
      {children}
    </ProgressBarLink>
  );
}
