import type { FC, ReactNode } from 'react';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Checkbox, theme, Badge } from '@oceanbase/design';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { generateFilterId, getStableOptionsKey, wrapContent } from '../utils';
import CountNumber from './CountNumber';
import FilterButton from './FilterButton';
import WrappedTagsDisplay from './WrappedTagsDisplay';

export interface CheckboxOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
  /** 状态颜色，如果提供则启用状态模式（显示重叠图标、使用 Badge 显示） */
  color?: string;
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
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('checkbox', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 使用受控状态 hook
  const [selectedValues, setSelectedValues] = useControlledState(value, [], onChange);

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

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

  // 使用 Tooltip hook
  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue: selectedValues.length > 0,
    label,
    content:
      selectedValues.length > 0
        ? getSelectedTags()
            .map(i => i.label)
            .join(', ')
        : null,
    disabled: isWrapped,
  });

  // 处理 Popover 状态变化
  const handlePopoverOpenChange = useCallback(
    (open: boolean) => {
      onPopoverOpenChange(open);
      externalOnOpenChange?.(open);
    },
    [onPopoverOpenChange, externalOnOpenChange]
  );

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      updateFilterValue(
        filterId,
        label,
        selectedValues,
        options,
        'checkbox' as FilterComponentName
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWrapped, updateFilterValue, filterId, label, selectedValues, stableOptionsKey]);

  const handleChange = useCallback(
    (val: string[]) => {
      setSelectedValues(val);
    },
    [setSelectedValues]
  );

  const handleClear = useCallback(() => {
    setSelectedValues([]);
  }, [setSelectedValues]);

  // 检测是否启用状态模式（options 中包含 color 属性）
  const isStatusMode = useMemo(() => {
    return options.some(option => option.color !== undefined);
  }, [options]);

  // 渲染状态图标（重叠显示）- 仅在状态模式下使用
  const renderStatusIcon = useMemo(() => {
    if (!isStatusMode || options.length === 0) return null;

    const iconWidth = 10;
    const iconWidthUnselected = 8;
    const overlapDistance = 6;
    const containerWidth = iconWidth + (options.length - 1) * overlapDistance + 1;

    const selectedStatuses = selectedValues || [];

    return (
      <div
        style={{
          position: 'relative',
          width: containerWidth,
          height: iconWidth + 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {options.map((item, index) => {
          const isSelected = selectedStatuses.includes(item.value) && item.color;
          const baseSize = isSelected ? iconWidth : iconWidthUnselected;

          return isSelected ? (
            <div
              key={item.value}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                width: baseSize,
                height: baseSize,
                borderRadius: '50%',
                zIndex: index,
                backgroundColor: item.color,
                border: `1px solid ${token.white}`,
              }}
            />
          ) : (
            <div
              key={item.value}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                borderRadius: '50%',
                zIndex: index,
                border: `1px solid ${token.white}`,
              }}
            >
              <div
                style={{
                  width: baseSize,
                  height: baseSize,
                  borderRadius: '50%',
                  backgroundColor: token.white,
                  border: `1px solid ${token.colorBorderSecondary}`,
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }, [isStatusMode, options, selectedValues, token.white, token.colorBorderSecondary]);

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
          const labelContent =
            isStatusMode && option.color && typeof option.label === 'string' ? (
              <Badge text={option.label} color={option.color} />
            ) : (
              option.label
            );

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
              {labelContent}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    ),
    [options, selectedValues, handleChange, prefixCls, token.colorTextDisabled, isStatusMode]
  );

  const wrappedContent = wrapContent(renderContent);

  // 状态模式下，如果没有自定义 icon，使用自动生成的状态图标
  const displayIcon = icon || (isStatusMode ? renderStatusIcon : undefined);

  // wrapped 模式
  if (isWrapped) {
    const hasValue = selectedValues.length > 0;
    const selectedTags = getSelectedTags();

    return (
      <div style={{ paddingBlock: token.paddingXXS }}>
        <div style={{ marginBottom: 8 }}>{label}</div>
        <FilterButton
          icon={displayIcon}
          label={label}
          bordered={bordered}
          onClear={handleClear}
          content={wrappedContent}
          selected={hasValue}
          onOpenChange={handlePopoverOpenChange}
          {...filterButtonProps}
        >
          <WrappedTagsDisplay tags={selectedTags} onRemove={handleRemoveTag} />
        </FilterButton>
      </div>
    );
  }

  // 正常模式
  const filterButton = (
    <FilterButton
      icon={displayIcon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      selected={!!selectedValues.length}
      onOpenChange={handlePopoverOpenChange}
      {...filterButtonProps}
    >
      <span>{label}</span>
      {showCount && selectedValues.length > 0 && (
        <CountNumber count={selectedValues.length} total={showTotal ? options.length : 0} />
      )}
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default memo(FilterCheckbox);
