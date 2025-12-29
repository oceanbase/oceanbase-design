import type { FC, ReactNode } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import { Flex } from 'antd';
import theme from '../../theme';
import { CheckOutlined } from '@oceanbase/icons';
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

export interface SelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface FilterSelectProps extends BaseFilterProps, InternalFilterProps {
  /** 选项列表 */
  options?: SelectOption[];
  /** 当前选中值 */
  value?: string;
  /** 值变化回调 */
  onChange?: (value: string) => void;
  /** 自定义渲染选项 */
  optionRender?: (option: SelectOption, info: { index: number }) => ReactNode;
}

const FilterSelect: FC<FilterSelectProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  optionRender,
  loading = false,
  _isCollapsed = false,
  ...restProps
}) => {
  const isCollapsed = useFilterCollapsed(_isCollapsed);
  const { token } = theme.useToken();
  const { prefixCls } = useFilterStyle();
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('select', label), [label]);

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, '', onChange);

  // 获取选中值的 label
  const selectedOption = options.find(option => option.value === currentValue);
  const selectedLabel = selectedOption?.label;
  const currentLabel = selectedLabel || label;

  // 使用 Tooltip hook
  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue: !!currentValue,
    label,
    content: selectedLabel ? selectedLabel : null,
    disabled: isCollapsed, // 折叠模式下禁用 Tooltip
  });

  // 处理 Popover 状态变化
  const handlePopoverOpenChange = (open: boolean) => {
    onPopoverOpenChange(open);
    externalOnOpenChange?.(open);
  };

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, options, 'select' as FilterComponentName);
    }
  }, [isCollapsed, updateFilterValue, filterId, label, currentValue, options]);

  const handleChange = (option: SelectOption) => {
    if (option.disabled) {
      return;
    }
    setValue(option.value);
    filterButtonRef.current?.closePopover();
  };

  const handleClear = () => {
    setValue('');
  };

  // 渲染弹框内容
  const renderContent = (
    <div>
      {options.map((option, index) => {
        const isSelected = currentValue === option.value;
        const isDisabled = option.disabled || false;

        return (
          <Flex
            gap={8}
            key={option.value}
            className={getFilterCls(prefixCls, 'select-option')}
            onClick={() => handleChange(option)}
            justify="space-between"
            style={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              color: isDisabled ? token.colorTextDisabled : 'inherit',
            }}
          >
            {optionRender ? (
              <div style={{ flex: 1 }}>{optionRender(option, { index })}</div>
            ) : (
              <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</span>
            )}
            <span style={{ width: 14, flexShrink: 0 }}>
              {isSelected && <CheckOutlined style={{ color: token.colorPrimary }} />}
            </span>
          </Flex>
        );
      })}
    </div>
  );

  const wrappedContent = wrapContent(renderContent);

  // 折叠模式
  if (isCollapsed) {
    const hasValue = !!currentValue;
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
            {hasValue ? currentLabel : getPlaceholder()}
          </span>
        </FilterButton>
      </div>
    );
  }

  // 正常模式
  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      loading={loading}
      selected={!!currentValue}
      onOpenChange={handlePopoverOpenChange}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{currentLabel}</span>
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default FilterSelect;
