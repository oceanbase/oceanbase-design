import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'antd-to-oceanbase-design';
const tests = ['antd', 'bigfish-antd'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
