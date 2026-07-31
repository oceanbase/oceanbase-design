import { Button, Form, Input, Popover, Space, Typography, theme } from '@oceanbase/design';
import type { PasswordProps as InputPasswordProps } from '@oceanbase/design/es/input';
import RandExp from 'randexp';
import React, { useCallback, useEffect, useId, useState } from 'react';
import { CheckOutlined, CopyOutlined } from '@oceanbase/icons';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import Content, {
  analyzeCloudPassword,
  getCloudPasswordValidators,
  type CloudPasswordLocale,
  type PasswordRiskLevel,
  type Validator,
} from './Content';
import zhCN from './locale/zh-CN';

type FormItemInputContextValue = {
  status?: string;
  isFormItemInput?: boolean;
};

const FormItemInputContext =
  (
    Form.Item.useStatus as typeof Form.Item.useStatus & {
      Context?: React.Context<FormItemInputContextValue>;
    }
  ).Context ?? React.createContext<FormItemInputContextValue>({});

export interface PasswordLocale extends CloudPasswordLocale {
  placeholder: string;
  generatePlaceholder: string;
  randomlyGenerate: string;
  pleaseRememberYourPassword: string;
  copySuccessfully: string;
  copyPassword: string;
  passwordStrengthRules: string;
  confirmMismatchMessage: string;
}

export interface PasswordProps extends LocaleWrapperProps, Omit<InputPasswordProps, 'onChange'> {
  value?: string;
  onChange?: (value?: string) => void;
  generatePassword?: () => string;
  rules?: Validator[];
  generatePasswordRegex?: RegExp;
  locale?: PasswordLocale;
  /** `new` shows strength popover; `plain` is a simple password input for current password. */
  mode?: 'new' | 'plain';
}

const Password: React.FC<PasswordProps> = ({
  value,
  locale,
  rules,
  onChange,
  generatePassword,
  generatePasswordRegex,
  mode = 'new',
  onFocus: restOnFocus,
  onBlur: restOnBlur,
  autoComplete: autoCompleteProp,
  readOnly: readOnlyProp,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const [isFocused, setIsFocused] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | undefined>(value);
  const strengthRulesId = useId();
  const formItemStatus = React.useContext(FormItemInputContext);
  const isInFormItem = Boolean(formItemStatus?.isFormItemInput);
  const formHasError = isInFormItem && formItemStatus?.status === 'error';

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const cloudLocale = locale!;
  const activeRules = rules || getCloudPasswordValidators(cloudLocale);

  const getAnalysis = useCallback(
    (newValue?: string, interactive = false) => {
      if (mode === 'plain') {
        const empty = !newValue;
        return {
          passed: !empty,
          failedRuleCount: empty ? 1 : 0,
          riskLevel: (empty ? 'none' : 'success') as PasswordRiskLevel,
          fieldError: empty && interactive ? cloudLocale.emptyMessage : undefined,
          ruleStatuses: [],
          fieldErrors: [],
        };
      }
      return analyzeCloudPassword(newValue, cloudLocale, { touched: interactive });
    },
    [cloudLocale, mode]
  );

  const popoverInteractive = Boolean(displayValue) || isFocused;
  const analysis = getAnalysis(displayValue, popoverInteractive || hasBlurred);
  const blurFeedbackMessage = hasBlurred && !formHasError ? analysis.fieldError : undefined;
  const showRememberHint =
    mode === 'new' &&
    value &&
    analysis.passed &&
    !blurFeedbackMessage &&
    !formHasError &&
    hasBlurred;

  const getRandomPassword = () => {
    const newValue = new RandExp(generatePasswordRegex!).gen();
    if (generatePasswordRegex!.test(newValue)) {
      return newValue;
    }
    return getRandomPassword();
  };

  const passwordInput = (
    <Input.Password
      {...restProps}
      value={value}
      autoComplete={autoCompleteProp ?? (mode === 'plain' ? 'current-password' : 'new-password')}
      readOnly={readOnlyProp}
      aria-haspopup={mode === 'new' ? 'dialog' : undefined}
      aria-describedby={mode === 'new' ? strengthRulesId : undefined}
      onChange={e => {
        const newValue = e?.target?.value;
        setDisplayValue(newValue);
        onChange?.(newValue);
      }}
      onFocus={e => {
        setIsFocused(true);
        restOnFocus?.(e);
      }}
      onBlur={e => {
        setHasBlurred(true);
        setIsFocused(false);
        restOnBlur?.(e);
      }}
      placeholder={
        generatePasswordRegex ? cloudLocale.generatePlaceholder : cloudLocale.placeholder
      }
    />
  );

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ display: 'flex' }}>
        {mode === 'new' ? (
          <Popover
            open={isFocused}
            onOpenChange={open => {
              if (!open) {
                setIsFocused(false);
              }
            }}
            trigger={[]}
            placement="rightTop"
            // ref: https://github.com/ant-design/ant-design/issues/5899
            // @ts-ignore
            popupAlign={{
              offset: [16, 0],
            }}
            content={
              <Content
                isTouched={popoverInteractive}
                value={displayValue}
                isValidating={false}
                rules={activeRules}
                ruleStatuses={analysis.ruleStatuses}
                riskLevel={analysis.riskLevel}
                rulesRegionId={strengthRulesId}
                rulesAriaLabel={cloudLocale.passwordStrengthRules}
              />
            }
            overlayStyle={{ maxWidth: 400 }}
            overlayInnerStyle={{
              padding: `${token.padding / 2}px ${token.padding}px ${token.padding}px ${token.padding}px`,
            }}
          >
            {passwordInput}
          </Popover>
        ) : (
          passwordInput
        )}
        {generatePasswordRegex && (
          <Button
            onClick={() => {
              setHasBlurred(true);
              const newValue =
                generatePassword instanceof Function ? generatePassword() : getRandomPassword();
              setDisplayValue(newValue);
              onChange?.(newValue);
            }}
            style={{ marginLeft: 8 }}
          >
            {cloudLocale.randomlyGenerate}
          </Button>
        )}
      </div>
      {(blurFeedbackMessage || showRememberHint) && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            marginTop: token.marginXXS,
            fontSize: token.fontSizeSM,
            lineHeight: token.lineHeight,
          }}
        >
          {showRememberHint ? (
            <div style={{ color: token.colorTextDescription }}>
              {cloudLocale.pleaseRememberYourPassword}
              <Typography.Text
                copyable={{
                  text: value,
                  icon: [
                    <Space key="copy" size={token.marginXXS}>
                      <CopyOutlined aria-hidden />
                      <a>{cloudLocale.copyPassword}</a>
                    </Space>,
                    <Space key="copy-success" size={token.marginXXS}>
                      <CheckOutlined aria-hidden />
                      <a>{cloudLocale.copyPassword}</a>
                    </Space>,
                  ],
                  tooltips: [cloudLocale.copyPassword, cloudLocale.copySuccessfully],
                }}
                style={{ marginLeft: token.marginXXS }}
              />
            </div>
          ) : (
            <div role="alert" style={{ color: token.colorError }}>
              {blurFeedbackMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'Password',
  defaultLocale: zhCN,
})(Password);
