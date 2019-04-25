const baseConfig = {
  setupFiles: ['<rootDir>/scripts/tests/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/scripts/tests/setupAfterEnv.js'],

  moduleFileExtensions: ['js', 'json'],
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/basic/**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/components/**/?(*.)+(spec|test).js?(x)'],
  testMatch: ['<rootDir>/src/vijayst/**/*.test.js'],
  // testMatch: [
  //   '**/src/components/**/__tests__/**/*.js?(x)',
  //   '**/src/components/**/?(*.)+(spec|test).js?(x)',
  // ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  timers: 'fake',
  verbose: true,
}

const coverageConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.js',
    '!src/components/**/__tests__/**/*.js',
    '!src/components/**/__stories__/**/*.js',
    '!src/components/**/*.test.js',
    '!src/components/**/*.story.js',
    '!src/components/app.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}

module.exports = Object.assign(
  {},
  baseConfig,
  process.env.JEST_ENV === 'coverage' ? coverageConfig : {},
)
