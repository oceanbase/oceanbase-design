import type { RuleObject } from 'antd/es/form';
import { CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@oceanbase/icons';
import { Progress, Space } from '@oceanbase/design';
import React from 'react';
import { theme } from '@oceanbase/design';

export const CLOUD_PASSWORD_MIN_LENGTH = 8;
export const CLOUD_PASSWORD_MAX_LENGTH = 20;

/** Compact display for inline messages. */
export const CLOUD_PASSWORD_SPECIAL_CHARS_DISPLAY = '!@#$%^&*()_-+={}[]|\\:;"\'<>,.?~`';

/** Spaced display aligned with cloud password spec docs. */
export const CLOUD_PASSWORD_SPECIAL_CHARS_DISPLAY_SPACED =
  '! @ # $ % ^ & * ( ) _ - + = [ ] { } | \\ : ; " \' < > , . ? ~ `';

const SPECIAL_CHAR_PATTERN = /[!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`]/;
const ALLOWED_CHAR_PATTERN = /^[A-Za-z\d!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`]+$/;
const FORBIDDEN_CHAR_PATTERN =
  /[\s\u4e00-\u9fff\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff]|[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

export type PasswordRiskLevel = 'none' | 'low' | 'medium' | 'high' | 'success';
export type PasswordRuleStatus = 'pass' | 'fail' | 'wait';

export interface Validator {
  validate: (value?: string) => boolean;
  message: string;
  optional?: boolean;
  messageLines?: string[];
}

export interface CloudPasswordLocale {
  lengthRuleMessage: string;
  charRuleMessage: string;
  strengthRuleMessage: string;
  strengthRuleMessageLine2: string;
  emptyMessage: string;
  forbiddenCharsMessage: string;
  genericFailMessage: string;
}

export interface CloudPasswordAnalysis {
  passed: boolean;
  failedRuleCount: number;
  riskLevel: PasswordRiskLevel;
  fieldError?: string;
  ruleStatuses: PasswordRuleStatus[];
  fieldErrors: string[];
}

function countCharacterTypes(value: string): number {
  let count = 0;
  if (/[a-z]/.test(value)) count += 1;
  if (/[A-Z]/.test(value)) count += 1;
  if (/\d/.test(value)) count += 1;
  if (SPECIAL_CHAR_PATTERN.test(value)) count += 1;
  return count;
}

export function hasForbiddenPasswordChars(value?: string): boolean {
  return Boolean(value) && FORBIDDEN_CHAR_PATTERN.test(value);
}

export function validateCloudPasswordLength(value?: string): boolean {
  return (
    Boolean(value) &&
    value.length >= CLOUD_PASSWORD_MIN_LENGTH &&
    value.length <= CLOUD_PASSWORD_MAX_LENGTH
  );
}

export function validateCloudPasswordChars(value?: string): boolean {
  return Boolean(value) && ALLOWED_CHAR_PATTERN.test(value);
}

export function validateCloudPasswordStrength(value?: string): boolean {
  return Boolean(value) && countCharacterTypes(value) >= 3;
}

export function getCloudPasswordValidators(locale: CloudPasswordLocale): Validator[] {
  return [
    { validate: validateCloudPasswordLength, message: locale.lengthRuleMessage },
    { validate: validateCloudPasswordChars, message: locale.charRuleMessage },
    {
      validate: validateCloudPasswordStrength,
      message: locale.strengthRuleMessage,
      messageLines: [locale.strengthRuleMessage, locale.strengthRuleMessageLine2].filter(Boolean),
    },
  ];
}

function formatRuleFieldError(rule: Validator): string {
  const lines = rule.messageLines?.filter(Boolean);
  if (lines && lines.length > 1) {
    return lines.join(' ');
  }
  return rule.message;
}

function resolveFieldError(
  value: string | undefined,
  locale: CloudPasswordLocale,
  validators: Validator[],
  touched: boolean
): string | undefined {
  if (!touched) return undefined;
  if (!value) return locale.emptyMessage;
  if (hasForbiddenPasswordChars(value)) return locale.forbiddenCharsMessage;

  const failedRules = validators.filter(rule => !rule.validate(value));
  if (failedRules.length >= 2) return locale.genericFailMessage;
  if (!validateCloudPasswordLength(value)) return locale.lengthRuleMessage;
  if (failedRules.length === 1) return formatRuleFieldError(failedRules[0]);
  return undefined;
}

function resolveRiskLevel(
  value: string | undefined,
  failedRuleCount: number,
  touched: boolean
): PasswordRiskLevel {
  if (!value || !touched) return 'none';
  if (failedRuleCount === 0 && !hasForbiddenPasswordChars(value)) return 'success';
  if (failedRuleCount === 1) return 'medium';
  return 'high';
}

export function analyzeCloudPassword(
  value: string | undefined,
  locale: CloudPasswordLocale,
  options?: { touched?: boolean }
): CloudPasswordAnalysis {
  const touched = options?.touched ?? true;
  const validators = getCloudPasswordValidators(locale);
  const fieldFailures = validators
    .map(rule => (rule.validate(value) ? undefined : rule.message))
    .filter((message): message is string => Boolean(message));

  const ruleStatuses: PasswordRuleStatus[] = validators.map(rule => {
    if (!touched || !value) return 'wait';
    return rule.validate(value) ? 'pass' : 'fail';
  });

  const failedRuleCount = fieldFailures.length;
  const passed = Boolean(value) && failedRuleCount === 0 && !hasForbiddenPasswordChars(value);

  return {
    passed,
    failedRuleCount,
    riskLevel: resolveRiskLevel(value, failedRuleCount, touched),
    fieldError: passed ? undefined : resolveFieldError(value, locale, validators, touched),
    ruleStatuses,
    fieldErrors: fieldFailures,
  };
}

/** Internal Form validator for built-in flows (e.g. RegisterForm). */
export function createCloudPasswordValidator(locale: CloudPasswordLocale) {
  return (_: RuleObject, value?: string) => {
    const analysis = analyzeCloudPassword(value, locale, { touched: true });
    if (analysis.passed) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(analysis.fieldError || locale.genericFailMessage));
  };
}

/** Full-match regex aligned with cloud password rules (length + charset + 3-of-4 types). */
// eslint-disable-next-line no-useless-escape
export const CLOUD_PASSWORD_REGEX =
  /^(?=(?:.*[a-z])(?:.*[A-Z])(?:.*\d)|(?:.*[a-z])(?:.*[A-Z])(?:.*[!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`])|(?:.*[a-z])(?:.*\d)(?:.*[!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`])|(?:.*[A-Z])(?:.*\d)(?:.*[!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`]))[A-Za-z\d!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?~`]{8,20}$/;

type ValidateStatus = 'success' | 'error' | 'wait';

const Content: React.FC<{
  rules: Validator[];
  isValidating: boolean;
  value?: string;
  isTouched: boolean;
  ruleStatuses: PasswordRuleStatus[];
  riskLevel: PasswordRiskLevel;
  rulesRegionId?: string;
  rulesAriaLabel?: string;
}> = ({
  rules,
  isValidating,
  value,
  isTouched,
  ruleStatuses,
  riskLevel,
  rulesRegionId,
  rulesAriaLabel,
}) => {
  const { token } = theme.useToken();
  const statusIconMap = {
    error: <CloseCircleFilled style={{ color: token.colorError }} />,
    success: <CheckCircleFilled style={{ color: token.colorSuccess }} />,
    wait: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: token.fontSize * token.lineHeight,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            backgroundColor: token.colorFillSecondary,
            borderRadius: '50%',
          }}
        />
      </div>
    ),
  };

  const passedCount = ruleStatuses.filter(status => status === 'pass').length;
  const percent =
    value && isTouched ? Math.max(0, Math.min(100, (passedCount / rules.length) * 100)) : 0;

  let strokeColor = token.colorFillSecondary;
  if (riskLevel === 'success') {
    strokeColor = token.colorSuccess;
  } else if (riskLevel === 'medium') {
    strokeColor = token.colorWarning;
  } else if (riskLevel === 'high') {
    strokeColor = token.colorError;
  }

  const mapRuleStatus = (index: number): ValidateStatus => {
    const status = ruleStatuses[index];
    if (!isTouched || !value) return 'wait';
    if (status === 'pass') return 'success';
    if (status === 'fail') return rules[index]?.optional ? 'wait' : 'error';
    return 'wait';
  };

  return (
    <div id={rulesRegionId} role="region" aria-label={rulesAriaLabel}>
      <Progress percent={percent} strokeColor={strokeColor} showInfo={false} aria-hidden />
      <ul style={{ margin: 0, marginTop: '10px', listStyle: 'none', padding: '0' }}>
        <Space size={4} direction="vertical">
          {rules?.map((rule, index) => {
            const status = mapRuleStatus(index);
            const lines = rule.messageLines?.length ? rule.messageLines : [rule.message];
            return (
              <li key={`${rule.message}`}>
                <Space size={status === 'wait' ? 14 : 8} align="start">
                  {isValidating ? <LoadingOutlined aria-hidden /> : statusIconMap[status]}
                  <div>
                    {lines.map(line => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </Space>
              </li>
            );
          })}
        </Space>
      </ul>
    </div>
  );
};

export default Content;
