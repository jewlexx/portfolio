"use client";

import type { ComponentProps } from "react";
import Image, { type ImageLoader } from "next/image";

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function ContentfulImage(
  props: Omit<ComponentProps<typeof Image>, "loader">,
) {
  return <Image loader={contentfulLoader} {...props} />;
}
