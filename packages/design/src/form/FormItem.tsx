import { Form as AntForm } from 'antd';
import type { FormItemProps as AntFormItemProps } from 'antd/es/form';
import type { ReactNode } from 'react';
import React from 'react';
import type { TooltipProps } from '../tooltip';
import { useTooltipTypeList } from '../tooltip/hooks/useTooltipTypeList';
import { isPlainObject } from 'lodash';

const AntFormItem = AntForm.Item;

export type WrapperTooltipProps = Omit<TooltipProps, 'mouseFollow'> & {
  icon?: React.ReactElement;
};

export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;

export interface FormItemProps extends AntFormItemProps {
  tooltip?: WrapperTooltipProps | ReactNode;
}

const Item: React.FC<FormItemProps> = ({ children, tooltip, ...restProps }) => {
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

  return (
    <AntFormItem
      tooltip={tooltip}
      // auto set required for Switch children to hide optional mark
      // @ts-ignore
      required={isPlainObject(children) && children.type?.__ANT_SWITCH ? true : undefined}
      {...restProps}
    >
      {children}
    </AntFormItem>
  );
};

const FormItem = Item as typeof AntFormItem;

FormItem.useStatus = AntFormItem.useStatus;

export default FormItem;
