import React, { useContext } from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps } from 'antd/es/form';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Item from './FormItem';
import useStyle from './style';

export * from 'antd/es/form';
export type { FormItemProps } from './FormItem';

export type FormProps = AntFormProps;

type CompoundedComponent = React.FC<FormProps> & {
  Item: typeof Item;
  List: typeof AntForm.List;
  ErrorList: typeof AntForm.ErrorList;
  useForm: typeof AntForm.useForm;
  useFormInstance: typeof AntForm.useFormInstance;
  useWatch: typeof AntForm.useWatch;
  Provider: typeof AntForm.Provider;
  create: typeof AntForm.create;
};

const Form: CompoundedComponent = ({
  hideRequiredMark,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls, form: contextForm } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('form', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const formCls = classNames(className);

  return wrapSSR(
    // @ts-ignore to ignore children type error
    <AntForm
      requiredMark={
        // could remove hideRequiredMark logic after https://github.com/ant-design/ant-design/pull/46299 is published
        hideRequiredMark
          ? false
          : contextForm?.requiredMark !== undefined
            ? contextForm?.requiredMark
            : 'optional'
      }
      hideRequiredMark={hideRequiredMark}
      preserve={false}
      prefixCls={customizePrefixCls}
      className={formCls}
      {...restProps}
    />
  );
};

Form.Item = Item;
Form.List = AntForm.List;
Form.ErrorList = AntForm.ErrorList;
Form.useForm = AntForm.useForm;
Form.useFormInstance = AntForm.useFormInstance;
Form.useWatch = AntForm.useWatch;
Form.Provider = AntForm.Provider;
Form.create = AntForm.create;

export default Form;
