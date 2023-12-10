import { useControllableValue } from 'ahooks';
import { App, ConfigProvider, Button, Divider, Menu, Typography } from '@oceanbase/design';
import type { AlertProps } from '@oceanbase/design/es/alert';
import type { FormProps } from '@oceanbase/design/es/form';
import { message } from '@oceanbase/design';
import classNames from 'classnames';
import React, { useContext, useCallback } from 'react';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix, setLocale } from '../_util';
import type { IActivateFormProps } from './ActivateForm';
import ActivateForm from './ActivateForm';
import zhCN from './locale/zh-CN';
import type { ILoginFormProps } from './LoginForm';
import LoginForm from './LoginForm';
import type { IRegisterFormProps } from './RegisterForm';
import RegisterForm from './RegisterForm';
// @ts-ignore
import logoImg from '../assets/logo/oceanbase_logo.svg';
// @ts-ignore
import logoImgDark from '../assets/logo/oceanbase_logo_dark.svg';
import type { Locale } from '../interface';
import LocaleDropdown from '../LocaleDropdown';
import './index.less';

export interface Values {
  username: string;
  password: string;
}

export interface LoginLocale {
  otherLoginText: string;
  usernamePlaceholder: string;
  usernameMessage: string;
  passwordPlaceholder: string;
  passwordMessage: string;
  loginText: string;
  isLoadingWarn: string;
  switchLoginLabel: string;
  switchRegisterLabel: string;
  userExistMessage: string;
  samePasswordMessage: string;
  usernameLabel: string;
  usernameHelp: string;
  usernameFormatMessage: string;
  usernameLengthMessage: string;
  passwordLabel: string;
  passwordHelp: string;
  confirmPwdLabel: string;
  confirmPwdMessage: string;
  registerBtn: string;
  registerTitle: string;
  activeTitle: string;
  activeTitleDescrition: string;
  activeSubmitBtn: string;
  activeBackBtn: string;
}

export interface LoginProps extends FormProps {
  style?: React.CSSProperties;
  logo: string;
  bgImage: string;
  title?: string;
  description?: string;
  showLocale?: boolean;
  /* 顶部公告 */
  board?: React.ReactNode;
  alertProps?: AlertProps;
  locale?: LoginLocale;
  // 自定义语言列表
  locales?: Locale[];
  loginProps: ILoginFormProps;
  otherLoginProps?: ILoginFormProps;
  registerProps?: IRegisterFormProps;
  activateFormProps?: IActivateFormProps;
  enableRegister?: boolean;
  showRegister?: boolean;
  showActivate?: boolean;
  showAuthCode?: boolean;
  showOtherLoginButton?: boolean;
  authCodeImg?: string;
  onShowRegisterChange?: (isShow: boolean) => void;
  onShowActivateChange?: (isShow: boolean) => void;
  onAuthCodeImgChange?: () => void;
  isMobile?: boolean;
}

const prefix = getPrefix('login');

const Login: React.FC<LoginProps> = props => {
  const {
    logo,
    bgImage,
    title,
    description,
    board,
    alertProps,
    showLocale,
    locale,
    locales,
    loginProps,
    otherLoginProps,
    registerProps,
    activateFormProps,
    enableRegister,
    showAuthCode,
    showOtherLoginButton,
    authCodeImg,
    onAuthCodeImgChange,
    isMobile,
    style = {},
  } = props;
  const [showRegister, setShowRegister] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'showRegister',
    trigger: 'onShowRegisterChange',
  });
  const [showActivate, setShowActivate] = useControllableValue(props, {
    defaultValue: false,
    valuePropName: 'showActivate',
    trigger: 'onShowActivateChange',
  });

  const isLoading = loginProps?.loading || registerProps?.loading || otherLoginProps?.loading;

  const { theme } = useContext(ConfigProvider.ConfigContext);

  const switchForm = useCallback(() => {
    if (isLoading) {
      message.warning(locale.isLoadingWarn);
    }
    setShowRegister(!showRegister);
  }, [showRegister, isLoading]);

  const goBack = useCallback(() => {
    if (isLoading) {
      message.warning(locale.isLoadingWarn);
    }
    setShowActivate(!showActivate);
  }, [showActivate, isLoading]);

  const showWaterMark = !showRegister;

  return (
    <App>
      <div
        className={classNames(`${prefix}-container`, {
          [`${prefix}-container-with-board`]: board,
          [`${prefix}-container-mobile`]: isMobile,
        })}
        style={style}
      >
        <div className={`${prefix}-bg`} style={{ backgroundImage: `url(${bgImage})` }}>
          <div className={`${prefix}-info`}>
            {title && <div className={`${prefix}-welcome`}>{title}</div>}
            {description && <div className={`${prefix}-start`}>{description}</div>}
          </div>
        </div>
        <div className={`${prefix}-card`}>
          {showLocale && <LocaleDropdown locales={locales} className={`${prefix}-locale`} />}
          {board && <div className={`${prefix}-board`}>{board}</div>}
          <div className={`${prefix}-content`}>
            {showActivate ? (
              <>
                <img src={logo} alt="" className={`${prefix}-activate-logo`} />
                <Divider
                  style={{
                    marginTop: 14,
                    marginBottom: 20,
                  }}
                />
                <Typography.Title level={3}>{locale.activeTitle}</Typography.Title>
                <Typography.Paragraph>{locale.activeTitleDescrition}</Typography.Paragraph>
                <ActivateForm
                  {...activateFormProps}
                  locale={locale}
                  errorMessage={alertProps?.message}
                  goBack={goBack}
                />
              </>
            ) : (
              <>
                {showRegister ? (
                  <>
                    <img src={logo} alt="" className={`${prefix}-reigster-logo`} />
                    <Divider
                      style={{
                        marginTop: 14,
                        marginBottom: 20,
                      }}
                    />
                    <Typography.Title level={3}>{locale.registerTitle}</Typography.Title>
                    <RegisterForm
                      {...registerProps}
                      locale={locale}
                      errorMessage={alertProps?.message}
                    />
                  </>
                ) : (
                  <>
                    <img src={logo} alt="" className={`${prefix}-logo`} />
                    <LoginForm
                      {...loginProps}
                      otherLoginProps={otherLoginProps}
                      locale={locale}
                      errorMessage={alertProps?.message}
                      showAuthCode={showAuthCode}
                      showOtherLoginButton={showOtherLoginButton}
                      authCodeImg={authCodeImg}
                      onAuthCodeImgChange={onAuthCodeImgChange}
                    />
                  </>
                )}
              </>
            )}
            {!!enableRegister && (
              <div className={`${prefix}-switch-btn`}>
                <Button type="link" onClick={switchForm} data-testid="login.register.btn">
                  {showRegister ? locale.switchLoginLabel : locale.switchRegisterLabel}
                </Button>
              </div>
            )}
            {showWaterMark ? (
              <div
                className={`${prefix}-watermark-wrapper`}
                style={{ paddingLeft: showAuthCode ? 96 : 0 }}
              >
                <img
                  src={theme?.isDark ? logoImgDark : logoImg}
                  alt=""
                  className={`${prefix}-watermark`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </App>
  );
};

export default LocaleWrapper({
  componentName: 'Login',
  defaultLocale: zhCN,
})(Login);
