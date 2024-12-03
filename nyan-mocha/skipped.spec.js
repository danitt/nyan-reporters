const assert = require('assert');
const { tests } = require('./index');

describe("skipped", () => {
  tests.forEach(([num, delay]) => {
    it(`runs test number ${num}`, async () => {
      await delay(10);
      assert.strictEqual(!!num, true);
    });
  });

  it.skip("skips this test", async () => {
    assert.strictEqual(true, false);
  });

  describe.skip("skips this suite", () => {
    it("should not run", () => {
      assert.strictEqual(true, false);
    });
  });
});
