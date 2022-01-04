const process = require('process');

/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: [ '<rootDir>' ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,ts}',
    '<rootDir>/src/**/*.test.{js,ts}',
  ],
  collectCoverageFrom: [ 
    '<rootDir>/src/**/*.{js,ts}', 
    '!<rootDir>/src/mocks/*.{ts}',
    '!<rootDir>/src/index.ts'
  ],
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
  resetMocks: true,
  rootDir: process.cwd()
}
