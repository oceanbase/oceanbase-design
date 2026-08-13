import { describe, expect, it } from 'vitest';
import enUS from '../locale/en-US';
import {
  analyzeCloudPassword,
  CLOUD_PASSWORD_REGEX,
  hasForbiddenPasswordChars,
  validateCloudPasswordLength,
  validateCloudPasswordStrength,
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
