const { describe, expect, it } = require("@jest/globals");
const { tests } = require("./index");

describe('success', () => {
  it.each(tests)('runs test number %s', async (num, delay) => {
    await delay();
    expect(num).toBeTruthy();
  });
});
