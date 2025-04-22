import { FaHome, FaArrowRight } from "react-icons/fa";
import { match } from "ts-pattern";

import { ProgressBarLink } from "$/components/ProgressBar";

export default function GoNext({ chapter }: { chapter: number }) {
  const { href, text, icon } = match(chapter)
    .with(7, () => ({
      href: `computing/${chapter}`,
      text: "Get Started",
      icon: <FaArrowRight />,
    }))
    .with(18, () => ({
      href: "/projects/computing",
      text: "Home",
      icon: <FaHome />,
    }))
    .otherwise(() => ({
      href: `/projects/computing/${chapter}`,
      text: "Next",
      icon: <FaArrowRight />,
    }));

  return (
    <ProgressBarLink
      href={href}
      className="btn btn-accent btn-circle fixed right-4 bottom-4 [&_svg]:size-[1.2em]!"
      title={text}
    >
      {icon}
    </ProgressBarLink>
  );
}
