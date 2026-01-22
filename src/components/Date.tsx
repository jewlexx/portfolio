import { parseISO, format } from "date-fns";

export default function Date({
  date,
  formatString = "LLLL d, yyyy",
}: {
  date: string;
  formatString?: string;
}) {
  return <time dateTime={date}>{format(parseISO(date), formatString)}</time>;
}
