import FormattedDate from "$/components/FormattedDate";

import styles from "./index.module.scss";

interface Props {
  released?: boolean;
  pubDate: Date | undefined;
}

export default function PubDate({ pubDate, released }: Props) {
  if (!pubDate) {
    return null;
  }

  return (
    <small className="italic text-gray-800 text-sm">
      {released ? "Released" : "Published"} on <FormattedDate date={pubDate} />
    </small>
  );
}
