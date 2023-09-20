import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'antd-charts-to-oceanbase-charts';
const tests = ['antd-charts'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'tsx' })
  );
});
