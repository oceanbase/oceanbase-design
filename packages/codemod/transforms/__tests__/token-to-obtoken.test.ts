import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'token-to-obtoken';

describe(testUnit, () => {
  defineTest(__dirname, testUnit, {}, `${testUnit}/basic`, { parser: 'babylon' });
  defineTest(__dirname, testUnit, {}, `${testUnit}/antd-theme`, { parser: 'babylon' });
});
