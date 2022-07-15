module.exports = {
  testMatch: ['**/*.test.(js|ts)'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/client/'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', , '<rootDir>/client/'],
  moduleFileExtensions: ['js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
