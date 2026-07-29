import React from 'react';
import type { ReactNode } from 'react';
import { QuestionCircleOutlined } from '@oceanbase/icons';
import Space from '../space';
import Tooltip from '../tooltip';
import type { TooltipProps } from '../tooltip';
import type { WrapperTooltipProps } from '../form/FormItem';
import { useTooltipTypeList } from '../tooltip/hooks/useTooltipTypeList';

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
  if (React.isValidElement(tooltip)) {
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
    if (React.isValidElement(tooltip)) {
      return tooltip;
    }

    let tooltipProps: TooltipProps = { placement: 'top', title: '' };
    let icon: ReactNode = <QuestionCircleOutlined className={iconCls} />;

    if (typeof tooltip === 'object') {
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
