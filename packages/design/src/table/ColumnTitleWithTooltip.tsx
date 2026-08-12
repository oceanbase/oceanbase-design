import React from 'react';
import type { ReactNode } from 'react';
import { QuestionCircleOutlined } from '@oceanbase/icons';
import Space from '../space';
import Tooltip from '../tooltip';
import type { TooltipProps } from '../tooltip';
import type { WrapperTooltipProps } from '../form/FormItem';
import { useTooltipTypeList } from '../tooltip/hooks/useTooltipTypeList';

/**
 * 列头帮助提示，语义与 Form.Item.tooltip 对齐：
 * - ReactNode（含 JSX）作为 Tooltip 提示内容，触发图标默认为问号；
 * - WrapperTooltipProps 通过 `title` 指定内容、`icon` 自定义触发图标。
 */
export type ColumnTooltipType = WrapperTooltipProps | ReactNode;

export function getColumnTooltip(column: Record<string, any>): ColumnTooltipType | undefined {
  return column.tooltip ?? column.tip;
}

export function isValidColumnTooltip(
  tooltip: ColumnTooltipType | undefined
): tooltip is ColumnTooltipType {
  if (tooltip == null || tooltip === '') {
    return false;
  }
  // 字符串、JSX、数组等 ReactNode 均视为有效提示内容
  if (React.isValidElement(tooltip) || Array.isArray(tooltip)) {
    return true;
  }
  if (typeof tooltip === 'object') {
    const { title, icon } = tooltip as WrapperTooltipProps;
    if (icon) {
      return true;
    }
    if (title != null && title !== '') {
      return true;
    }
    return false;
  }
  return true;
}

export interface ColumnTitleWithTooltipProps {
  title?: ReactNode;
  tooltip: ColumnTooltipType;
  prefixCls: string;
}

export const ColumnTitleWithTooltip: React.FC<ColumnTitleWithTooltipProps> = ({
  title,
  tooltip,
  prefixCls,
}) => {
  const typeList = useTooltipTypeList();
  const iconCls = `${prefixCls}-column-title-tooltip-icon`;

  const renderTooltipTrigger = () => {
    let tooltipProps: TooltipProps = { placement: 'top', title: '' };
    let icon: ReactNode = <QuestionCircleOutlined className={iconCls} />;

    // 与 Form.Item.tooltip 语义对齐：只有普通对象按 WrapperTooltipProps 解析，
    // 字符串、JSX 与数组一律作为 Tooltip 内容（title），而不是当作触发元素直接平铺渲染
    if (typeof tooltip === 'object' && !React.isValidElement(tooltip) && !Array.isArray(tooltip)) {
      const {
        icon: customIcon,
        type,
        overlayInnerStyle,
        ...restTooltipProps
      } = tooltip as WrapperTooltipProps;
      const typeItem = typeList.find(item => item.type === type);
      tooltipProps = {
        placement: 'top',
        color: typeItem?.backgroundColor,
        overlayInnerStyle: {
          color: typeItem?.color,
          ...overlayInnerStyle,
        },
        ...restTooltipProps,
      };
      if (customIcon) {
        icon = customIcon;
      }
    } else {
      tooltipProps = { placement: 'top', title: tooltip };
    }

    return <Tooltip {...tooltipProps}>{icon}</Tooltip>;
  };

  const hasTitle = title != null && title !== '';

  if (!hasTitle) {
    return <>{renderTooltipTrigger()}</>;
  }

  return (
    <Space size={4}>
      {title}
      {renderTooltipTrigger()}
    </Space>
  );
};

export function injectColumnTitleTooltip<T extends Record<string, any>>(
  column: T,
  prefixCls: string
): T {
  const tooltip = getColumnTooltip(column);
  if (!isValidColumnTooltip(tooltip)) {
    return column;
  }

  const {
    tooltip: _tooltip,
    tip: _tip,
    title: originalTitle,
    ...rest
  } = column as T & {
    tooltip?: ColumnTooltipType;
    tip?: ColumnTooltipType;
    title?: ReactNode | ((...args: any[]) => ReactNode);
  };

  return {
    ...rest,
    title: ((...titleProps: any[]) => (
      <ColumnTitleWithTooltip
        prefixCls={prefixCls}
        tooltip={tooltip}
        title={typeof originalTitle === 'function' ? originalTitle(...titleProps) : originalTitle}
      />
    )) as T['title'],
  } as unknown as T;
}
