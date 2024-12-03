const { describe, expect, it } = require("@jest/globals");
const { tests } = require("./index");

describe("failed", () => {
  it.each(tests)("runs test number %s", async (num, delay) => {
    await delay();
    expect(!!num).toBe(!!(num % 2));
  });
});
