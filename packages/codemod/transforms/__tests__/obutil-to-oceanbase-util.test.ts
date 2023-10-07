import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'obutil-to-oceanbase-util';
const tests = ['obutil', 'getTableData'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
