export function timeToMinutes(time: string): number {
	const [hours, minutes] = time.split(':');

	const parsedHours = parseInt(hours, 10) * 60;
	const parsedMinutes = parseInt(minutes, 10);

	return parsedHours + parsedMinutes;
}

export function minutesToTime(minutes: number): string {
	const parsedHours = minutes / 60;
	const roundedHours = Math.round(parsedHours);
	const roundedMinutes = Math.round((parsedHours - roundedHours) * 60);

	return `${roundedHours}:${roundedMinutes}`;
}
