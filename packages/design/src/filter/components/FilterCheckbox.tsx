import type { FC, ReactNode } from 'react';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import theme from '../../theme';
import Checkbox from '../../checkbox';
import Input from '../../input';
import Badge from '../../badge';
import { SearchOutlined } from '@oceanbase/icons';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterCollapsed } from '../hooks/useFilterCollapsed';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { generateFilterId, getStableOptionsKey, wrapContent, filterOptions } from '../utils';
import CountNumber from './CountNumber';
import FilterButton from './FilterButton';
import WrappedTagsDisplay from './WrappedTagsDisplay';
import Empty from '../../empty';

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
  /** 是否显示搜索框，默认为 false */
  showSearch?: boolean;
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  count = false,
  showSearch = false,
  _isCollapsed = false,
  ...restProps
}) => {
  const isCollapsed = useFilterCollapsed(_isCollapsed);
  const { prefixCls } = useFilterStyle();
  const { token } = theme.useToken();
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('checkbox', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);

  // 搜索关键词状态
  const [searchKeyword, setSearchKeyword] = useState('');

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
    disabled: isCollapsed,
  });

  // 处理 Popover 状态变化
  const handlePopoverOpenChange = useCallback(
    (open: boolean) => {
      onPopoverOpenChange(open);
      externalOnOpenChange?.(open);
      // 弹窗关闭时清空搜索关键词
      if (!open) {
        setSearchKeyword('');
      }
    },
    [onPopoverOpenChange, externalOnOpenChange]
  );

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(
        filterId,
        label,
        selectedValues,
        options,
        'checkbox' as FilterComponentName
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCollapsed, updateFilterValue, filterId, label, selectedValues, stableOptionsKey]);

  // 根据搜索关键词过滤选项
  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchKeyword) return options;
    return filterOptions(options, searchKeyword);
  }, [showSearch, searchKeyword, options]);

  const handleChange = useCallback(
    (val: string[]) => {
      // 当开启搜索时，需要合并未显示但已选中的选项
      if (showSearch && searchKeyword) {
        // 找出已选中但不在当前过滤结果中的选项值
        const hiddenSelectedValues = selectedValues.filter(
          selectedVal => !filteredOptions.find(opt => opt.value === selectedVal)
        );
        // 合并：保留未显示的已选中项 + 当前操作后的选项
        const mergedValues = [...new Set([...hiddenSelectedValues, ...val])];
        setSelectedValues(mergedValues);
      } else {
        setSelectedValues(val);
      }
    },
    [setSelectedValues, showSearch, searchKeyword, selectedValues, filteredOptions]
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

    // 按颜色分组选项，并检查每种颜色是否有选中的选项
    const colorGroups: { color: string; hasSelected: boolean }[] = [];
    const colorMap = new Map<string, { color: string; hasSelected: boolean }>();

    options.forEach(option => {
      if (option.color) {
        const isSelected = selectedValues.includes(option.value);
        const existing = colorMap.get(option.color);
        if (existing) {
          // 如果已有该颜色，更新选中状态（只要有一个选中即为选中）
          if (isSelected) {
            existing.hasSelected = true;
          }
        } else {
          const group = { color: option.color, hasSelected: isSelected };
          colorMap.set(option.color, group);
          colorGroups.push(group);
        }
      }
    });

    const containerWidth = iconWidth + (colorGroups.length - 1) * overlapDistance + 1;

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
        {colorGroups.map((group, index) => {
          const isSelected = group.hasSelected;
          const baseSize = isSelected ? iconWidth : iconWidthUnselected;

          return isSelected ? (
            <div
              key={group.color}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                width: baseSize,
                height: baseSize,
                borderRadius: '50%',
                zIndex: index,
                backgroundColor: group.color,
                border: `1px solid ${token.white}`,
              }}
            />
          ) : (
            <div
              key={group.color}
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
  }, [isStatusMode, options, selectedValues, token]);

  // 渲染弹框内容
  const renderContent = useMemo(
    () => (
      <div>
        {showSearch && (
          <div style={{ marginInline: 4, marginBottom: 8 }}>
            <Input
              placeholder="搜索"
              prefix={<SearchOutlined />}
              allowClear
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
        {filteredOptions.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="无匹配结果"
            style={{ padding: '16px 0' }}
          />
        ) : (
          <Checkbox.Group
            onChange={handleChange}
            style={{ flexDirection: 'column', width: '100%' }}
            value={selectedValues}
          >
            {filteredOptions.map(option => {
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
        )}
      </div>
    ),
    [
      showSearch,
      searchKeyword,
      filteredOptions,
      selectedValues,
      handleChange,
      prefixCls,
      token.colorTextDisabled,
      isStatusMode,
    ]
  );

  const wrappedContent = wrapContent(renderContent);

  // 状态模式下，如果没有自定义 icon，使用自动生成的状态图标
  const displayIcon = icon || (isStatusMode ? renderStatusIcon : undefined);

  // 折叠模式
  if (isCollapsed) {
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
          style={{
            ...filterButtonProps?.style,
            paddingInline: token.paddingXXS,
          }}
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
