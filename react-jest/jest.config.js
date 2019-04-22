module.exports = {
  verbose: true,
  // testMatch default
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  // testMatch: [
  //   '**/src/components/**/__tests__/**/*.js?(x)',
  //   '**/src/components/**/?(*.)(spec|test).js?(x)',
  // ],
  // testMatch: ['**/src/basic/Mock Functions/**/?(*.)(spec|test).js?(x)'],
  // testMatch: ['**/src/basic/axios/**/?(*.)(spec|test).js?(x)'],
  testMatch: ['**/src/components/counterWithHookAndLocalStorage/**/?(*.)(spec|test).js?(x)'],
  // testMatch: ['**/src/components/pages/**/?(*.)(spec|test).js?(x)'],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
