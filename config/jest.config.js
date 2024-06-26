/*
 * Copyright Merative US L.P. 2020
 */

module.exports = {
  rootDir: '../',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.js',
    '!<rootDir>/packages/**/src/apollo-client-hooks/**/*.js',
    '!<rootDir>/packages/**/index.js',
    '!<rootDir>/packages/**/*stories.js',
    '!<rootDir>/packages/**/*Exports.js'
  ],
  transform: {
    '^.+\\.js|jsx$': 'babel-jest',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/carbon-addons-devenv/package.json',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest-setup.js',
  ],
  coverageThreshold: {
    packages: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
