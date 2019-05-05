module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/test/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/test-setup.js'],

  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  // moduleNameMapper: {
  //   '^react-i18next$': '<rootDir>/test/mocks/react-i18next.js',
  // },

  testMatch: ['<rootDir>/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
