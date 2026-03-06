import type { FC, ReactNode } from 'react';
import React, { isValidElement, useCallback, useEffect, useMemo, useRef } from 'react';
import theme from '../../theme';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterCollapsed } from '../hooks/useFilterCollapsed';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { generateFilterId, getPlaceholder, getWrappedValueStyle, wrapContent } from '../utils';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';

export interface FilterSlotProps extends BaseFilterProps, InternalFilterProps {
  /** Popover 弹框中的自定义内容，或 customRender 模式下直接渲染的内容 */
  children: ReactNode;
  /** 当前筛选值（受控） */
  value?: any;
  /** 默认筛选值（非受控） */
  defaultValue?: any;
  /** 值变化回调 */
  onChange?: (value: any) => void;
  /** 将 value 格式化为展示文本，用于 FilterButton 标签和折叠态 Tooltip */
  formatValue?: (value: any) => string;
  /** 未选值时的占位文本 */
  placeholder?: string;
  /**
   * 是否启用完全自定义渲染模式。
   * 开启后 children 在正常态和折叠态都直接渲染，不包裹 FilterButton + Popover，
   * Slot 仅作为响应式收集的包裹容器。
   * 默认 false
   */
  customRender?: boolean;
}

const FilterSlot: FC<FilterSlotProps> = ({
  children,
  value,
  defaultValue,
  onChange,
  formatValue,
  placeholder,
  icon,
  label,
  bordered = true,
  loading = false,
  customRender = false,
  _isCollapsed = false,
  ...restProps
}) => {
  const isCollapsed = useFilterCollapsed(_isCollapsed);
  const { token } = theme.useToken();
  const { prefixCls } = useFilterStyle();
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('slot', label), [label]);

  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  const [currentValue, setValue] = useControlledState(value, defaultValue, onChange);

  const hasValue = currentValue !== undefined && currentValue !== null && currentValue !== '';
  const formattedText = hasValue && formatValue ? formatValue(currentValue) : '';
  const displayText = hasValue ? formattedText || String(currentValue) : '';
  const currentLabel = hasValue && displayText ? displayText : label;

  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue,
    label,
    content: displayText || null,
    disabled: isCollapsed || customRender,
  });

  const handlePopoverOpenChange = (open: boolean) => {
    onPopoverOpenChange(open);
    externalOnOpenChange?.(open);
  };

  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(
        filterId,
        label,
        currentValue,
        [{ formattedText }],
        'slot' as FilterComponentName
      );
    }
  }, [isCollapsed, updateFilterValue, filterId, label, currentValue, formattedText]);

  const handleClear = () => {
    setValue(undefined);
  };

  const handleChildChange = useCallback(
    (...args: any[]) => {
      const firstArg = args[0];
      let newValue: any;
      if (
        firstArg &&
        typeof firstArg === 'object' &&
        'target' in firstArg &&
        typeof firstArg.target === 'object'
      ) {
        newValue = 'value' in firstArg.target ? firstArg.target.value : firstArg.target.checked;
      } else {
        newValue = firstArg;
      }
      setValue(newValue);
    },
    [setValue]
  );

  const renderCustomChildren = useCallback(() => {
    if (isValidElement(children)) {
      const childElement = children as React.ReactElement<any>;
      const originalOnChange = childElement.props?.onChange;
      return React.cloneElement(childElement, {
        value: currentValue,
        onChange: (...args: any[]) => {
          handleChildChange(...args);
          originalOnChange?.(...args);
        },
      });
    }
    return children;
  }, [children, currentValue, handleChildChange]);

  // customRender 模式：注入 value/onChange 后直接渲染 children
  if (customRender) {
    if (isCollapsed) {
      return (
        <div style={{ paddingBlock: token.paddingXXS }}>
          <div style={{ marginBottom: 8 }}>{label}</div>
          {renderCustomChildren()}
        </div>
      );
    }
    return <>{renderCustomChildren()}</>;
  }

  // 折叠模式：使用 FilterButton 紧凑布局
  if (isCollapsed) {
    return (
      <div style={{ paddingBlock: token.paddingXXS }}>
        <div style={{ marginBottom: 8 }}>{label}</div>
        <FilterButton
          ref={filterButtonRef}
          icon={icon}
          label={label}
          bordered={bordered}
          onClear={handleClear}
          content={wrapContent(children)}
          loading={loading}
          selected={hasValue}
          onOpenChange={handlePopoverOpenChange}
          {...filterButtonProps}
        >
          <span
            className={getFilterCls(prefixCls, 'text-ellipsis')}
            style={getWrappedValueStyle(hasValue)}
          >
            {hasValue ? displayText : placeholder || getPlaceholder()}
          </span>
        </FilterButton>
      </div>
    );
  }

  // 默认模式：FilterButton + Popover
  const wrappedContent = wrapContent(children);

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      loading={loading}
      selected={hasValue}
      onOpenChange={handlePopoverOpenChange}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
        {hasValue ? currentLabel : placeholder || label}
      </span>
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default FilterSlot;
