import fs from 'fs';
import path from 'path';
import { transform, camelToKebab, SASS_TOKENS } from '../sass-to-cssvar';

const testUnit = 'sass-to-cssvar';

// Tests with default prefix 'ant'
const defaultPrefixTests = ['basic', 'no-transform'];

// Tests with custom prefix
const customPrefixTests = ['custom-prefix'];

describe(testUnit, () => {
  describe('with default prefix (ant)', () => {
    defaultPrefixTests.forEach(test => {
      it(test, async () => {
        const { content: result } = await transform(
          path.join(__dirname, `../__testfixtures__/sass-to-cssvar/${test}.input.scss`),
          { prefix: 'ant' }
        );
        const output = fs.readFileSync(
          path.join(__dirname, `../__testfixtures__/sass-to-cssvar/${test}.output.scss`),
          'utf-8'
        );
        expect(result).toEqual(output);
      });
    });
  });

  describe('with custom prefix (ob)', () => {
    customPrefixTests.forEach(test => {
      it(test, async () => {
        const { content: result } = await transform(
          path.join(__dirname, `../__testfixtures__/sass-to-cssvar/${test}.input.scss`),
          { prefix: 'ob' }
        );
        const output = fs.readFileSync(
          path.join(__dirname, `../__testfixtures__/sass-to-cssvar/${test}.output.scss`),
          'utf-8'
        );
        expect(result).toEqual(output);
      });
    });
  });

  describe('camelToKebab', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(camelToKebab('colorPrimary')).toBe('color-primary');
      expect(camelToKebab('colorBgContainer')).toBe('color-bg-container');
      expect(camelToKebab('fontSizeLG')).toBe('font-size-lg');
    });
  });

  describe('SASS_TOKENS', () => {
    it('should contain common tokens', () => {
      expect(SASS_TOKENS).toContain('colorPrimary');
      expect(SASS_TOKENS).toContain('fontSize');
      expect(SASS_TOKENS).toContain('borderRadius');
    });

    it('should be loaded from @oceanbase/design theme', () => {
      // SASS_TOKENS should be an array with significant length
      expect(Array.isArray(SASS_TOKENS)).toBe(true);
      expect(SASS_TOKENS.length).toBeGreaterThan(50);
    });
  });
});
