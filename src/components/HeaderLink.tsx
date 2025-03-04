"use client";

import { AnchorHTMLAttributes, useMemo } from "react";
import { usePathname } from "next/navigation";

import { ProgressBarLink } from "$/components/ProgressBar";

export default function HeaderLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const isActive = useMemo(
    () => href === pathname || href === pathname.replace(/\/$/, ""),
    [href, pathname],
  );

  return (
    <ProgressBarLink
      href={href}
      className={`${props.className || ""} inline-block p-2 decoration-0 active:font-bold active:decoration-1 portrait:text-[3vw]`}
      {...props}
    >
      {children}
    </ProgressBarLink>
  );
}
