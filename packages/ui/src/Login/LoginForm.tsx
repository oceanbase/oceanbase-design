import {
  LockOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
  UserOutlined,
} from '@oceanbase/icons';
import { Alert, Button, Form, Input, Space } from '@oceanbase/design';
import type { FormProps } from '@oceanbase/design/es/form';
import classNames from 'classnames';
import React, { useState } from 'react';
import { theme } from '@oceanbase/design';
import type { LoginLocale } from '.';
import { getPrefix } from '../_util';
import './index.less';

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
}

const prefix = getPrefix('login');

const Login: React.FC<ILoginFormProps> = ({
  loading,
  locale,
  errorMessage,
  showAuthCode,
  showOtherLoginButton,
  authCodeImg,
  otherLoginProps,
  onAuthCodeImgChange,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const [focusInput, setFocusInput] = useState('');

  return (
    <Form
      layout="vertical"
      hideRequiredMark={true}
      className={`${prefix}-form`}
      style={{ paddingLeft: showAuthCode ? 96 : 0 }}
      {...restProps}
      data-testid="login.form"
    >
      {errorMessage && (
        <Alert type="error" showIcon={true} className={`${prefix}-alert`} message={errorMessage} />
      )}
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
          prefix={<UserOutlined style={{ color: token.colorIcon }} />}
          placeholder={locale.usernamePlaceholder}
          onFocus={() => {
            setFocusInput('username');
          }}
          onBlur={() => {
            setFocusInput('');
          }}
          className={classNames({
            [`${prefix}-focus-input`]: focusInput === 'username',
          })}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: locale.passwordMessage,
          },
        ]}
      >
        <Input.Password
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
          className={focusInput === 'password' ? `${prefix}-focus-input` : ''}
        />
      </Form.Item>
      {showAuthCode && (
        <Space className={`${prefix}-auth-code`}>
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
              prefix={<SafetyCertificateOutlined style={{ color: token.colorIcon }} />}
              placeholder="请输入验证码"
              onFocus={() => {
                setFocusInput('authCode');
              }}
              onBlur={() => {
                setFocusInput('');
              }}
              className={classNames({
                [`${prefix}-focus-input`]: focusInput === 'authCode',
              })}
            />
          </Form.Item>
          <div className={classNames(`${prefix}-code-btn`)}>
            <img src={authCodeImg} alt="" width="96" height="38" />
            <div className={`${prefix}-code-mask`} onClick={onAuthCodeImgChange}>
              <SyncOutlined />
            </div>
          </div>
        </Space>
      )}
      <Form.Item>
        <Button
          // 按下回车键，即可触发点击事件
          htmlType="submit"
          loading={loading}
          type="primary"
          block={true}
          className={`${prefix}-submit-btn`}
        >
          {locale.loginText}
        </Button>
      </Form.Item>
      {showOtherLoginButton && (
        <Form.Item>
          <Button
            htmlType="button"
            loading={otherLoginProps.loading}
            type="primary"
            block={true}
            onClick={otherLoginProps.onFinish}
            className={`${prefix}-submit-btn`}
          >
            {locale.otherLoginText}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default Login;
