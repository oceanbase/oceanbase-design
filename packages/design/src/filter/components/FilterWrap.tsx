import type { FC, ReactNode } from 'react';
import React, { Children, isValidElement, useCallback, useContext, useMemo, useState } from 'react';
import { Flex } from 'antd';
import Tooltip from '../../tooltip';
import theme from '../../theme';
import ConfigProvider from '../../config-provider';
import type { Locale } from '../../locale';
import enUS from '../../locale/en-US';
import {
  FilterProvider,
  useFilterContext,
  type FilterComponentName,
  type FilterValue,
  type FilterValueItem,
} from '../FilterContext';
import { useTooltipWithPopover } from '../hooks/useTooltipWithPopover';
import type { BaseFilterProps } from '../type';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';
import CountNumber from './CountNumber';

export interface FilterWrapProps extends Omit<BaseFilterProps, 'label'> {
  children: ReactNode;
  label?: ReactNode;
  /** 是否折叠模式（使用弹框包裹所有子元素），默认 false */
  collapsed?: boolean;
  /** 额外内容 */
  extra?: ReactNode;
  filterButtonRef?: React.RefObject<FilterButtonRef>;
  gap?: number;
}

const FilterWrap: FC<FilterWrapProps> = ({
  children,
  label,
  icon,
  bordered = true,
  collapsed = false,
  extra,
  filterButtonRef,
  gap = 8,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const { locale: contextLocale } = useContext(ConfigProvider.ConfigContext);
  const filterLocale = (contextLocale as Locale)?.Filter || enUS.Filter;
  // 始终调用 Hook，但只在折叠模式下使用 filterValues
  const contextValue = useFilterContext();

  // 用于跟踪主弹窗的开启状态
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // 如果没有传入 label，使用国际化默认值
  const filterLabel = label ?? filterLocale?.filters;
  // 稳定化 filterValues 的引用，避免不必要的重新计算
  const stableFilterValuesKey = useMemo(() => {
    if (!collapsed || !contextValue.filterValues) return '';
    return JSON.stringify(contextValue.filterValues.map(item => item.id));
  }, [collapsed, contextValue.filterValues]);

  const filterValues = useMemo(() => {
    if (!collapsed) return [];
    return contextValue.filterValues || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed, stableFilterValuesKey]);

  // 格式化值用于 Tooltip 显示
  const formatValueForTooltip = useCallback(
    (value: FilterValue, options?: unknown[], componentName?: FilterComponentName): string => {
      if (!value) return '';

      switch (componentName) {
        case 'select':
        case 'range': {
          const selectedOption = (options as { value: unknown; label: ReactNode }[])?.find(
            opt => opt.value === value
          );
          return selectedOption?.label ? String(selectedOption.label) : String(value);
        }
        case 'checkbox': {
          const selectedLabels = (value as string[])
            .map(val => {
              const option = (options as { value: string; label: ReactNode }[])?.find(
                opt => opt.value === val
              );
              return option?.label ? String(option.label) : val;
            })
            .filter(Boolean);
          return selectedLabels.join(', ');
        }
        case 'cascader': {
          const selectedLabels = (value as string[][]).map(valPair => {
            const [parentVal, childVal] = valPair;
            const parentOption = (
              options as {
                value: string;
                children?: { value: string; label?: ReactNode }[];
              }[]
            )?.find(opt => opt.value === parentVal);
            const childOption = parentOption?.children?.find(
              childOpt => childOpt.value === childVal
            );
            if (parentOption && childOption) {
              return childOption.label ? String(childOption.label) : childVal;
            }
            return valPair.join('/');
          });
          return selectedLabels.join(', ');
        }
        case 'switch': {
          // switch 组件的 false 值不显示
          return value ? filterLocale?.open : '';
        }
        case 'input': {
          return String(value);
        }
        default: {
          return String(value);
        }
      }
    },
    [filterLocale]
  );

  // 生成 Tooltip 内容
  const tooltipTitle = useMemo(() => {
    if (!collapsed || !filterValues || filterValues.length === 0) {
      return null;
    }

    const validItems = filterValues
      .map(item => {
        const formattedValue = formatValueForTooltip(item.value, item.options, item.componentName);
        if (!formattedValue) {
          return null;
        }

        return (
          <Flex key={item.id} gap={16}>
            <div style={{ color: token.colorTextLabel, minWidth: 50, whiteSpace: 'nowrap' }}>
              {item.label}
            </div>
            <div>{formattedValue}</div>
          </Flex>
        );
      })
      .filter(Boolean);

    if (validItems.length === 0) {
      return null;
    }

    return <div style={{ maxWidth: 300, padding: '0px 4px' }}>{validItems}</div>;
  }, [filterValues, formatValueForTooltip, collapsed, token.colorTextLabel]);

  // 使用 Hook 管理 Tooltip 与 Popover 的交互逻辑
  const { tooltipOpen, onTooltipOpenChange } = useTooltipWithPopover({
    isPopoverOpen,
    enabled: collapsed,
    hasValue: filterValues && filterValues.length > 0,
  });

  // 处理主弹窗状态变化
  const handlePopoverOpenChange = useCallback((open: boolean) => {
    setIsPopoverOpen(open);
  }, []);

  // 如果不使用折叠模式，按原来的方式渲染
  if (!collapsed) {
    return <Flex gap={gap}>{children}</Flex>;
  }

  // 使用折叠模式
  const handleClear = () => {
    // 遍历所有子组件，调用它们的 onChange 并设置为 undefined
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        const props = child.props as { onChange?: (value: unknown) => void };
        if (props.onChange) {
          props.onChange(undefined);
        }
      }
    });
    // 同步清除 context 中的 filterValues
    if (contextValue.clearAllFilterValues) {
      contextValue.clearAllFilterValues();
    }
  };

  const content = (
    <FilterProvider
      isWrapped={true}
      filterValues={contextValue.filterValues}
      updateFilterValue={contextValue.updateFilterValue}
      clearAllFilterValues={contextValue.clearAllFilterValues}
    >
      <div
        style={{
          padding: token.padding,
          maxHeight: 350,
          overflowY: 'auto',
          minWidth: 200,
          maxWidth: 300,
          fontSize: token.fontSize,
          fontWeight: token.fontWeight,
        }}
      >
        <Flex vertical gap={token.sizeXS}>
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              // 使用 child.key 或生成稳定的 key
              const stableKey = child.key || `filter-wrap-child-${index}`;
              return <React.Fragment key={stableKey}>{child}</React.Fragment>;
            }
            return child;
          })}
        </Flex>
      </div>
    </FilterProvider>
  );

  // 从 restProps 中排除 showArrow 和 onOpenChange，避免类型冲突
  const {
    showArrow: _showArrowFilter,
    onOpenChange: externalOnOpenChange,
    ...filterButtonProps
  } = restProps;

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={filterLabel}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      extra={extra}
      showArrow={false}
      showLabelDivider={!!restProps.footer}
      onOpenChange={open => {
        handlePopoverOpenChange(open);
        externalOnOpenChange?.(open);
      }}
      {...filterButtonProps}
    >
      <span>{filterLabel}</span>
      <CountNumber count={filterValues.length} />
    </FilterButton>
  );

  return (
    <Tooltip
      mouseEnterDelay={0.8}
      title={tooltipTitle || null}
      open={tooltipOpen}
      onOpenChange={onTooltipOpenChange}
    >
      {filterButton}
    </Tooltip>
  );
};

export default FilterWrap;
