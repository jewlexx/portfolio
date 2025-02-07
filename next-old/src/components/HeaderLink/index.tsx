"use client";

import { AnchorHTMLAttributes, useMemo } from "react";
import { usePathname } from "next/navigation";

import { ProgressBarLink } from "$/components/ProgressBar";

import styles from "./index.module.scss";

export default function HeaderLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const isActive = useMemo(
    () => href === pathname || href === pathname.replace(/\/$/, ""),
    [href, pathname]
  );

  return (
    <ProgressBarLink
      href={href}
      className={`${props.className || ""} ${styles.link} ${
        isActive && styles.active
      }`}
      {...props}
    >
      {children}
    </ProgressBarLink>
  );
}
