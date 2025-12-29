import type { FC, ReactNode } from 'react';
import React, { Children, isValidElement, useCallback, useContext, useMemo } from 'react';
import { theme, Flex } from '@oceanbase/design';
import ConfigProvider from '../../config-provider';
import type { Locale } from '../../locale';
import enUS from '../../locale/en-US';
import {
  FilterProvider,
  useFilterContext,
  type FilterComponentName,
  type FilterValue,
} from '../FilterContext';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
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
          <Flex key={item.id} gap={4} style={{ maxWidth: '300px' }}>
            <div style={{ color: token.colorTextLabel, whiteSpace: 'nowrap' }}>{item.label}:</div>
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

  // 使用 Tooltip hook
  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue: filterValues && filterValues.length > 0,
    // label: filterLabel,
    content: tooltipTitle,
    disabled: !collapsed,
  });

  // 如果不使用折叠模式，按原来的方式渲染
  if (!collapsed) {
    return <Flex gap={gap}>{children}</Flex>;
  }

  // 使用折叠模式
  const handleClear = () => {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        const props = child.props as { onChange?: (value: unknown) => void };
        if (props.onChange) {
          props.onChange(undefined);
        }
      }
    });
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
              const stableKey = child.key || `filter-wrap-child-${index}`;
              return <React.Fragment key={stableKey}>{child}</React.Fragment>;
            }
            return child;
          })}
        </Flex>
      </div>
    </FilterProvider>
  );

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={filterLabel}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      extra={extra}
      showSuffixIcon={false}
      showLabelDivider={!!restProps.footer}
      onOpenChange={open => {
        onPopoverOpenChange(open);
        externalOnOpenChange?.(open);
      }}
      {...filterButtonProps}
    >
      <span>{filterLabel}</span>
      <CountNumber count={filterValues.length} />
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default FilterWrap;
