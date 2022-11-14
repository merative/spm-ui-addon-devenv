/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

module.exports = {
  rootDir: '../',
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
