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
  moduleNameMapper: {
    "^.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mock/fileMock.js"
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}