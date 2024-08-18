import type { ComponentProps, Key } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss";

interface Props extends Omit<ComponentProps<typeof Image>, "src" | "key"> {
  src: ComponentProps<typeof Image>["src"] | undefined;
  enabled?: boolean;
  key?: Key | null;
}

export default function HorizontalHero({ enabled, key, src, ...rest }: Props) {
  const isVisible = enabled && src !== undefined;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.container}
          key={key}
        >
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={src} {...rest} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
