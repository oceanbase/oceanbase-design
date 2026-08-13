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
  /**
   * 直接渲染的自定义内容，不包裹 FilterButton + Popover。
   * Filter.Slot 仅作为响应式收集的包裹容器，
   * 会通过 cloneElement 自动注入 value/onChange。
   */
  children?: ReactNode;
  /**
   * Popover 弹框中的自定义筛选内容。
   * 设置后使用 FilterButton + Popover 模式，
   * 会通过 cloneElement 自动注入 value/onChange。
   */
  dropdownRender?: ReactNode;
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
}

const FilterSlot: FC<FilterSlotProps> = ({
  children,
  dropdownRender,
  value,
  defaultValue,
  onChange,
  formatValue,
  placeholder,
  icon,
  label,
  bordered = true,
  loading = false,
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

  const isDirectRender = !dropdownRender;

  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue,
    label,
    content: displayText || null,
    disabled: isCollapsed || isDirectRender,
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

  const injectValueProps = useCallback(
    (element: ReactNode) => {
      if (isValidElement(element)) {
        const childElement = element as React.ReactElement<any>;
        const originalOnChange = childElement.props?.onChange;
        return React.cloneElement(childElement, {
          value: currentValue,
          onChange: (...args: any[]) => {
            handleChildChange(...args);
            originalOnChange?.(...args);
          },
        });
      }
      return element;
    },
    [currentValue, handleChildChange]
  );

  // ======== 直接渲染模式（仅 children，无 dropdownRender） ========
  if (isDirectRender) {
    if (isCollapsed) {
      return (
        <div style={{ paddingBlock: token.paddingXXS }}>
          <div style={{ marginBottom: 8 }}>{label}</div>
          {injectValueProps(children)}
        </div>
      );
    }
    return <>{injectValueProps(children)}</>;
  }

  // ======== Popover 模式（设置了 dropdownRender） ========
  const wrappedContent = wrapContent(injectValueProps(dropdownRender));

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
          content={wrappedContent}
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
