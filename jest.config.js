// jest.config.js  ➜ keep it EXACTLY like this

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage"
};
