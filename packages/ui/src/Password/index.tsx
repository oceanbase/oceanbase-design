import { Button, Input, message, Popover } from '@oceanbase/design';
import type { PasswordProps as InputPasswordProps } from '@oceanbase/design/es/input';
import RandExp from 'randexp';
import React, { useState } from 'react';
import { theme } from '@oceanbase/design';
import CopyToClipboard from 'react-copy-to-clipboard';
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
  pleaseKeepYourPasswordIn: string;
  copySuccessfully: string;
  copyPassword: string;
  andKeepItProperly: string;
}

export interface PasswordProps extends LocaleWrapperProps, Omit<InputPasswordProps, 'onChange'> {
  value?: string;
  onChange?: (value?: string) => void;
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
  onValidate,
  generatePasswordRegex,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const [fieldError, setFieldError] = useState<string[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

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
    // 先触发 onValidate，再异步触发 onChange，以便在 antd3 Form 的类组件场景下，校验规则 validator 能获取到最新的 passed 值。
    setTimeout(() => {
      onChange?.(newValue);
    }, 0);
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
              handleChange(getRandomPassword());
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
          }}
        >
          {locale.pleaseKeepYourPasswordIn}
          <CopyToClipboard
            text={value}
            onCopy={() => {
              message.success(locale.copySuccessfully);
            }}
          >
            <a>{locale.copyPassword}</a>
          </CopyToClipboard>
          {locale.andKeepItProperly}
        </div>
      )}
    </>
  );
};

export default LocaleWrapper({
  componentName: 'Password',
  defaultLocale: zhCN,
})(Password);
