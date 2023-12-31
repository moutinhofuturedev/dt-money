module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/*.stories.tsx',
    '!**/*.d.ts',
    '!**/styles.ts',
    '!**/context/**',
    '!src/App.tsx',
    '!src/main.tsx',
    '!**/node_modules/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}

// Configuração do Jest e React Testing Library com React.js ( versão com Babel )
// instalação abaixo:
// npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
