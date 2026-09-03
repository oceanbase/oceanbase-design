import { describe, expect, it } from 'vitest';
import enUS from '../locale/en-US';
import {
  analyzeCloudPassword,
  analyzeCustomPassword,
  CLOUD_PASSWORD_REGEX,
  hasForbiddenPasswordChars,
  validateCloudPasswordLength,
  validateCloudPasswordStrength,
  type Validator,
} from '../Content';

const locale = {
  lengthRuleMessage: enUS.lengthRuleMessage,
  charRuleMessage: enUS.charRuleMessage,
  strengthRuleMessage: enUS.strengthRuleMessage,
  strengthRuleMessageLine2: enUS.strengthRuleMessageLine2,
  emptyMessage: enUS.emptyMessage,
  forbiddenCharsMessage: enUS.forbiddenCharsMessage,
  genericFailMessage: enUS.genericFailMessage,
};

describe('passwordRules', () => {
  it('accepts a valid cloud password', () => {
    const value = 'Abcd1234!';
    const analysis = analyzeCloudPassword(value, locale, { touched: true });
    expect(analysis.passed).toBe(true);
    expect(analysis.riskLevel).toBe('success');
    expect(analysis.ruleStatuses).toEqual(['pass', 'pass', 'pass']);
    expect(CLOUD_PASSWORD_REGEX.test(value)).toBe(true);
  });

  it('rejects passwords shorter than 8 characters', () => {
    const analysis = analyzeCloudPassword('Ab1!', locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.fieldError).toBe(locale.lengthRuleMessage);
    expect(analysis.riskLevel).toBe('medium');
  });

  it('rejects passwords longer than 20 characters', () => {
    const analysis = analyzeCloudPassword('Abcdefghij123456789!x', locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.fieldError).toBe(locale.lengthRuleMessage);
  });

  it('rejects forbidden characters such as spaces and emoji', () => {
    expect(hasForbiddenPasswordChars('Abcd1234! ')).toBe(true);
    expect(hasForbiddenPasswordChars('Abcd1234!😀')).toBe(true);
    expect(hasForbiddenPasswordChars('密码Abcd123!')).toBe(true);

    const analysis = analyzeCloudPassword('Abcd1234! ', locale, { touched: true });
    expect(analysis.fieldError).toBe(locale.forbiddenCharsMessage);
  });

  it('requires at least three character classes', () => {
    expect(validateCloudPasswordStrength('abcdefgh')).toBe(false);
    const analysis = analyzeCloudPassword('abcdefgh', locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.failedRuleCount).toBe(1);
    expect(analysis.fieldError).toBe(
      `${locale.strengthRuleMessage} ${locale.strengthRuleMessageLine2}`
    );
  });

  it('returns generic message when multiple rules fail', () => {
    const analysis = analyzeCloudPassword('abc', locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.failedRuleCount).toBeGreaterThanOrEqual(2);
    expect(analysis.fieldError).toBe(locale.genericFailMessage);
    expect(analysis.riskLevel).toBe('high');
  });

  it('returns empty message when touched with no value', () => {
    const analysis = analyzeCloudPassword('', locale, { touched: true });
    expect(analysis.fieldError).toBe(locale.emptyMessage);
  });

  it('keeps wait state before touch', () => {
    const analysis = analyzeCloudPassword('abc', locale, { touched: false });
    expect(analysis.ruleStatuses.every(status => status === 'wait')).toBe(true);
    expect(analysis.fieldError).toBeUndefined();
  });

  it('validates length boundaries', () => {
    expect(validateCloudPasswordLength('1234567')).toBe(false);
    expect(validateCloudPasswordLength('12345678')).toBe(true);
    expect(validateCloudPasswordLength('12345678901234567890')).toBe(true);
    expect(validateCloudPasswordLength('123456789012345678901')).toBe(false);
  });
});

describe('custom rules', () => {
  const customRules: Validator[] = [
    {
      validate: (val?: string) => Boolean(val && val.length >= 6),
      message: 'At least 6 characters',
    },
    {
      validate: (val?: string) => Boolean(val && /[A-Z]/.test(val)),
      message: 'Contains uppercase letter',
    },
  ];

  it('passes when all custom rules pass', () => {
    const analysis = analyzeCustomPassword('Abcdef', customRules, locale, { touched: true });
    expect(analysis.passed).toBe(true);
    expect(analysis.riskLevel).toBe('success');
    expect(analysis.ruleStatuses).toEqual(['pass', 'pass']);
    expect(analysis.fieldError).toBeUndefined();
  });

  it('reports the failing custom rule message, not the built-in cloud rules', () => {
    // 'abcdef' would pass several built-in cloud rules but fails the uppercase custom rule
    const analysis = analyzeCustomPassword('abcdef', customRules, locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.failedRuleCount).toBe(1);
    expect(analysis.fieldError).toBe('Contains uppercase letter');
    expect(analysis.riskLevel).toBe('medium');
  });

  it('returns the generic message when multiple custom rules fail', () => {
    const analysis = analyzeCustomPassword('ab', customRules, locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.failedRuleCount).toBeGreaterThanOrEqual(2);
    expect(analysis.fieldError).toBe(locale.genericFailMessage);
    expect(analysis.riskLevel).toBe('high');
  });

  it('keeps wait state before touch and returns empty message after touch', () => {
    const untouched = analyzeCustomPassword('ab', customRules, locale, { touched: false });
    expect(untouched.ruleStatuses.every(status => status === 'wait')).toBe(true);
    expect(untouched.fieldError).toBeUndefined();

    const empty = analyzeCustomPassword('', customRules, locale, { touched: true });
    expect(empty.passed).toBe(false);
    expect(empty.fieldError).toBe(locale.emptyMessage);
  });

  it('does not fail validation when only optional rules are unmet', () => {
    const rulesWithOptional: Validator[] = [
      {
        validate: (val?: string) => Boolean(val && val.length >= 6),
        message: 'At least 6 characters',
      },
      {
        validate: (val?: string) => Boolean(val && /[A-Z]/.test(val)),
        message: 'Contains uppercase letter',
      },
      {
        validate: (val?: string) => Boolean(val && /[._+@#$%]/.test(val)),
        message: 'Contains a special character',
        optional: true,
      },
    ];

    const analysis = analyzeCustomPassword('Abcdef', rulesWithOptional, locale, { touched: true });
    expect(analysis.passed).toBe(true);
    expect(analysis.failedRuleCount).toBe(0);
    expect(analysis.riskLevel).toBe('success');
    expect(analysis.fieldError).toBeUndefined();
    // 未满足的可选规则展示为 wait，不阻塞校验
    expect(analysis.ruleStatuses).toEqual(['pass', 'pass', 'wait']);
  });

  it('does not invoke custom validate before touch or when value is undefined', () => {
    const unsafeRules: Validator[] = [
      {
        validate: (val?: string) => {
          // Mirrors consumer validators that call .match without a null guard.
          const uppercaseMatch = (val as string).match(/[A-Z]/g) || [];
          return uppercaseMatch.length >= 1;
        },
        message: 'Contains uppercase letter',
      },
    ];

    expect(() =>
      analyzeCustomPassword(undefined, unsafeRules, locale, { touched: false })
    ).not.toThrow();
    const untouched = analyzeCustomPassword(undefined, unsafeRules, locale, { touched: false });
    expect(untouched.failedRuleCount).toBe(0);
    expect(untouched.ruleStatuses).toEqual(['wait']);
    expect(untouched.fieldError).toBeUndefined();

    // Blur-empty path: touched but no value must also skip validate calls.
    expect(() =>
      analyzeCustomPassword(undefined, unsafeRules, locale, { touched: true })
    ).not.toThrow();
    const blurred = analyzeCustomPassword(undefined, unsafeRules, locale, { touched: true });
    expect(blurred.failedRuleCount).toBe(0);
    expect(blurred.ruleStatuses).toEqual(['wait']);
    expect(blurred.fieldError).toBe(locale.emptyMessage);
  });

  it('reports the required rule message even when an optional rule also fails', () => {
    const rulesWithOptional: Validator[] = [
      {
        validate: (val?: string) => Boolean(val && val.length >= 6),
        message: 'At least 6 characters',
      },
      {
        validate: (val?: string) => Boolean(val && /[A-Z]/.test(val)),
        message: 'Contains uppercase letter',
      },
      {
        validate: (val?: string) => Boolean(val && /[._+@#$%]/.test(val)),
        message: 'Contains a special character',
        optional: true,
      },
    ];

    // 仅长度规则（必填）未满足，可选规则也未满足，但不影响必填规则错误提示
    const analysis = analyzeCustomPassword('Abc', rulesWithOptional, locale, { touched: true });
    expect(analysis.passed).toBe(false);
    expect(analysis.failedRuleCount).toBe(1);
    expect(analysis.fieldError).toBe('At least 6 characters');
  });
});
