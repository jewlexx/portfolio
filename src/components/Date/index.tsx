import { parseISO, format } from "date-fns";

export default function Date({
  date,
  formatString = "LLLL d, yyyy",
}: {
  date: string;
  formatString?: string;
}) {
  const parsedDate = parseISO(date);
  return <time dateTime={date}>{format(parsedDate, "LLLL d, yyyy")}</time>;
}
