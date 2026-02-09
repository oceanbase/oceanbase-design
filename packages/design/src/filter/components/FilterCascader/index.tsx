import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import theme from '../../../theme';
import Input from '../../../input';
import Empty from '../../../empty';
import { SearchOutlined } from '@oceanbase/icons';
import { useFilterContext } from '../../FilterContext';
import { useFilterCollapsed } from '../../hooks/useFilterCollapsed';
import { useFilterTooltip } from '../../hooks/useFilterTooltip';
import useFilterStyle, { getFilterCls } from '../../style';
import {
  generateFilterId,
  getPlaceholder,
  getWrappedValueStyle,
  normalizeLabel,
} from '../../utils';
import type { FilterComponentName } from '../../FilterContext';
import CountNumber from '../CountNumber';
import FilterButton from '../FilterButton';
import type { FilterButtonRef } from '../FilterButton';
import WrappedTagsDisplay from '../WrappedTagsDisplay';
import type { FilterCascaderProps, CascaderOption } from './types';
import { useNormalizedValue } from './hooks/useNormalizedValue';
import { useCascaderLabels } from './hooks/useCascaderLabels';
import { useCascaderCallbacks } from './hooks/useCascaderCallbacks';
import { countLeafNodes } from './utils/countUtils';
import { FlatCascaderContent } from './components/FlatCascaderContent';
import { NormalCascaderContent } from './components/NormalCascaderContent';
import { COLUMN_WIDTH } from './constants';

const FilterCascader: React.FC<FilterCascaderProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  multiple = false,
  count = false,
  showSearch = false,
  _isCollapsed = false,
  flat = false,
  ...restProps
}) => {
  const isCollapsed = useFilterCollapsed(_isCollapsed);
  const { prefixCls } = useFilterStyle();
  const { token } = theme.useToken();
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('cascader', label), [label]);

  // 用于控制二级 Popover 的打开状态（仅在单选模式下使用）
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);
  // 用于 flat 模式下的多列路径（支持多层级）
  const [flatColumnsPath, setFlatColumnsPath] = useState<string[][]>([]);

  // 搜索关键词状态
  const [searchKeyword, setSearchKeyword] = useState('');

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

  // 值管理
  const { currentValue, setValue } = useNormalizedValue(value, onChange, multiple);

  // 标签显示
  const { getSelectedLabel, getSelectedTags } = useCascaderLabels(
    currentValue,
    options,
    label,
    multiple,
    isCollapsed
  );

  // 回调函数
  const { handleChange, clearByParent, handleClear, selectAllChildren, handleRemoveTag } =
    useCascaderCallbacks(
      currentValue,
      setValue,
      options,
      multiple,
      filterButtonRef,
      setOpenPopoverKey
    );

  // 使用 Tooltip hook
  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue: currentValue.length > 0,
    label,
    content:
      currentValue.length > 0
        ? getSelectedTags()
            .map(i => i.label)
            .join(', ')
        : null,
    disabled: isCollapsed,
  });

  // 处理主弹窗状态变化
  const handleMainPopoverOpenChange = useCallback(
    (open: boolean) => {
      onPopoverOpenChange(open);
      // 当主弹窗关闭时，同步关闭二级弹窗（单选模式）
      if (!open && !multiple) {
        setOpenPopoverKey(null);
      }
      // flat 模式下，关闭弹窗时重置列路径，下次打开时只显示最顶层
      if (!open && flat) {
        setFlatColumnsPath([]);
      }
      // 弹窗关闭时清空搜索关键词
      if (!open) {
        setSearchKeyword('');
      }
      externalOnOpenChange?.(open);
    },
    [onPopoverOpenChange, externalOnOpenChange, multiple, flat]
  );

  // 根据搜索关键词过滤选项（同时搜索父级和子级）
  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchKeyword) return options;
    const lowerKeyword = searchKeyword.toLowerCase().trim();

    return options
      .map(option => {
        const parentLabel = normalizeLabel(option.label).toLowerCase();
        const parentMatches = parentLabel.includes(lowerKeyword);

        // 递归过滤子级选项
        const filterChildren = (children: CascaderOption[]): CascaderOption[] => {
          return children
            .map(child => {
              const childLabel = normalizeLabel(child.label).toLowerCase();
              const childMatches = childLabel.includes(lowerKeyword);

              // 如果有子级，递归过滤
              if (child.children && child.children.length > 0) {
                const filteredChildren = filterChildren(child.children);
                // 如果当前节点匹配或有匹配的子级，则保留
                if (childMatches || filteredChildren.length > 0) {
                  return {
                    ...child,
                    children: childMatches ? child.children : filteredChildren,
                  };
                }
                return null;
              }

              // 叶子节点，如果匹配则保留
              return childMatches ? child : null;
            })
            .filter((child): child is CascaderOption => child !== null);
        };

        const filteredChildren = option.children ? filterChildren(option.children) : [];

        // 如果父级匹配或有匹配的子级，则保留该选项
        if (parentMatches || filteredChildren.length > 0) {
          return {
            ...option,
            // 如果父级不匹配但子级匹配，只显示匹配的子级
            children: parentMatches ? option.children : filteredChildren,
          } as CascaderOption;
        }

        return null;
      })
      .filter((option): option is CascaderOption => option !== null);
  }, [showSearch, searchKeyword, options]);

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, options, 'cascader' as FilterComponentName);
    }
  }, [isCollapsed, updateFilterValue, filterId, label, currentValue, options]);

  // 渲染内容
  const renderContent = flat ? (
    <FlatCascaderContent
      flatColumnsPath={flatColumnsPath}
      options={filteredOptions}
      currentValue={currentValue}
      multiple={multiple}
      prefixCls={prefixCls}
      filterButtonRef={filterButtonRef}
      onColumnsChange={setFlatColumnsPath}
      onValueChange={setValue}
      showSearch={showSearch}
      searchKeyword={searchKeyword}
      onSearchChange={setSearchKeyword}
    />
  ) : (
    <NormalCascaderContent
      options={filteredOptions}
      currentValue={currentValue}
      multiple={multiple}
      prefixCls={prefixCls}
      openPopoverKey={openPopoverKey}
      filterButtonRef={filterButtonRef}
      onOpenPopoverKeyChange={setOpenPopoverKey}
      onValueChange={setValue}
      onHandleChange={handleChange}
      onClearByParent={clearByParent}
      onSelectAllChildren={selectAllChildren}
      showSearch={showSearch}
      searchKeyword={searchKeyword}
      onSearchChange={setSearchKeyword}
    />
  );

  // flat 模式下的 Popover 样式（动态宽度）
  const flatPopoverStyles = flat
    ? {
        body: {
          padding: 0,
          maxWidth: Math.max(flatColumnsPath.length * COLUMN_WIDTH, COLUMN_WIDTH),
          minWidth: Math.max(flatColumnsPath.length * COLUMN_WIDTH, COLUMN_WIDTH),
        },
      }
    : undefined;

  // 计算总数（用于显示计数）
  const totalCount = showTotal
    ? options.reduce((acc, curr) => {
        return acc + (curr.children ? countLeafNodes(curr.children) : 0);
      }, 0)
    : 0;

  // Wrapped 模式
  if (isCollapsed) {
    const hasValue = currentValue.length > 0;

    if (multiple) {
      const selectedTags = getSelectedTags();
      return (
        <div style={{ paddingBlock: token.paddingXXS }}>
          <div style={{ marginBottom: 8 }}>{label}</div>
          <FilterButton
            ref={filterButtonRef}
            icon={icon}
            label={label}
            bordered={bordered}
            onClear={handleClear}
            content={renderContent}
            selected={hasValue}
            onOpenChange={handleMainPopoverOpenChange}
            _isFlat={flat}
            {...(flat ? { styles: flatPopoverStyles } : {})}
            {...filterButtonProps}
          >
            <WrappedTagsDisplay tags={selectedTags} onRemove={handleRemoveTag} />
          </FilterButton>
        </div>
      );
    }

    return (
      <div>
        <div style={{ marginBottom: 8 }}>{label}</div>
        <FilterButton
          ref={filterButtonRef}
          icon={icon}
          label={label}
          bordered={bordered}
          onClear={handleClear}
          content={renderContent}
          selected={hasValue}
          onOpenChange={handleMainPopoverOpenChange}
          {...(flat ? { styles: flatPopoverStyles } : {})}
          {...filterButtonProps}
        >
          <span
            className={getFilterCls(prefixCls, 'text-ellipsis')}
            style={getWrappedValueStyle(hasValue)}
          >
            {hasValue ? getSelectedLabel() : getPlaceholder()}
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
      content={renderContent}
      selected={!!currentValue.length}
      onOpenChange={handleMainPopoverOpenChange}
      _isFlat={flat}
      {...(flat ? { styles: flatPopoverStyles } : {})}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{getSelectedLabel()}</span>
      {multiple && showCount && currentValue.length > 0 && (
        <CountNumber count={currentValue.length} total={totalCount} />
      )}
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default FilterCascader;
