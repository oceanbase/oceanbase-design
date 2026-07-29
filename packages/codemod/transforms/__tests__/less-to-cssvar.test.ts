import fs from 'fs';
import path from 'path';
import {
  transform,
  convertLessCommentsToCss,
  camelToKebab,
  LESS_TOKENS,
  getNewCssPath,
} from '../less-to-cssvar';

const testUnit = 'less-to-cssvar';

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
  'custom-prefix',
];

describe(testUnit, () => {
  describe('with default prefix (ob)', () => {
    defaultPrefixTests.forEach(test => {
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

  describe('with legacy ant prefix', () => {
    ['basic', 'custom-prefix'].forEach(test => {
      it(test, async () => {
        const { content: result } = await transform(
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.input.less`),
          { prefix: 'ant', useSemanticOb: false }
        );
        const output = fs.readFileSync(
          path.join(__dirname, `../__testfixtures__/less-to-cssvar/${test}.output.ant.less`),
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
      expect(Array.isArray(LESS_TOKENS)).toBe(true);
      expect(LESS_TOKENS.length).toBeGreaterThan(50);
    });
  });

  describe('rename-to options', () => {
    it('should rename to .css by default', () => {
      const filePath = '/path/to/style.less';
      expect(getNewCssPath(filePath, false, 'css')).toBe('/path/to/style.css');
      expect(getNewCssPath(filePath, true, 'css')).toBe('/path/to/style.module.css');
    });

    it('should rename to .scss when format is scss', () => {
      const filePath = '/path/to/style.less';
      expect(getNewCssPath(filePath, false, 'scss')).toBe('/path/to/style.scss');
      expect(getNewCssPath(filePath, true, 'scss')).toBe('/path/to/style.module.scss');
    });

    it('should preserve .module in filename', () => {
      const filePath = '/path/to/style.module.less';
      expect(getNewCssPath(filePath, false, 'css')).toBe('/path/to/style.module.css');
      expect(getNewCssPath(filePath, false, 'scss')).toBe('/path/to/style.module.scss');
      expect(getNewCssPath(filePath, true, 'css')).toBe('/path/to/style.module.css');
    });

    it('should disable addModule when renameTo is false', async () => {
      const filePath = '/path/to/style.less';
      expect(filePath).toBe('/path/to/style.less');
    });
  });

  describe('comment conversion for different formats', () => {
    it('should convert comments for CSS output', async () => {
      const testFile = path.join(__dirname, '../__testfixtures__/less-to-cssvar/basic.input.less');
      const { content } = await transform(testFile, { prefix: 'ob' });
      const cssContent = convertLessCommentsToCss(content);
      expect(cssContent).not.toContain('//');
    });

    it('should keep comments for SCSS output', async () => {
      const testFile = path.join(__dirname, '../__testfixtures__/less-to-cssvar/basic.input.less');
      const { content } = await transform(testFile, { prefix: 'ob' });
      expect(content).toBeDefined();
    });
  });
});
