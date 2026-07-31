import { Alert, Button, ConfigProvider, Form, Input } from '@oceanbase/design';
import type { FormProps, RuleObject } from '@oceanbase/design/es/form';
import { isFunction, toString } from 'lodash';
import React, { useCallback, useContext, useMemo } from 'react';
import Password, { type PasswordLocale } from '../Password';
import zhCN from '../Password/locale/zh-CN';
import {
  CLOUD_PASSWORD_REGEX,
  createCloudPasswordValidator,
  type CloudPasswordLocale,
} from '../Password/Content';
import type { LoginLocale } from './index';

/**
 * Cloud password regex aligned with {@link CLOUD_PASSWORD_REGEX}.
 * Prefer `analyzeCloudPassword` for validation.
 */
// eslint-disable-next-line
export const PASSWORD_REGEX = CLOUD_PASSWORD_REGEX;

export interface IRegisterFormProps extends FormProps {
  locale?: LoginLocale;
  /**
   * 用户自定义密码规则
   */
  passwordRule?: {
    pattern: RegExp;
    message: string;
  };
  loading?: boolean;
  isUserExists?: (account: string) => Promise<boolean>;
  errorMessage?: React.ReactNode | string;
}

const Register: React.FC<IRegisterFormProps> = ({
  isUserExists,
  locale,
  loading,
  passwordRule,
  errorMessage,
  ...restProps
}) => {
  const { getPrefixCls, locale: antLocale } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('login');
  const [form] = Form.useForm();
  const passwordLocaleFromContext = (
    antLocale as { Password?: Partial<PasswordLocale> } | undefined
  )?.Password;
  const passwordMessages = useMemo<PasswordLocale>(
    () => ({
      ...zhCN,
      ...passwordLocaleFromContext,
    }),
    [passwordLocaleFromContext]
  );
  const passwordCloudLocale = useMemo<CloudPasswordLocale>(
    () => ({
      ...passwordMessages,
      emptyMessage: locale.passwordMessage,
    }),
    [passwordMessages, locale.passwordMessage]
  );

  const handleValidateAccount = useCallback(
    async (rule: RuleObject, value: string) => {
      if (!value || !isFunction(isUserExists)) {
        return;
      }
      const isExists = await isUserExists(value);
      if (isExists) {
        throw new Error(locale.userExistMessage);
      }
    },
    [isUserExists, locale.userExistMessage]
  );

  const handleValidatePassword = useCallback(
    (_: RuleObject, value?: string) => {
      if (passwordRule) {
        if (!value || !passwordRule.pattern.test(value)) {
          return Promise.reject(new Error(passwordRule.message));
        }
        return Promise.resolve();
      }
      return createCloudPasswordValidator(passwordCloudLocale)(_, value);
    },
    [passwordCloudLocale, passwordRule]
  );

  const handleValidateConfirmPassword = useCallback(
    (_: RuleObject, value?: string) => {
      const pwd = form.getFieldValue('password');
      if (toString(value) !== toString(pwd)) {
        return Promise.reject(new Error(passwordMessages.confirmMismatchMessage));
      }
      return Promise.resolve();
    },
    [form, passwordMessages.confirmMismatchMessage]
  );

  return (
    <Form
      layout="vertical"
      requiredMark={false}
      className={`${prefixCls}-form`}
      form={form}
      {...restProps}
      data-testid="login.register"
    >
      {errorMessage && (
        <Alert
          type="error"
          showIcon={true}
          className={`${prefixCls}-alert`}
          message={errorMessage}
        />
      )}
      <Form.Item
        name="username"
        label={locale.usernameLabel}
        extra={locale.usernameHelp}
        validateFirst
        rules={[
          {
            required: true,
            whitespace: true,
            message: locale.usernameMessage,
          },
          {
            min: 4,
            max: 48,
            message: locale.usernameLengthMessage,
          },
          {
            pattern: /^[a-zA-Z0-9_.+@#$%]+$/,
            message: locale.usernameFormatMessage,
          },
          {
            validator: handleValidateAccount,
          },
        ]}
      >
        <Input size="large" autoComplete="new-account" autoFocus />
      </Form.Item>
      <Form.Item
        name="password"
        label={locale.passwordLabel}
        dependencies={['confirmPassword']}
        validateFirst
        rules={[
          {
            required: true,
            message: locale.passwordMessage,
          },
          {
            validator: handleValidatePassword,
          },
        ]}
      >
        <Password size="large" visibilityToggle />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label={locale.confirmPwdLabel}
        dependencies={['password']}
        validateFirst
        rules={[
          {
            required: true,
            message: locale.confirmPwdMessage,
          },
          {
            validator: handleValidateConfirmPassword,
          },
        ]}
      >
        <Input.Password size="large" visibilityToggle={true} autoComplete="new-password" />
      </Form.Item>
      <Button
        htmlType="submit"
        size="large"
        loading={loading}
        type="primary"
        block={true}
        className={`${prefixCls}-submit-btn`}
      >
        {locale.registerBtn}
      </Button>
    </Form>
  );
};

export default Register;
