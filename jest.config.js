module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
      "^.+\\.(css|scss)?$": "jest-transform-css"
  },
  setupFilesAfterEnv: ["<rootDir>/src/enzyme.js"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}