import { AnyBrowserImages } from "$/assets/images/anybrowser";
import Image, { StaticImageData } from "next/image";

export default function AnimationDisplay({
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
