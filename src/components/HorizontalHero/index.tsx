import type { ComponentProps } from "react";
import Image from "next/image";

import styles from "./index.module.scss";

export default function HorizontalHero(props: ComponentProps<typeof Image>) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </div>
  );
}
