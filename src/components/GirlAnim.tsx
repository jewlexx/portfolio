import Image from "next/image";

import girlAnimGif from "../assets/images/anybrowser/girlanim.gif";

export default function GirlAnim() {
  return (
    <Image
      src={girlAnimGif}
      alt="Best viewed by a girl"
      title="Courtesy of Samantha Alyssa"
      className="fixed bottom-0 left-0 motion-reduce:opacity-0"
      unoptimized
    />
  );
}
