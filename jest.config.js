/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/test/(.*)$': '<rootDir>/src/test/$1',
    '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
  },
};
