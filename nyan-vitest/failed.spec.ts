import { describe, expect, it } from "vitest";
import { tests } from "./index.ts";

describe("failed", () => {
  it.each(tests)("runs test number %s", async (num, delay) => {
    await delay();
    expect(!!num).toBe(num % 2 ? num : 0);
  });
});
