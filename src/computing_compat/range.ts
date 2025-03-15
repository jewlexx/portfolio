export const range = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

export function mapString<T>(arr: T[]): string[] {
  return arr.map((v) => String(v));
}
