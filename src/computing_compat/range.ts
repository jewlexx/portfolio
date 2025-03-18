export function range(end: number, start = 0): number[] {
  return Array.from({ length: end - start }, (_, i) => i + start);
}

export function mapString<T>(arr: T[]): string[] {
  return arr.map((v) => String(v));
}
