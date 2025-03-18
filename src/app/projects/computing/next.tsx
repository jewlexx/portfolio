import Link from "next/link";
import { FaHome, FaArrowRight } from "react-icons/fa";

export default function GoNext({ chapter }: { chapter: number }) {
  let href;
  let text;
  let icon;

  if (chapter === 7) {
    href = `computing/${chapter}`;
    text = "Get Started";
    icon = <FaArrowRight />;
  } else if (chapter === 18) {
    href = "/projects/computing";
    text = "Home";
    icon = <FaHome />;
  } else {
    href = `/projects/computing/${chapter}`;
    text = "Next";
    icon = <FaArrowRight />;
  }

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
