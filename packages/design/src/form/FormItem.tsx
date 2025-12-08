import React, { useContext } from 'react';
import type { ReactNode } from 'react';
import { Form as AntForm } from 'antd';
import type { FormItemLayout } from 'antd/es/form/Form';
import { FormContext } from 'antd/es/form/context';
import type { FormItemProps as AntFormItemProps } from 'antd/es/form';
import { isPlainObject } from 'lodash';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import type { TooltipProps } from '../tooltip';
import { useTooltipTypeList } from '../tooltip/hooks/useTooltipTypeList';
import useStyle from './style';

const AntFormItem = AntForm.Item;

export * from 'antd/es/form/FormItem';

export type WrapperTooltipProps = Omit<TooltipProps, 'mouseFollow'> & {
  icon?: React.ReactElement;
};

export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;

export interface FormItemProps extends AntFormItemProps {
  tooltip?: WrapperTooltipProps | ReactNode;
  action?: ReactNode;
  description?: ReactNode;
}

type CompoundedComponent = React.FC<FormItemProps> & {
  useStatus: typeof AntFormItem.useStatus;
};

const FormItem: CompoundedComponent = ({
  children,
  label,
  tooltip,
  action,
  description,
  layout: externalLayout,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('form', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const formItemCls = classNames(className, {
    [`${prefixCls}-item-has-description`]: !!description,
  });

  const {
    layout: contextLayout,
    // compatible with vertical for version < antd 27.0.0
    // ref: https://github.com/ant-design/ant-design/pull/54611
    // @ts-ignore
    vertical,
  } = useContext(FormContext);
  const layout = externalLayout || (contextLayout as FormItemLayout);

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

  // description config - only show in vertical layout
  const isVertical = layout === 'vertical' || vertical;
  const descriptionContent: ReactNode =
    description && isVertical ? (
      <div className={`${prefixCls}-item-description`}>{description}</div>
    ) : null;
  const actionContent: ReactNode =
    action && (layout === 'vertical' || vertical) ? (
      <span className={`${prefixCls}-item-action`}>{action}</span>
    ) : null;

  return wrapSSR(
    <AntFormItem
      layout={layout}
      label={
        actionContent || descriptionContent ? (
          <div>
            {label}
            {actionContent}
            {descriptionContent}
          </div>
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
