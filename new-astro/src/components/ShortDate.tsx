import { parseISO, format } from "date-fns";

export default function ShortDate({
  date,
  formatString = "LLL d",
}: {
  date: string;
  formatString?: string;
}) {
  return <time dateTime={date}>{format(parseISO(date), formatString)}</time>;
}
