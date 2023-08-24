import React, { useState } from 'react';
import { Input } from 'antd';
import type { PasswordProps as AntdPasswordProps } from 'antd/es/input';
import CopyToClipboard from 'react-copy-to-clipboard';
import RandExp from 'randexp';
import Button from '../../button';
import Popover from '../../popover';
import message from '../../message';
import { token } from '../../static-function';
import ConfigProvider from '../../config-provider';
import type { ConfigConsumerProps } from '../../config-provider';
import defaultLocale from '../../locale/en-US';
import useEncrypt from '../../_util/useEncrypt';
import Content from './Content';
import type { Validator } from './Content';

const AntPassword = Input.Password;

export interface PasswordLocale {
  lengthRuleMessage?: string;
  charRuleMessage?: string;
  strengthRuleMessage?: string;
  placeholder?: string;
  generatePlaceholder?: string;
  randomlyGenerate?: string;
  pleaseKeepYourPasswordIn?: string;
  copySuccessfully?: string;
  copyPassword?: string;
  andKeepItProperly?: string;
}

export interface PasswordProps extends AntdPasswordProps {
  value?: string;
  // RSA 加密用的公钥，如果需要进行密码加密，传入公钥即可
  publicKey?: string;
  // 自定义加密算法 需要将加密后结果 return
  customEncryption?: (value?: string) => string;
  onChange?: (value?: string) => void;
  rules?: boolean | Validator[];
  onValidate?: (passed: boolean) => void;
  generatePasswordRegex?: RegExp;
  locale?: PasswordLocale;
}

const Password: React.FC<PasswordProps> = ({
  value,
  locale: customLocale,
  rules = false,
  publicKey,
  onChange,
  onValidate,
  customEncryption,
  generatePasswordRegex,
  ...restProps
}) => {
  const { encrypt } = useEncrypt();

  const { locale: contextLocale = defaultLocale } = React.useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const passwordLocale: PasswordLocale = { ...contextLocale.Input.Password, ...customLocale };

  const [fieldError, setFieldError] = useState<string[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [privateValue, setPrivateValue] = useState();

  const defaultRules: Validator[] = [
    {
      validate: (val?: string) => val?.length >= 8 && val?.length <= 32,
      message: passwordLocale.lengthRuleMessage,
    },
    {
      validate: (val?: string) => /^[0-9a-zA-Z~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]+$/.test(val),
      message: passwordLocale.charRuleMessage,
    },
    {
      validate: (val?: string) =>
        /(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]){2,})/.test(
          val
        ),
      message: passwordLocale.strengthRuleMessage,
    },
  ];
  const newRules = rules && rules?.length > 0 ? rules : (rules ? defaultRules : []);

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
      if (publicKey) {
        setPrivateValue(newValue);
        onChange?.(encrypt(newValue, publicKey));
      } else if (customEncryption) {
        setPrivateValue(newValue);
        onChange?.(customEncryption(newValue));
      } else {
        onChange?.(newValue);
      }
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
          content={newRules?.length > 0 ?
            <Content
              isTouched={isTouched}
              value={value}
              isValidating={isValidating}
              rules={newRules}
              fieldError={fieldError}
            /> : null
          }
          overlayStyle={{ maxWidth: 400 }}
        >
          {publicKey || customEncryption ? (
            <AntPassword
              autoComplete="new-password"
              onChange={e => {
                handleChange(e?.target?.value);
              }}
              placeholder={
                generatePasswordRegex
                  ? passwordLocale.generatePlaceholder
                  : passwordLocale.placeholder
              }
              {...restProps}
            />
          ) : (
            <AntPassword
              value={value}
              autoComplete="new-password"
              onChange={e => {
                handleChange(e?.target?.value);
              }}
              placeholder={
                generatePasswordRegex
                  ? passwordLocale.generatePlaceholder
                  : passwordLocale.placeholder
              }
              {...restProps}
            />
          )}
        </Popover>
        {generatePasswordRegex && (
          <Button
            onClick={() => {
              handleChange(getRandomPassword());
            }}
            style={{ marginLeft: 8 }}
          >
            {passwordLocale.randomlyGenerate}
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
          {passwordLocale?.pleaseKeepYourPasswordIn}
          <CopyToClipboard
            // 开启加密后，复制密码需要用未加密状态的
            text={publicKey || customEncryption ? privateValue : value}
            onCopy={() => {
              message.success(passwordLocale.copySuccessfully);
            }}
          >
            <a>{passwordLocale.copyPassword}</a>
          </CopyToClipboard>
          {passwordLocale.andKeepItProperly}
        </div>
      )}
    </>
  );
};

const InputPassword = Password as typeof AntPassword;

export default InputPassword;
