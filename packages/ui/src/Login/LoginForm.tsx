import {
  LockOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
  UserOutlined,
} from '@oceanbase/icons';
import { Alert, Button, Form, Input, Space } from '@oceanbase/design';
import type { FormProps, InputProps } from '@oceanbase/design';
import type { PasswordProps } from '@oceanbase/design/es/input';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ConfigProvider, theme } from '@oceanbase/design';
import type { LoginLocale } from '.';

export interface Values {
  username: string;
  password: string;
}

export interface ILoginFormProps extends FormProps {
  loading?: boolean;
  locale?: LoginLocale;
  errorMessage?: React.ReactNode | string;
  showAuthCode?: boolean;
  showOtherLoginButton?: boolean;
  authCodeImg?: string;
  otherLoginProps?: any;
  onAuthCodeImgChange?: () => void;
  passwordOptional?: boolean;
  componentProps?: {
    username: InputProps;
    password: PasswordProps;
    authCode: InputProps;
  };
}

const Login: React.FC<ILoginFormProps> = ({
  loading,
  locale,
  errorMessage,
  showAuthCode,
  showOtherLoginButton,
  authCodeImg,
  otherLoginProps,
  onAuthCodeImgChange,
  componentProps,
  passwordOptional = false,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('login');
  const { token } = theme.useToken();
  const [focusInput, setFocusInput] = useState('');

  return (
    <Form
      layout="vertical"
      hideRequiredMark={true}
      className={`${prefixCls}-form`}
      style={{ paddingLeft: showAuthCode ? 96 : 0 }}
      {...restProps}
      data-testid="login.form"
    >
      {errorMessage && (
        <Alert
          type="error"
          showIcon={true}
          className={`${prefixCls}-alert`}
          message={errorMessage}
        />
      )}
      {/* @ts-ignore  */}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: locale.usernameMessage,
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined style={{ color: token.colorIcon }} />}
          placeholder={locale.usernamePlaceholder}
          onFocus={() => {
            setFocusInput('username');
          }}
          onBlur={() => {
            setFocusInput('');
          }}
          className={classNames({
            [`${prefixCls}-form-focus-input`]: focusInput === 'username',
          })}
          {...(componentProps?.username || {})}
        />
      </Form.Item>
      {/* @ts-ignore  */}
      <Form.Item
        name="password"
        rules={
          passwordOptional
            ? []
            : [
                {
                  required: true,
                  message: locale.passwordMessage,
                },
              ]
        }
      >
        <Input.Password
          size="large"
          visibilityToggle={true}
          autoComplete="current-password"
          prefix={<LockOutlined style={{ color: token.colorIcon }} />}
          placeholder={locale.passwordPlaceholder}
          onFocus={() => {
            setFocusInput('password');
          }}
          onBlur={() => {
            setFocusInput('');
          }}
          className={focusInput === 'password' ? `${prefixCls}-form-focus-input` : ''}
          {...(componentProps?.password || {})}
        />
      </Form.Item>
      {showAuthCode && (
        <Space className={`${prefixCls}-auth-code`}>
          {/* @ts-ignore  */}
          <Form.Item
            name="authCode"
            rules={[
              {
                required: true,
                message: '验证码不能为空',
              },
            ]}
          >
            <Input
              size="large"
              prefix={<SafetyCertificateOutlined style={{ color: token.colorIcon }} />}
              placeholder="请输入验证码"
              onFocus={() => {
                setFocusInput('authCode');
              }}
              onBlur={() => {
                setFocusInput('');
              }}
              className={classNames({
                [`${prefixCls}-form-focus-input`]: focusInput === 'authCode',
              })}
              {...(componentProps?.authCode || {})}
            />
          </Form.Item>
          <div className={classNames(`${prefixCls}-code-btn`)}>
            <img src={authCodeImg} alt="" width="96" height="38" />
            <div className={`${prefixCls}-code-mask`} onClick={onAuthCodeImgChange}>
              <SyncOutlined />
            </div>
          </div>
        </Space>
      )}
      <Form.Item>
        <Button
          // 按下回车键，即可触发点击事件
          htmlType="submit"
          size="large"
          loading={loading}
          type="primary"
          block={true}
          className={`${prefixCls}-submit-btn`}
        >
          {locale.loginText}
        </Button>
      </Form.Item>
      {showOtherLoginButton && (
        <Form.Item>
          <Button
            htmlType="button"
            size="large"
            loading={otherLoginProps.loading}
            type="primary"
            block={true}
            onClick={otherLoginProps.onFinish}
            className={`${prefixCls}-submit-btn`}
          >
            {locale.otherLoginText}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default Login;
