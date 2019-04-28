let config
const baseConfig = {
  verbose: true,
  timers: 'fake',
  setupFiles: ['raf/polyfill', '<rootDir>/scripts/test/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/scripts/test/test-setup.js'],

  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/test/mocks/fileMock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/.storybook/'],

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/?(*.)+(spec|test).js',
  ],
  // testMatch: ['<rootDir>/src/vijayst/FormAndList/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
}

if (process.env.JEST_ENV === 'coverage') {
  const coverageConfig = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.js',
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

  config = Object.assign({}, baseConfig, coverageConfig)
} else {
  config = baseConfig
}

module.exports = config
