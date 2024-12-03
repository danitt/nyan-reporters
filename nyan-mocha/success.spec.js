const assert = require('assert');
const { tests } = require('./index');

describe('success', () => {
  tests.forEach(([ num, delay ]) => {
    it(`runs test number ${num}`, async () => {
      await delay();
      assert.strictEqual(!!num, true);
    });
  });
});
