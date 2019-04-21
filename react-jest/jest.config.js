module.exports = {
  // testMatch default
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  testMatch: [
    '**/src/components/**/__tests__/**/*.js?(x)',
    '**/src/components/**/?(*.)(spec|test).js?(x)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
