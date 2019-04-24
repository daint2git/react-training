const baseConfig = {
  setupFiles: ['<rootDir>/scripts/tests/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/scripts/tests/setupAfterEnv.js'],

  moduleFileExtensions: ['js', 'json'],
  modulePathIgnorePatterns: [],
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/basic/**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/components/**/?(*.)+(spec|test).js?(x)'],
  testMatch: ['<rootDir>/src/components/counter-list/*.test.js'],
  // testMatch: [
  //   '**/src/components/**/__tests__/**/*.js?(x)',
  //   '**/src/components/**/?(*.)+(spec|test).js?(x)',
  // ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  timers: 'fake',
  verbose: true,
}

const coverageConfig = {
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
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
}

module.exports = Object.assign(
  {},
  baseConfig,
  process.env.JEST_ENV === 'coverage' ? coverageConfig : {},
)
