import { defineTest } from 'jscodeshift/src/testUtils';

const testUnit = 'style-to-token';
const tests = [
  'function-component',
  'anonymous-function',
  'function',
  'single-function',
  'hooks',
  'class-component',
  'block-statement',
  'nested-block-statement',
  'existed-useToken',
  'top-identifier',
  'nested-object',
  'case-insensitive',
  'antd-style',
  'template-string',
];

describe(testUnit, () => {
  tests.forEach(test =>
    defineTest(__dirname, testUnit, {}, `${testUnit}/${test}`, { parser: 'babylon' })
  );
});
