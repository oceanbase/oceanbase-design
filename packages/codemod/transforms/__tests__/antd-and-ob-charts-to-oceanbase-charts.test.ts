import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'antd-and-ob-charts-to-oceanbase-charts';
const tests = ['antd-charts', 'ob-charts'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
