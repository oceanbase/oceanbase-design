import { Alert, Button, Form, Input } from '@oceanbase/design';
import type { FormProps, RuleObject } from '@oceanbase/design/es/form';
import { isFunction, toString } from 'lodash';
import React, { useCallback } from 'react';
import { getPrefix } from '../_util';
import type { LoginLocale } from './index';
import './index.less';

/**
 * 冗余的转义符可以增强正则的可读性
 */
// eslint-disable-next-line
export const PASSWORD_REGEX =
  /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[ !"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`\{\|\}~]){2,})[A-Za-z\d !"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\]\^_`\{\|\}~]{8,32}$/;

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

const prefix = getPrefix('login');

const Register: React.FC<IRegisterFormProps> = ({
  isUserExists,
  locale,
  loading,
  passwordRule,
  errorMessage,
  ...restProps
}) => {
  const [form] = Form.useForm();

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
    [isUserExists]
  );

  const handleValidateConfirmPassword = useCallback(
    (rule, value, callback) => {
      if (!form) {
        callback();
        return;
      }
      const pwd = (form as any).getFieldValue('password');
      if (toString(value) !== toString(pwd)) {
        callback(locale.samePasswordMessage);
        return;
      }
      callback();
    },
    [form]
  );

  const passwordRegexpRule = passwordRule || {
    pattern: PASSWORD_REGEX,
    message: locale.passwordHelp,
  };

  return (
    <Form
      layout="vertical"
      requiredMark={false}
      className={`${prefix}-form`}
      form={form}
      {...restProps}
      data-testid="login.register"
    >
      {errorMessage && (
        <Alert type="error" showIcon={true} className={`${prefix}-alert`} message={errorMessage} />
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
        <Input autoComplete="new-account" autoFocus />
      </Form.Item>
      <Form.Item
        name="password"
        label={locale.passwordLabel}
        dependencies={['confirmPassword']}
        help={passwordRegexpRule.message}
        validateFirst
        rules={[
          {
            required: true,
            message: locale.passwordMessage,
          },
          passwordRegexpRule,
        ]}
      >
        <Input.Password visibilityToggle={true} autoComplete="new-password" />
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
        <Input.Password visibilityToggle={true} autoComplete="new-password" />
      </Form.Item>
      <Button
        // 按下回车键，即可触发点击事件
        htmlType="submit"
        loading={loading}
        type="primary"
        block={true}
        className={`${prefix}-submit-btn`}
      >
        {locale.registerBtn}
      </Button>
    </Form>
  );
};

export default Register;
