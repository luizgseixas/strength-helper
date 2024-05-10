module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  moduleFileExtensions: ['js', 'ts', 'd.ts', 'json'],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  testMatch: ['**/*.(spec|test).ts'],
  bail: false,
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
};
// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
