import { Flex, Tooltip, theme } from '@oceanbase/design';
import { CheckOutlined } from '@oceanbase/icons';
import type { FC, ReactNode } from 'react';
import React, { useRef } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { getPlaceholder, getWrappedValueStyle, wrapContent } from '../utils';
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
  _isInWrap = false,
  ...restProps
}) => {
  const isWrapped = useFilterWrapped(_isInWrap);
  const { token } = theme.useToken();
  const { prefixCls } = useFilterStyle();
  const filterButtonRef = useRef<FilterButtonRef>(null);

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps as any;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, '', onChange);

  const currentLabel = options.find(option => option.value === currentValue)?.label || label;

  const handleChange = (option: SelectOption) => {
    if (option.disabled) {
      return;
    }
    setValue(option.value);
    // 选择后立即关闭弹出层
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
              {isSelected && <CheckOutlined style={{ color: '#1616ff' }} />}
            </span>
          </Flex>
        );
      })}
    </div>
  );

  const wrappedContent = wrapContent(renderContent);

  // 获取选中值的显示文本
  const selectedValueText = currentValue
    ? options.find(option => option.value === currentValue)?.label
    : null;

  // 生成 Tooltip 内容
  const tooltipTitle = selectedValueText ? `${label}: ${selectedValueText}` : null;

  if (isWrapped) {
    const hasValue = !!currentValue;

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
        {...filterButtonProps}
      >
        <span
          className={getFilterCls(prefixCls, 'text-ellipsis')}
          style={getWrappedValueStyle(hasValue)}
        >
          {hasValue ? currentLabel : getPlaceholder()}
        </span>
      </FilterButton>
    );

    return (
      <div style={{ padding: 'var(--ob-space-100) 0px' }}>
        <div style={{ marginBottom: 8 }}>{label}</div>
        {tooltipTitle ? (
          <Tooltip mouseEnterDelay={0.8} title={tooltipTitle} open={isWrapped ? false : undefined}>
            {filterButton}
          </Tooltip>
        ) : (
          filterButton
        )}
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
      selected={!!currentValue}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{currentLabel}</span>
    </FilterButton>
  );

  return tooltipTitle ? (
    <Tooltip mouseEnterDelay={0.8} title={tooltipTitle}>
      {filterButton}
    </Tooltip>
  ) : (
    filterButton
  );
};

export default FilterSelect;
