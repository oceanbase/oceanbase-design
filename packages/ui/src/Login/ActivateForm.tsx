import { Alert, Button, ConfigProvider, Form, Input } from '@oceanbase/design';
import type { FormProps } from '@oceanbase/design/es/form';
import { toString } from 'lodash';
import React, { useCallback, useContext } from 'react';
import type { LoginLocale } from './index';
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

const Activate: React.FC<IActivateFormProps> = ({
  locale,
  loading,
  passwordRule,
  errorMessage,
  goBack,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('login');
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
        <Input.Password size="large" visibilityToggle={true} autoComplete="new-password" />
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
        // 按下回车键，即可触发点击事件
        htmlType="submit"
        size="large"
        loading={loading}
        type="primary"
        block={true}
        className={`${prefixCls}-submit-btn`}
      >
        {locale.activeSubmitBtn}
      </Button>
      <div className={`${prefixCls}-switch-btn`}>
        <Button type="link" onClick={goBack}>
          {locale.activeBackBtn}
        </Button>
      </div>
    </Form>
  );
};

export default Activate;
