import fs from 'fs';
import path from 'path';
import { transform, convertLessCommentsToCss, camelToKebab, LESS_TOKENS } from '../less-to-cssvar';

const testUnit = 'less-to-cssvar';

// Tests with default prefix 'ant'
const defaultPrefixTests = [
  'basic',
  'status-colors',
  'complex-values',
  'obui-import',
  'no-transform',
  'nested-selectors',
  'css-modules-global',
  'control-tokens',
  'color-scales',
  'mixed-values',
  'multiple-imports',
  'fill-tokens',
];

// Tests with custom prefix
const customPrefixTests = ['custom-prefix'];

describe(testUnit, () => {
  describe('with default prefix (ant)', () => {
    defaultPrefixTests.forEach(test => {
      it(test, async () => {
        const { content: result } = await transform(
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.input.less`),
          { prefix: 'ant' }
        );
        const output = fs.readFileSync(
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.output.less`),
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
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.input.less`),
          { prefix: 'ob' }
        );
        const output = fs.readFileSync(
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.output.less`),
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
      expect(camelToKebab('borderRadiusSM')).toBe('border-radius-sm');
      expect(camelToKebab('controlItemBgHover')).toBe('control-item-bg-hover');
    });

    it('should handle consecutive uppercase letters', () => {
      expect(camelToKebab('colorBgTextHover')).toBe('color-bg-text-hover');
      expect(camelToKebab('marginXXL')).toBe('margin-xxl');
    });
  });

  describe('convertLessCommentsToCss', () => {
    it('should convert single-line Less comments to CSS comments', () => {
      const input = '// This is a comment\n.class { color: red; }';
      const output = '/*  This is a comment */\n.class { color: red; }';
      expect(convertLessCommentsToCss(input)).toBe(output);
    });

    it('should convert inline Less comments', () => {
      const input = '.class { color: red; // inline comment\n}';
      const output = '.class { color: red; /*  inline comment */\n}';
      expect(convertLessCommentsToCss(input)).toBe(output);
    });

    it('should not convert URLs with //', () => {
      const input = 'background: url(https://example.com/image.png);';
      expect(convertLessCommentsToCss(input)).toBe(input);
    });

    it('should handle multiple comments', () => {
      const input = '// Comment 1\n.a { }\n// Comment 2\n.b { }';
      const output = '/*  Comment 1 */\n.a { }\n/*  Comment 2 */\n.b { }';
      expect(convertLessCommentsToCss(input)).toBe(output);
    });
  });

  describe('LESS_TOKENS', () => {
    it('should contain common tokens', () => {
      expect(LESS_TOKENS).toContain('colorPrimary');
      expect(LESS_TOKENS).toContain('fontSize');
      expect(LESS_TOKENS).toContain('borderRadius');
      expect(LESS_TOKENS).toContain('padding');
    });

    it('should contain control tokens', () => {
      expect(LESS_TOKENS).toContain('controlHeight');
      expect(LESS_TOKENS).toContain('controlItemBgHover');
    });

    it('should contain color scale tokens', () => {
      expect(LESS_TOKENS).toContain('gray1');
      expect(LESS_TOKENS).toContain('blue4');
      expect(LESS_TOKENS).toContain('green4');
    });

    it('should be loaded from @oceanbase/design theme', () => {
      // LESS_TOKENS should be an array with significant length
      expect(Array.isArray(LESS_TOKENS)).toBe(true);
      expect(LESS_TOKENS.length).toBeGreaterThan(50);
    });
  });
});
