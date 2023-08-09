import { Input } from 'antd';
import { Button, message, Popover } from '@oceanbase/design';
import type { PasswordProps as AntdPasswordProps } from 'antd/es/input';
import RandExp from 'randexp';
import React, { useState } from 'react';
import { token } from '@oceanbase/design';
import CopyToClipboard from 'react-copy-to-clipboard';
import type { Validator } from './Content';
import useEncrypt from '../../_util/useEncrypt';
import Content from './Content';
// import zhCN from '../locale/zh-CN';
import enUS from '../locale/en-US';

const AntPassword = Input.Password;

export interface PasswordLocale {
  InputPassword?: {
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
}

// Omit<AntdPasswordProps, 'onChange'>
export interface PasswordProps extends AntdPasswordProps {
  value?: string;
  // RSA 加密用的公钥，如果需要进行密码加密，传入公钥即可
  publicKey?: string;
  // 自定义加密算法 需要将加密后结果 return
  customEncryption?: (value?: string) => string;
  onPasswordChange?: (value?: string) => void;
  rules?: Validator[];
  onValidate?: (passed: boolean) => void;
  generatePasswordRegex?: RegExp;
  locale?: PasswordLocale;
}

const Password: React.FC<PasswordProps> = ({
  value,
  locale: customLocale,
  rules,
  publicKey,
  onPasswordChange,
  onValidate,
  customEncryption,
  generatePasswordRegex,
  ...restProps
}) => {
  const { encrypt } = useEncrypt();

  const { InputPassword, ...restLocale } = {
    ...customLocale,
    InputPassword: {
      ...enUS?.Input?.InputPassword,
      ...customLocale?.InputPassword,
    },
  };

  const [fieldError, setFieldError] = useState<string[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [privateValue, setPrivateValue] = useState();

  const defaultRules: Validator[] = [
    {
      validate: (val?: string) => val?.length >= 8 && val?.length <= 32,
      message: InputPassword?.lengthRuleMessage,
    },
    {
      validate: (val?: string) => /^[0-9a-zA-Z~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]+$/.test(val),
      message: InputPassword?.charRuleMessage,
    },
    {
      validate: (val?: string) =>
        /(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*\d){2,})(?=(.*[~!@#%^&*_\-+=|(){}\[\]:;,.?/`$'"<>\\]){2,})/.test(
          val
        ),
      message: InputPassword?.strengthRuleMessage,
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
      if (publicKey) {
        setPrivateValue(newValue)
        onPasswordChange?.(encrypt(newValue,publicKey));
      } else if (customEncryption) { 
        setPrivateValue(newValue)
        onPasswordChange?.(customEncryption(newValue));
      } else {
        onPasswordChange?.(newValue);    
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
          {(publicKey || customEncryption) ? <AntPassword
            autoComplete="new-password"
            onChange={e => {
              handleChange(e?.target?.value);
            }}
            placeholder={generatePasswordRegex ? InputPassword?.generatePlaceholder : InputPassword?.placeholder}
            {...restProps}
          /> : <AntPassword
          value={value}
          autoComplete="new-password"
          onChange={e => {
            handleChange(e?.target?.value);
          }}
          placeholder={generatePasswordRegex ? InputPassword?.generatePlaceholder : InputPassword?.placeholder}
          {...restProps}
        />}
        </Popover>
        {generatePasswordRegex && (
          <Button
            onClick={() => {
              handleChange(getRandomPassword());
            }}
            style={{ marginLeft: 8 }}
          >
            {InputPassword?.randomlyGenerate}
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
        {InputPassword?.pleaseKeepYourPasswordIn}
          <CopyToClipboard
          // 开启加密后，复制密码需要用未加密状态的
            text={publicKey || customEncryption ? privateValue : value }
            onCopy={() => {
              message.success(InputPassword?.copySuccessfully);
            }}
          >
           <a>{InputPassword?.copyPassword}</a>
          </CopyToClipboard>
          {InputPassword?.andKeepItProperly}
        </div>
      )}
    </>
  );
};


const InputPassword = Password as typeof AntPassword;

export default InputPassword;