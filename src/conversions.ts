export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":");

  const parsedHours = parseInt(hours, 10) * 60;
  const parsedMinutes = parseInt(minutes, 10);

  return parsedHours + parsedMinutes;
}

function padToString<T>(val: T, padding: string, length: number): string {
  const valString = JSON.stringify(val);

  if (valString.length >= length) {
    return valString;
  } else {
    const requiredPadding = length - valString.length;
    return `${padding.repeat(requiredPadding)}${val}`;
  }
}

export function minutesToTime(minutes: number): string {
  const parsedHours = minutes / 60;
  const roundedHours = Math.floor(parsedHours);
  const roundedMinutes = Math.round(minutes % 60);

  return `${padToString(roundedHours, "0", 2)}:${padToString(roundedMinutes, "0", 2)}`;
}
