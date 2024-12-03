module.exports = {
  moduleFileExtensions: ['js'],
  coverageReporters: ['json-summary', 'lcov'],
  testEnvironment: 'node',
  reporters: [
    [
      "jest-nyancat-reporter",
      {
        suppressErrorReporter: false
      },
    ],
  ],
};