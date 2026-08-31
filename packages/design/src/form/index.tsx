import React, { forwardRef, useCallback, useContext, useLayoutEffect, useRef } from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps } from 'antd/es/form';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Item from './FormItem';
import { useFormItemChildFeedback } from './FormItemChildFeedback';
import { patchScrollOnValidateError, setScrollToFirstErrorFlag } from './scrollToFirstError';
import useStyle from './style';
import type { FormReValidateMode, FormValidateMode, OBFormConfig } from './validateMode';
import {
  markFormSubmitted,
  revalidateOnChange,
  resolveReValidateMode,
  resolveValidateMode,
  resolveValidateTrigger,
  shouldInjectRevalidateOnChange,
  shouldTrackSubmitAttempt,
  syncBlurredFieldsFromFieldsChange,
  syncSubmittedFromFieldsChange,
} from './validateMode';

export * from 'antd/es/form';
export type { FormItemProps } from './FormItem';
export type { FormReValidateMode, FormValidateMode, OBFormConfig } from './validateMode';

export type FormProps<Values = any> = AntFormProps<Values> & {
  validateMode?: FormValidateMode;
  reValidateMode?: FormReValidateMode;
};

/** Ref exposed by the underlying antd Form: the form instance plus the native `<form>` element. */
type FormRef = React.ComponentRef<typeof AntForm>;

type FormComponent = <Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & React.RefAttributes<FormRef>
) => React.ReactElement;

type CompoundedComponent = FormComponent &
  Pick<React.FC, 'displayName'> & {
    Item: typeof Item;
    List: typeof AntForm.List;
    ErrorList: typeof AntForm.ErrorList;
    useForm: typeof AntForm.useForm;
    useFormInstance: typeof AntForm.useFormInstance;
    useWatch: typeof AntForm.useWatch;
    useFormItemChildFeedback: typeof useFormItemChildFeedback;
    Provider: typeof AntForm.Provider;
    create: typeof AntForm.create;
  };

const InternalForm = forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    hideRequiredMark,
    prefixCls: customizePrefixCls,
    className,
    validateMode: propValidateMode,
    reValidateMode: propReValidateMode,
    validateTrigger: propValidateTrigger,
    onValuesChange,
    onFieldsChange,
    onFinish,
    onFinishFailed,
    form: propForm,
    scrollToFirstError,
    preserve: propPreserve,
    ...restProps
  } = props;
  const { getPrefixCls, form: contextForm } = useContext(ConfigProvider.ConfigContext);
  const obFormConfig = contextForm as OBFormConfig | undefined;

  const validateMode = resolveValidateMode(propValidateMode, obFormConfig?.validateMode);
  const reValidateMode = resolveReValidateMode(propReValidateMode, obFormConfig?.reValidateMode);
  const resolvedValidateTrigger = resolveValidateTrigger(validateMode, propValidateTrigger);
  const injectRevalidate = shouldInjectRevalidateOnChange(
    validateMode,
    reValidateMode,
    propValidateTrigger
  );
  const trackSubmitAttempt = shouldTrackSubmitAttempt(
    validateMode,
    reValidateMode,
    propValidateTrigger
  );
  const trackBlurredFields = validateMode === 'onTouched' && propValidateTrigger === undefined;

  const [fallbackForm] = AntForm.useForm();
  const mergedForm = propForm ?? fallbackForm;

  // Scroll to the first error field by default; explicitly opt out via
  // `scrollToFirstError={false}` or a global `form.scrollToFirstError: false`.
  const mergedScrollToFirstError = scrollToFirstError ?? contextForm?.scrollToFirstError ?? true;

  // Preserve unmounted field values. Precedence: Form prop > ConfigProvider `form.preserve` > OB default `false`.
  const mergedPreserve = propPreserve ?? obFormConfig?.preserve ?? false;

  const blurredFieldsRef = useRef(new Set<string>());
  const submittedRef = useRef(false);

  const markSubmittedIfNeeded = useCallback(() => {
    if (trackSubmitAttempt) {
      markFormSubmitted(submittedRef);
    }
  }, [trackSubmitAttempt]);

  const handleFinish = useCallback(
    (...args: Parameters<NonNullable<AntFormProps['onFinish']>>) => {
      markSubmittedIfNeeded();
      onFinish?.(...args);
    },
    [markSubmittedIfNeeded, onFinish]
  );

  const handleFinishFailed = useCallback(
    (...args: Parameters<NonNullable<AntFormProps['onFinishFailed']>>) => {
      markSubmittedIfNeeded();
      onFinishFailed?.(...args);
    },
    [markSubmittedIfNeeded, onFinishFailed]
  );

  const handleFieldsChange = useCallback(
    (
      changedFields: Parameters<NonNullable<AntFormProps['onFieldsChange']>>[0],
      allFields: Parameters<NonNullable<AntFormProps['onFieldsChange']>>[1]
    ) => {
      if (trackBlurredFields) {
        syncBlurredFieldsFromFieldsChange(blurredFieldsRef.current, changedFields, validateMode);
      }
      if (trackSubmitAttempt) {
        syncSubmittedFromFieldsChange(submittedRef, changedFields, allFields);
      }
      onFieldsChange?.(changedFields, allFields);
    },
    [onFieldsChange, trackBlurredFields, trackSubmitAttempt, validateMode]
  );

  const handleValuesChange = useCallback(
    (
      changedValues: Parameters<NonNullable<AntFormProps['onValuesChange']>>[0],
      allValues: Parameters<NonNullable<AntFormProps['onValuesChange']>>[1]
    ) => {
      if (injectRevalidate && mergedForm) {
        revalidateOnChange(mergedForm, {
          validateMode,
          reValidateMode,
          blurredFields: blurredFieldsRef.current,
          changedValues,
          submitted: submittedRef.current,
        });
      }
      onValuesChange?.(changedValues, allValues);
    },
    [injectRevalidate, mergedForm, onValuesChange, reValidateMode, validateMode]
  );

  const prefixCls = getPrefixCls('form', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const formCls = classNames(className);

  useLayoutEffect(() => {
    patchScrollOnValidateError(mergedForm);
    setScrollToFirstErrorFlag(mergedForm, mergedScrollToFirstError);
  }, [mergedForm, mergedScrollToFirstError]);

  return wrapCSSVar(
    // @ts-ignore to ignore children type error
    <AntForm
      ref={ref}
      requiredMark={
        // could remove hideRequiredMark logic after https://github.com/ant-design/ant-design/pull/46299 is published
        hideRequiredMark
          ? false
          : contextForm?.requiredMark !== undefined
            ? contextForm?.requiredMark
            : 'optional'
      }
      hideRequiredMark={hideRequiredMark}
      preserve={mergedPreserve}
      prefixCls={customizePrefixCls}
      className={formCls}
      form={mergedForm}
      scrollToFirstError={mergedScrollToFirstError}
      validateTrigger={resolvedValidateTrigger}
      onValuesChange={injectRevalidate ? handleValuesChange : onValuesChange}
      onFieldsChange={
        trackBlurredFields || trackSubmitAttempt ? handleFieldsChange : onFieldsChange
      }
      onFinish={trackSubmitAttempt ? handleFinish : onFinish}
      onFinishFailed={trackSubmitAttempt ? handleFinishFailed : onFinishFailed}
      {...restProps}
    />
  );
});

// `InternalForm` is a non-generic forwardRef wrapper; the public Form keeps antd's
// generic <Values> call signature so consumers get the same type inference.
const Form: CompoundedComponent = InternalForm as unknown as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Form.displayName = 'Form';
}

Form.Item = Item;
Form.List = AntForm.List;
Form.ErrorList = AntForm.ErrorList;
Form.useForm = AntForm.useForm;
Form.useFormInstance = AntForm.useFormInstance;
Form.useWatch = AntForm.useWatch;
Form.useFormItemChildFeedback = useFormItemChildFeedback;
Form.Provider = AntForm.Provider;
Form.create = AntForm.create;

export default Form;
