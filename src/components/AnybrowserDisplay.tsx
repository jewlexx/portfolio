import { AnyBrowserImages } from "$/assets/images/anybrowser";
import Image from "next/image";

export default function AnybrowserDisplay({
  image,
}: {
  image: AnyBrowserImages;
}) {
  return (
    <Image
      src={image.data}
      alt={image.alt}
      title={image.title}
      className="motion-reduce:opacity-0"
      unoptimized
    />
  );
}
