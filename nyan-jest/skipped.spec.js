const { describe, expect, it } = require("@jest/globals");
const { tests } = require("./index");

describe("skipped", () => {
  it.each(tests)("runs test number %s", async (num, delay) => {
    await delay(10);
    expect(num).toBeTruthy();
  });

  it.skip("skips this test", async () => {
    expect(true).toBeFalsy();
  });

  describe.skip("skips this suite", () => {
    it("should not run", () => {
      expect(true).toBeFalsy();
    });
  });
});
