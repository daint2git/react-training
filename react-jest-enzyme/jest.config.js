const baseConfig = {
  verbose: true,
  timers: 'fake',
  setupFiles: ['<rootDir>/scripts/test/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/scripts/test/test-setup.js'],

  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/test/mocks/fileMock.js',
  },
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/basic/**/?(*.)+(spec|test).js?(x)'],
  // testMatch: ['**/src/components/**/?(*.)+(spec|test).js?(x)'],
  testMatch: ['<rootDir>/src/components/CssModulesAndFileMockExample/**/*.test.js'],
  // testMatch: [
  //   '**/src/components/**/__tests__/**/*.js?(x)',
  //   '**/src/components/**/?(*.)+(spec|test).js?(x)',
  // ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
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
