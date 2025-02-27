import FormattedDate from "$/components/FormattedDate";

interface Props {
  released?: boolean;
  pubDate: Date | undefined;
}

export default function PubDate({ pubDate, released }: Props) {
  if (!pubDate) {
    return null;
  }

  return (
    <small className="text-sm text-gray-800 italic">
      {released ? "Released" : "Published"} on <FormattedDate date={pubDate} />
    </small>
  );
}
