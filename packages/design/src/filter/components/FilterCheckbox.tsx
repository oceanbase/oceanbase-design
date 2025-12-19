import { Checkbox, Flex, Tag, Tooltip, theme } from '@oceanbase/design';
import type { FC, ReactNode } from 'react';
import React, { memo, useCallback, useMemo } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { wrapContent } from '../utils';
import CountNumber from './CountNumber';
import FilterButton from './FilterButton';
import WrappedTagsDisplay from './WrappedTagsDisplay';

export interface CheckboxOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface FilterCheckboxProps extends BaseFilterProps, InternalFilterProps {
  /** 选项列表 */
  options?: CheckboxOption[];
  /** 当前选中值 */
  value?: string[];
  /** 值变化回调 */
  onChange?: (value: string[]) => void;
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  count = false,
  _isInWrap = false,
  ...restProps
}) => {
  const isWrapped = useFilterWrapped(_isInWrap);
  const { prefixCls } = useFilterStyle();
  const { token } = theme.useToken();

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps as any;

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

  // 使用受控状态 hook
  const [selectedValues, setSelectedValues] = useControlledState(value, [], onChange);

  const handleChange = useCallback(
    (val: string[]) => {
      setSelectedValues(val);
    },
    [setSelectedValues]
  );

  const handleClear = useCallback(() => {
    setSelectedValues([]);
  }, [setSelectedValues]);

  // 渲染弹框内容
  const renderContent = useMemo(
    () => (
      <Checkbox.Group
        onChange={handleChange}
        style={{ flexDirection: 'column', width: '100%' }}
        value={selectedValues}
      >
        {options.map(option => {
          const isDisabled = option.disabled || false;
          return (
            <Checkbox
              key={option.value}
              value={option.value}
              disabled={isDisabled}
              className={getFilterCls(prefixCls, 'checkbox-option')}
              style={{
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                color: isDisabled ? token.colorTextDisabled : 'inherit',
              }}
            >
              {option.label}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    ),
    [options, selectedValues, handleChange, prefixCls, token.colorTextDisabled]
  );

  // 获取选中值的 labels
  const getSelectedTags = useCallback(() => {
    return selectedValues.map(val => {
      const option = options.find(opt => opt.value === val);
      return {
        label: option?.label || val,
        value: val,
      };
    });
  }, [selectedValues, options]);

  // 移除某个选中的值
  const handleRemoveTag = useCallback(
    (val: string) => {
      const newValues = selectedValues.filter(v => v !== val);
      setSelectedValues(newValues);
    },
    [selectedValues, setSelectedValues]
  );

  const wrappedContent = wrapContent(renderContent);

  // 如果被 FilterWrap 包裹，使用和其他组件一致的展示逻辑
  if (isWrapped) {
    const hasValue = selectedValues.length > 0;
    const selectedTags = getSelectedTags();

    return (
      <div>
        <div style={{ marginBottom: 8 }}>{label}</div>
        <FilterButton
          icon={icon}
          label={label}
          bordered={bordered}
          onClear={handleClear}
          content={wrappedContent}
          selected={hasValue}
          {...filterButtonProps}
        >
          <WrappedTagsDisplay tags={selectedTags} onRemove={handleRemoveTag} />
        </FilterButton>
      </div>
    );
  }

  const filterButton = (
    <FilterButton
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      selected={!!selectedValues.length}
      {...filterButtonProps}
    >
      <span>{label}</span>
      {showCount && selectedValues.length > 0 && (
        <span>
          <CountNumber count={selectedValues.length} total={showTotal ? options.length : 0} />
        </span>
      )}
    </FilterButton>
  );

  // 多选模式下，如果有选中值且显示计数，用 Tooltip 包裹整个 FilterButton
  if (selectedValues.length > 0) {
    return (
      <Tooltip
        mouseEnterDelay={0.8}
        title={
          <Flex wrap="wrap" gap={4}>
            {getSelectedTags().map(item => (
              <Tag key={item.value} closable onClose={() => handleRemoveTag(item.value)}>
                {item.label}
              </Tag>
            ))}
          </Flex>
        }
      >
        {filterButton}
      </Tooltip>
    );
  }

  return filterButton;
};

export default memo(FilterCheckbox);
