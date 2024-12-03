const delay = (ms = 50) => new Promise((res) => setTimeout(res, ms));

const tests = Array.from(
  { length: 100 },
  (_, i) => [i + 1, delay]
);

module.exports = { tests, delay };