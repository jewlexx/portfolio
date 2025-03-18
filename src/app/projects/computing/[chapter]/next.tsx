import Link from "next/link";
import { FaHome, FaArrowRight } from "react-icons/fa";

export default function GoNext({
  chapter,
  home = false,
}: {
  chapter: number;
  home?: boolean;
}) {
  const href = home ? "/" : `${chapter + 1}`;
  const text = home ? "Go Home" : "Next Chapter";
  const icon = home ? <FaHome /> : <FaArrowRight />;

  return (
    <Link
      href={href}
      className="btn btn-accent btn-circle fixed right-4 bottom-4 [&_svg]:size-[1.2em]!"
      title={text}
    >
      {icon}
    </Link>
  );
}
