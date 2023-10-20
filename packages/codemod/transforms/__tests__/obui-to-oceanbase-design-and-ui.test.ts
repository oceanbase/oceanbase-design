import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'obui-to-oceanbase-design-and-ui';
const tests = ['obui', 'locale'];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
