import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'techui-and-pro-components-to-oceanbase-ui';
const tests = ['techui', 'pro-components'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
