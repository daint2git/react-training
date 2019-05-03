module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/test/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/test-setup.js'],

  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],

  testMatch: ['<rootDir>/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
