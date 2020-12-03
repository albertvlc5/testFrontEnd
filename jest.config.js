module.exports = {
  setupFiles: [
    './jest.setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  preset: 'react-native',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: 'tsconfig.test.json',
    },
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).js?(x)',
    '<rootDir>/__tests__/**/*.(test|spec).ts?(x)',
    '<rootDir>/src/**/*.(test|spec).js?(x)',
    '<rootDir>/src/**/*.(test|spec).ts?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/__mocks__',
    '<rootDir>/e2e',
  ],
  coveragePathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/__mocks__',
    '<rootDir>/e2e',
    '<rootDir>/App.tsx',
    '<rootDir>/module.tsx',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation|react-native-gesture-handler|rn-redux-middleware-flipper|mobile-styles|react-native-reanimated|react-native-redash|@creditas/mobile-core-api)',
  ],
  cacheDirectory: '.jest/cache',
  coverageThreshold: {
    global: {
      branches: 49,
      functions: 59,
      lines: 81,
      statements: 80,
    },
  },
};
