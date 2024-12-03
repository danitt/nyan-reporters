export const delay = (ms: number = 50) => new Promise((res) => setTimeout(res, ms));

export const tests: [number, (ms?: number) => Promise<unknown>][] = Array.from(
  { length: 100 },
  (_, i) => [i + 1, delay]
);
