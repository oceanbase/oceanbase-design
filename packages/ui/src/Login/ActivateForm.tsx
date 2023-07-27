import { Alert, Button, Form, Input } from '@oceanbase/design';
import type { FormProps } from 'antd/es/form';
import { toString } from 'lodash';
import React, { useCallback } from 'react';
import { getPrefix } from '../_util';
import type { LoginLocale } from './index';
import './index.less';
import { PASSWORD_REGEX } from './RegisterForm';

export interface IActivateFormProps extends FormProps {
  locale?: LoginLocale;
  /**
   * 用户自定义密码规则
   */
  passwordRule?: {
    pattern: RegExp;
    message: string;
  };
  loading?: boolean;
  errorMessage?: React.ReactNode | string;
  goBack?: () => void;
}

const prefix = getPrefix('login');

const Activate: React.FC<IActivateFormProps> = ({
  locale,
  loading,
  passwordRule,
  errorMessage,
  goBack,
  ...restProps
}) => {
  const [form] = Form.useForm();

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
        {locale.activeSubmitBtn}
      </Button>
      <div className={`${prefix}-switch-btn`}>
        <Button type="link" onClick={goBack}>
          {locale.activeBackBtn}
        </Button>
      </div>
    </Form>
  );
};

export default Activate;
