import fs from 'fs';
import path from 'path';
import { transform } from '../less-to-token';

const testUnit = 'less-to-token';
const tests = [
  'antd-v4-less-to-token',
  'obui-less-to-token',
  'case-insensitive',
  'mixin',
  'obui-less-token-to-token',
];

describe(testUnit, () => {
  tests.forEach(test => {
    it(test, async () => {
      const result = await transform(
        path.join(__dirname, `../__testfixtures__/less-to-token/${test}.input.less`)
      );
      const output = fs.readFileSync(
        path.join(__dirname, `../__testfixtures__/less-to-token/${test}.output.less`),
        'utf-8'
      );
      expect(result).toEqual(output);
    });
  });
});
