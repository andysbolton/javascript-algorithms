module.exports = {
  roots: ["<rootDir>/src"],
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,

  globals: {
    "ts-jest": {
      babelConfig: true
    }
  },

  // Indicates whether each individual test should be reported during the run.
  verbose: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files.
  coverageDirectory: "./coverage/",

  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],

  // The pattern Jest uses to detect test files.
  testRegex: "(/__tests__/.*|\\.test)\\.ts$",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  }
};
