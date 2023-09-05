const { readdirSync } = require('fs');
const { join } = require('path');

const pkgList = readdirSync(join(__dirname, './packages')).filter(
  (pkg: string) => pkg.charAt(0) !== '.'
);

const moduleNameMapper = {
  '^react$': require.resolve('react'),
  // ref: https://jestjs.io/docs/webpack#handling-static-assets
  '\\.(ttf|woff|woff2)$': '<rootDir>/tests/__mocks__/fileMock.ts',
  // ref: https://jestjs.io/docs/webpack#mocking-css-modules
  '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),
};

pkgList.forEach((shortName: string) => {
  const name = `@oceanbase/${shortName}`;
  moduleNameMapper[name] = join(__dirname, `./packages/${shortName}/src`);
});

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  moduleNameMapper,
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
};
