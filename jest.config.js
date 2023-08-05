module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  moduleNameMapper: {
    '^react$': require.resolve('react'),
    '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
  },
};
