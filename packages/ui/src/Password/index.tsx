import { Button, Form, Input, Popover, theme } from '@oceanbase/design';
import type { FormItemChildFeedback } from '@oceanbase/design/es/form/FormItemChildFeedback';
import type { PasswordProps as InputPasswordProps } from '@oceanbase/design/es/input';
import RandExp from 'randexp';
import React, { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import Content, {
  analyzeCloudPassword,
  analyzeCustomPassword,
  getCloudPasswordValidators,
  type CloudPasswordLocale,
  type PasswordRiskLevel,
  type Validator,
} from './Content';
import zhCN from './locale/zh-CN';
import { PasswordRememberHint } from './RememberHint';

type FormItemInputContextValue = {
  status?: string;
  isFormItemInput?: boolean;
  errors?: string[];
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
}

const Password: React.FC<PasswordProps> = ({
  value,
  locale,
  rules,
  onChange,
  generatePassword,
  generatePasswordRegex,
  onFocus: restOnFocus,
  onBlur: restOnBlur,
  autoComplete: autoCompleteProp,
  readOnly: readOnlyProp,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const autoComplete = autoCompleteProp ?? 'new-password';
  const isCurrentPassword = autoComplete === 'current-password';
  const [isFocused, setIsFocused] = useState(false);
  const [hasBlurred, setHasBlurred] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | undefined>(value);
  const strengthRulesId = useId();
  const formItemChildFeedback = Form.useFormItemChildFeedback();
  const formItemStatus = React.useContext(FormItemInputContext);
  const isInFormItem = Boolean(formItemStatus?.isFormItemInput);
  const formHasError = isInFormItem && (formItemStatus?.errors?.length ?? 0) > 0;

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const cloudLocale = locale!;
  const activeRules = rules || getCloudPasswordValidators(cloudLocale);

  const getAnalysis = useCallback(
    (newValue?: string, interactive = false) => {
      if (isCurrentPassword) {
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
      if (rules) {
        return analyzeCustomPassword(newValue, rules, cloudLocale, { touched: interactive });
      }
      return analyzeCloudPassword(newValue, cloudLocale, { touched: interactive });
    },
    [cloudLocale, isCurrentPassword, rules]
  );

  const popoverInteractive = Boolean(displayValue) || isFocused;
  const analysis = getAnalysis(displayValue, popoverInteractive || hasBlurred);
  const blurFeedbackMessage = hasBlurred && !formHasError ? analysis.fieldError : undefined;
  const showRememberHint =
    !isCurrentPassword &&
    displayValue &&
    analysis.passed &&
    !blurFeedbackMessage &&
    !formHasError &&
    hasBlurred;

  const fieldFeedback = useMemo((): FormItemChildFeedback => {
    if (formHasError) return null;
    if (blurFeedbackMessage) return { help: blurFeedbackMessage, validateStatus: 'error' };
    if (showRememberHint) {
      return {
        help: <PasswordRememberHint value={displayValue} locale={cloudLocale} />,
      };
    }
    return null;
  }, [formHasError, blurFeedbackMessage, showRememberHint, displayValue, cloudLocale]);

  useEffect(() => {
    if (!formItemChildFeedback) return;
    formItemChildFeedback.setFeedback(fieldFeedback);
  }, [formItemChildFeedback, fieldFeedback]);

  useEffect(() => {
    if (!formItemChildFeedback) return;
    return () => formItemChildFeedback.setFeedback(null);
  }, [formItemChildFeedback]);

  const showInlineFeedback = !formItemChildFeedback && (blurFeedbackMessage || showRememberHint);

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
      autoComplete={autoComplete}
      readOnly={readOnlyProp}
      aria-haspopup={!isCurrentPassword ? 'dialog' : undefined}
      aria-describedby={!isCurrentPassword ? strengthRulesId : undefined}
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
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex' }}>
        {!isCurrentPassword ? (
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
      {showInlineFeedback && (
        <div
          style={{
            marginTop: token.marginXXS,
            fontSize: token.fontSizeSM,
            lineHeight: token.lineHeightSM,
          }}
        >
          {showRememberHint ? (
            <PasswordRememberHint value={displayValue} locale={cloudLocale} />
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

export type { Validator } from './Content';
