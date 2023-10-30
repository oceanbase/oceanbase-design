import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'style-to-token';
const tests = [
  'function-component',
  'class-component',
  'static',
  'multiple-block-statement',
  'existed-useToken',
];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
