import { Flex, Tooltip } from '@oceanbase/design';
import type { FC, ReactNode } from 'react';
import React, {
  Children,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FilterProvider, useFilterContext, type FilterValueItem } from '../FilterContext';
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
}

const FilterWrap: FC<FilterWrapProps> = ({
  children,
  label = 'Filters',
  icon,
  bordered = true,
  collapsed = false,
  extra,
  filterButtonRef,
  ...restProps
}) => {
  // 只在折叠模式下才需要读取 filterValues
  const contextValue = useFilterContext();
  const filterValues = useMemo(() => {
    if (!collapsed) return [];
    return contextValue.filterValues || [];
  }, [collapsed, contextValue.filterValues]);

  // 格式化值用于 Tooltip 显示
  const formatValueForTooltip = useCallback(
    (value: any, options?: any[], componentName?: string): string => {
      if (!value) return '';

      if (componentName?.includes('select')) {
        const selectedOption = options?.find((opt: any) => opt.value === value);
        return selectedOption?.label || String(value);
      } else if (componentName?.includes('checkbox')) {
        const selectedLabels = (value as string[])
          .map(val => {
            const option = options?.find((opt: any) => opt.value === val);
            return option?.label || val;
          })
          .filter(Boolean);
        return selectedLabels.join(', ');
      } else if (componentName?.includes('cascader')) {
        const selectedLabels = (value as string[][]).map(valPair => {
          const [parentVal, childVal] = valPair;
          const parentOption = options?.find((opt: any) => opt.value === parentVal);
          const childOption = parentOption?.children?.find(
            (childOpt: any) => childOpt.value === childVal
          );
          if (parentOption && childOption) {
            return childOption.label;
          }
          return valPair.join('/');
        });
        return selectedLabels.join(', ');
      } else if (componentName?.includes('switch')) {
        // switch 组件的 false 值不显示
        if (value) {
          return '开启';
        } else {
          return '';
        }
      } else if (componentName?.includes('datepreset')) {
        const selectedOption = options?.find((opt: any) => opt.value === value);
        return selectedOption?.label || String(value);
      } else if (componentName?.includes('input')) {
        return String(value);
      } else {
        return String(value);
      }
    },
    []
  );

  // 生成 Tooltip 内容
  const tooltipTitle = useMemo(() => {
    if (!collapsed || !filterValues || filterValues.length === 0) {
      return '';
    }

    return (
      <div style={{ maxWidth: 300, padding: '0px 4px' }}>
        {filterValues.map((item, index) => {
          const formattedValue = formatValueForTooltip(
            item.value,
            item.options,
            item.componentName
          );
          if (!formattedValue) {
            return '';
          }

          return (
            <Flex key={item.id} gap={16}>
              <div
                style={{ color: 'var(--ob-color-text-label)', minWidth: 50, whiteSpace: 'nowrap' }}
              >
                {item.label}
              </div>
              <div>{formattedValue}</div>
            </Flex>
          );
        })}
      </div>
    );
  }, [filterValues, formatValueForTooltip, collapsed]);

  // 如果不使用折叠模式，按原来的方式渲染
  if (!collapsed) {
    return <Flex>{children}</Flex>;
  }

  // 使用折叠模式
  const handleClear = () => {
    // 遍历所有子组件，调用它们的 onChange 并设置为 undefined
    Children.forEach(children, child => {
      if (isValidElement(child) && child.props.onChange) {
        child.props.onChange(undefined);
      }
    });
  };

  const content = (
    <div
      style={{
        padding: '16px',
        maxHeight: 350,
        overflowY: 'auto',
        minWidth: 200,
        maxWidth: 300,
        fontSize: 'var(--ob-font-body1)',
      }}
    >
      <Flex vertical gap={'var(--ob-space-200)'}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          }
          return child;
        })}
      </Flex>
    </div>
  );

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps as any;

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      extra={extra}
      showArrow={false}
      showLabelDivider={!!restProps.footer}
      {...filterButtonProps}
    >
      <span>{label}</span>
      <CountNumber count={filterValues.length} />
    </FilterButton>
  );

  return (
    <Tooltip mouseEnterDelay={0.8} title={tooltipTitle || null}>
      {filterButton}
    </Tooltip>
  );
};

export default FilterWrap;
