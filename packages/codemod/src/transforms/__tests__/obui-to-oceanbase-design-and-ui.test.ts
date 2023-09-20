import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'obui-to-oceanbase-design-and-ui';
const tests = ['obui'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'tsx' })
  );
});
