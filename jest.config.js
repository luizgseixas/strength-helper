module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/factories/*.ts',
    '!<rootDir>/src/http/resolvers/*.ts',
    '!<rootDir>/src/http/typeDefs/*.ts',
    '!<rootDir>/src/http/server.ts',
    '!<rootDir>/src/infra/db/connection.ts',
    '!<rootDir>/src/infra/db/migrate.ts',
    '!<rootDir>/src/infra/db/schema/*.ts'
  ],
  moduleFileExtensions: ['js', 'ts', 'd.ts', 'json'],
  transform: {
    '^.+\\.ts$': '@swc/jest'
  },
  testMatch: ['**/*.(spec|test).ts'],
  bail: false
};
// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
