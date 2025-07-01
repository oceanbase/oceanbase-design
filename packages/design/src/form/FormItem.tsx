import React, { useContext } from 'react';
import type { ReactNode } from 'react';
import { Form as AntForm } from 'antd';
import { FormContext } from 'antd/es/form/context';
import type { FormItemProps as AntFormItemProps } from 'antd/es/form';
import { isPlainObject } from 'lodash';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { TooltipProps } from '../tooltip';
import { useTooltipTypeList } from '../tooltip/hooks/useTooltipTypeList';
import useStyle from './style';

const AntFormItem = AntForm.Item;

export type WrapperTooltipProps = Omit<TooltipProps, 'mouseFollow'> & {
  icon?: React.ReactElement;
};

export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;

export interface FormItemProps extends AntFormItemProps {
  tooltip?: WrapperTooltipProps | ReactNode;
  action?: ReactNode;
}

type CompoundedComponent = React.FC<FormItemProps> & {
  useStatus: typeof AntFormItem.useStatus;
};

const FormItem: CompoundedComponent = ({
  children,
  label,
  tooltip,
  action,
  layout,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('form', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const formItemCls = classNames(className);

  const { vertical } = useContext(FormContext);

  const typeList = useTooltipTypeList();
  // tooltip config
  if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
    const { icon, type, overlayInnerStyle, ...restTooltipProps } = tooltip as WrapperTooltipProps;
    const typeItem = typeList.find(item => item.type === type);
    tooltip = {
      color: typeItem?.backgroundColor,
      overlayInnerStyle: {
        color: typeItem?.color,
        ...overlayInnerStyle,
      },
      ...restTooltipProps,
    };
  }

  return wrapSSR(
    <AntFormItem
      layout={layout}
      label={
        action && (vertical || layout === 'vertical') ? (
          <>
            {label}
            {action && <span className={`${prefixCls}-item-action`}>{action}</span>}
          </>
        ) : (
          label
        )
      }
      tooltip={tooltip}
      // auto set required for Switch children to hide optional mark
      // @ts-ignore
      required={isPlainObject(children) && children.type?.__ANT_SWITCH ? true : undefined}
      prefixCls={customizePrefixCls}
      className={formItemCls}
      {...restProps}
    >
      {children}
    </AntFormItem>
  );
};

FormItem.useStatus = AntFormItem.useStatus;

export default FormItem;
