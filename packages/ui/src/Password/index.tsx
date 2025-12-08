import { Button, Input, message, Popover, Space, Typography } from '@oceanbase/design';
import type { PasswordProps as InputPasswordProps } from '@oceanbase/design/es/input';
import RandExp from 'randexp';
import React, { useState } from 'react';
import { theme } from '@oceanbase/design';
import { CheckOutlined, CopyOutlined } from '@oceanbase/icons';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import type { Validator } from './Content';
import Content from './Content';
import zhCN from './locale/zh-CN';

export interface PasswordLocale {
  lengthRuleMessage: string;
  charRuleMessage: string;
  strengthRuleMessage: string;
  placeholder: string;
  generatePlaceholder: string;
  randomlyGenerate: string;
  pleaseRememberYourPassword: string;
  copySuccessfully: string;
  copyPassword: string;
}

export interface PasswordProps extends LocaleWrapperProps, Omit<InputPasswordProps, 'onChange'> {
  value?: string;
  onChange?: (value?: string) => void;
  generatePassword?: () => string;
  rules?: Validator[];
  onValidate?: (passed: boolean) => void;
  generatePasswordRegex?: RegExp;
  locale?: PasswordLocale;
}

const Password: React.FC<PasswordProps> = ({
  value,
  locale,
  rules,
  onChange,
  generatePassword,
  onValidate,
  generatePasswordRegex,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const [fieldError, setFieldError] = useState<string[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [copyHover, setCopyHover] = useState(false);

  const defaultRules: Validator[] = [
    {
      validate: (val?: string) => val?.length >= 8 && val?.length <= 32,
      message: locale.lengthRuleMessage,
    },
    {
      validate: (val?: string) => /^[0-9a-zA-Z~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]+$/.test(val),
      message: locale.charRuleMessage,
    },
    {
      validate: (val?: string) =>
        /(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]){2,})/.test(
          val
        ),
      message: locale.strengthRuleMessage,
    },
  ];
  const newRules = rules || defaultRules;

  const handleChange = (newValue?: string) => {
    if (!isTouched) {
      setIsTouched(true);
    }
    setIsValidating(true);
    const newFieldError = newRules
      .map(rule => {
        // 规则校验通过，返回空的校验信息
        if (rule.validate(newValue)) {
          return undefined;
        }
        // 规则校验不通过，返回对应的校验信息
        return rule.message;
      })
      .filter(ruleMessage => ruleMessage);
    setIsValidating(false);
    setFieldError(newFieldError);
    onValidate?.(newFieldError.length === 0);
    onChange?.(newValue);
  };

  // 根据正则表达式获取符合要求的随机密码
  const getRandomPassword = () => {
    const newValue = new RandExp(generatePasswordRegex).gen();
    // 由于生成密码的库目前不支持包含前后断言的正则表达式，因此需要多次生成密码，直到符合密码强度要求
    if (generatePasswordRegex.test(newValue)) {
      return newValue;
    }
    return getRandomPassword();
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Popover
          trigger="click"
          placement="right"
          // ref: https://github.com/ant-design/ant-design/issues/5899
          // @ts-ignore
          popupAlign={{
            offset: [16, 0],
          }}
          content={
            <Content
              isTouched={isTouched}
              value={value}
              isValidating={isValidating}
              rules={newRules}
              fieldError={fieldError}
            />
          }
          overlayStyle={{ maxWidth: 400 }}
          overlayInnerStyle={{
            padding: `${token.padding / 2}px ${token.padding}px ${token.padding}px ${token.padding}px`,
          }}
        >
          <Input.Password
            value={value}
            autoComplete="new-password"
            onChange={e => {
              handleChange(e?.target?.value);
            }}
            placeholder={generatePasswordRegex ? locale.generatePlaceholder : locale.placeholder}
            {...restProps}
          />
        </Popover>
        {generatePasswordRegex && (
          <Button
            onClick={() => {
              if (generatePassword instanceof Function) {
                handleChange(generatePassword());
              } else {
                handleChange(getRandomPassword());
              }
            }}
            style={{ marginLeft: 8 }}
          >
            {locale.randomlyGenerate}
          </Button>
        )}
      </div>
      {value && fieldError?.length === 0 && (
        <div
          style={{
            fontSize: 14,
            color: token.colorTextTertiary,
            lineHeight: '22px',
            marginTop: token.marginXXS,
          }}
        >
          {locale.pleaseRememberYourPassword}
          <Typography.Text
            copyable={{
              text: value,
              icon: [
                <Space key="copy" size={token.marginXXS}>
                  <CopyOutlined />
                  <a>{locale.copyPassword}</a>
                </Space>,
                <Space key="copy-success" size={token.marginXXS}>
                  <CheckOutlined />
                  <a>{locale.copyPassword}</a>
                </Space>,
              ],
              tooltips: ['', locale.copySuccessfully],
            }}
            style={{ marginLeft: token.marginXS }}
          />
        </div>
      )}
    </>
  );
};

export default LocaleWrapper({
  componentName: 'Password',
  defaultLocale: zhCN,
})(Password);
