import type { ComponentProps, Key } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss";

interface Props extends Omit<ComponentProps<typeof Image>, "src"> {
  src: ComponentProps<typeof Image>["src"] | undefined;
  enabled?: boolean;
  slug?: string;
}

export default function HorizontalHero({ enabled, slug, src, ...rest }: Props) {
  const isVisible = enabled && src !== undefined;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 0.99,
            x: -150,
            transition: { x: { type: "spring", bounce: 0, duration: 1 } },
          }}
          initial={{ opacity: 0, scale: 0.99, x: -150 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          //  waiting for framer motion update to fix this type error
          {...{ className: styles.container }}
        >
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={src} {...rest} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
