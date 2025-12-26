import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Flex, Popover } from 'antd';
import { CheckOutlined, CloseOutlined, RightOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import Checkbox from '../../checkbox';
import Tag from '../../tag';
import Tooltip from '../../tooltip';
import theme from '../../theme';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import { useTooltipWithPopover } from '../hooks/useTooltipWithPopover';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import {
  generateFilterId,
  getPlaceholder,
  getStableOptionsKey,
  getWrappedValueStyle,
} from '../utils';
import CountNumber from './CountNumber';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';
import WrappedTagsDisplay from './WrappedTagsDisplay';

export interface CascaderOption {
  label?: ReactNode;
  value: string;
  disabled?: boolean;
  children?: { label?: ReactNode; value: string; disabled?: boolean }[];
}

export interface FilterCascaderProps extends BaseFilterProps, InternalFilterProps {
  /** 是否多选 */
  multiple?: boolean;
  /** 选项列表 */
  options?: CascaderOption[];
  /** 当前选中值，格式为 [[parentValue, childValue], ...] */
  value?: string[][];
  /** 值变化回调 */
  onChange?: (value: string[][]) => void;
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
}

const FilterCascader: React.FC<FilterCascaderProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  multiple = false,
  count = false,
  _isInWrap = false,
  ...restProps
}) => {
  const isWrapped = useFilterWrapped(_isInWrap);
  const { prefixCls } = useFilterStyle();
  const { token } = theme.useToken();
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('cascader', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);
  // 用于控制二级 Popover 的打开状态（仅在单选模式下使用）
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);
  // 用于跟踪主弹窗的开启状态
  const [isMainPopoverOpen, setIsMainPopoverOpen] = useState(false);

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, [], onChange);

  // 使用 Hook 管理 Tooltip 与 Popover 的交互逻辑（仅在多选模式下启用）
  const { tooltipOpen, onTooltipOpenChange } = useTooltipWithPopover({
    isPopoverOpen: isMainPopoverOpen,
    enabled: multiple,
    hasValue: currentValue.length > 0,
  });

  // 处理主弹窗状态变化
  const handleMainPopoverOpenChange = useCallback(
    (open: boolean) => {
      setIsMainPopoverOpen(open);
      // 当主弹窗关闭时，同步关闭二级弹窗（单选模式）
      if (!open && !multiple) {
        setOpenPopoverKey(null);
      }
      // 调用外部传入的 onOpenChange 回调
      // Tooltip 的控制逻辑已由 useTooltipWithPopover Hook 自动处理
      externalOnOpenChange?.(open);
    },
    [externalOnOpenChange, multiple]
  );

  // 当值变化时，更新 context 中的值
  // 使用 stableOptionsKey 而不是 options 来避免不必要的更新
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, options, 'cascader' as FilterComponentName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWrapped, updateFilterValue, filterId, label, currentValue, stableOptionsKey]);

  const handleChange = useCallback(
    (parentValue: string, childValue: string) => {
      // 检查选项是否被禁用
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      if (parentOption?.disabled || childOption?.disabled) {
        return;
      }

      if (multiple) {
        // 多选模式
        const existingIndex = currentValue.findIndex(
          item => item[0] === parentValue && item[1] === childValue
        );

        let newValueList: string[][];
        if (existingIndex !== -1) {
          newValueList = currentValue.filter((_, index) => index !== existingIndex);
        } else {
          newValueList = [...currentValue, [parentValue, childValue]];
        }
        setValue(newValueList);
      } else {
        // 单选模式 - 全局只能选择一个值
        const isCurrentSelected =
          currentValue.length === 1 &&
          currentValue[0][0] === parentValue &&
          currentValue[0][1] === childValue;

        let newValueList: string[][];
        if (isCurrentSelected) {
          newValueList = [];
        } else {
          newValueList = [[parentValue, childValue]];
        }
        setValue(newValueList);
        // 单选模式下，选择后立即关闭所有弹出层（主弹窗和二级 Popover）
        setOpenPopoverKey(null);
        // 使用 setTimeout 确保状态更新完成后再关闭主弹窗
        setTimeout(() => {
          filterButtonRef.current?.closePopover();
        }, 0);
      }
    },
    [currentValue, multiple, setValue, options]
  );

  const clearByParent = useCallback(
    (parentValue: string) => {
      const newValueList = currentValue.filter(item => item[0] !== parentValue);
      setValue(newValueList);
    },
    [currentValue, setValue]
  );

  const handleClear = useCallback(() => {
    setValue([]);
  }, [setValue]);

  // 选中该分类下的所有子项
  const selectAllChildren = useCallback(
    (option: CascaderOption) => {
      if (option.disabled) {
        return;
      }
      const otherValues = currentValue.filter(item => item[0] !== option.value);
      // 只选择未禁用的子项
      const allChildValues =
        option.children
          ?.filter(child => !child.disabled)
          .map(child => [option.value, child.value]) || [];
      const newValueList = [...otherValues, ...allChildValues];
      setValue(newValueList);
    },
    [currentValue, setValue]
  );

  // 获取当前选中值的 label（用于单选模式显示）
  const getSelectedLabel = useCallback((): ReactNode => {
    if (isWrapped && currentValue.length === 0) {
      return '';
    }
    if (currentValue.length === 0) {
      return label;
    }

    if (!multiple && currentValue.length === 1) {
      const [parentValue, childValue] = currentValue[0];
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      return childOption?.label || label;
    }

    return label;
  }, [currentValue, isWrapped, label, multiple, options]);

  // 获取选中值的 tags（用于多选模式 Tag 显示）
  const getSelectedTags = useCallback(() => {
    return currentValue.map(([parentValue, childValue], index) => {
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      // 使用分隔符 `::` 来避免与 value 中的 `-` 冲突
      return {
        label: childOption?.label || childValue,
        value: `${parentValue}::${childValue}::${index}`,
        parentValue,
        childValue,
      };
    });
  }, [currentValue, options]);

  // 移除某个选中的值
  const handleRemoveTag = useCallback(
    (tagValue: string) => {
      // 使用 `::` 分隔符分割，格式为 `parentValue::childValue::index`
      const parts = tagValue.split('::');
      if (parts.length >= 2) {
        const [parentValue, childValue] = parts;
        const newValueList = currentValue.filter(
          item => !(item[0] === parentValue && item[1] === childValue)
        );
        setValue(newValueList);
      }
    },
    [currentValue, setValue]
  );

  // 渲染弹框内容
  const renderContent = (
    <div
      style={{
        padding: '8px 0px',
        maxHeight: 300,
        overflowY: 'auto',
      }}
    >
      {options.map(option => {
        const selectedChildren = currentValue
          .filter(item => item[0] === option.value)
          .map(item => item[1]);

        const hasSelectedChildren = selectedChildren.length > 0;
        const allChildrenSelected =
          multiple &&
          option.children &&
          option.children.length > 0 &&
          selectedChildren.length === option.children.length;

        return (
          <Popover
            placement="rightTop"
            trigger={'hover'}
            key={option.value}
            arrow={false}
            // 禁用时不展开子集
            open={option?.disabled ? false : multiple ? undefined : openPopoverKey === option.value}
            onOpenChange={
              multiple
                ? undefined
                : open => {
                    if (!open) {
                      setOpenPopoverKey(null);
                    } else {
                      setOpenPopoverKey(option.value);
                    }
                  }
            }
            content={option.children?.map(child => {
              const isSelected = selectedChildren.includes(child.value);
              const isChildDisabled = child.disabled || false;
              return (
                <Flex
                  key={child.value}
                  gap={8}
                  className={getFilterCls(prefixCls, 'select-option')}
                  justify="space-between"
                  onClick={e => {
                    e.stopPropagation();
                    if (!isChildDisabled) {
                      handleChange(option.value, child.value);
                    }
                  }}
                  style={{
                    cursor: isChildDisabled ? 'not-allowed' : 'pointer',
                    color: isChildDisabled ? token.colorTextDisabled : 'inherit',
                  }}
                >
                  {multiple ? (
                    <Checkbox checked={isSelected} disabled={isChildDisabled}>
                      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                        {child.label}
                      </span>
                    </Checkbox>
                  ) : (
                    <>
                      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>
                        {child.label}
                      </span>
                      <span>
                        {isSelected && <CheckOutlined style={{ color: token.colorPrimary }} />}
                      </span>
                    </>
                  )}
                </Flex>
              );
            })}
            styles={{
              body: {
                padding: 8,
                maxHeight: 220,
                maxWidth: 300,
                overflowY: 'auto',
              },
            }}
          >
            <div style={{ padding: '0px 8px' }}>
              <Flex
                gap={8}
                className={classNames(getFilterCls(prefixCls, 'select-option'), {
                  [getFilterCls(prefixCls, 'has-selected')]: hasSelectedChildren,
                })}
                justify="space-between"
                align="center"
                style={{
                  cursor: option.disabled ? 'not-allowed' : 'pointer',
                  color: option.disabled ? token.colorTextDisabled : 'inherit',
                }}
              >
                {multiple ? (
                  <Checkbox
                    checked={allChildrenSelected}
                    indeterminate={hasSelectedChildren && !allChildrenSelected}
                    disabled={option.disabled}
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    onChange={() => {
                      if (!option.disabled) {
                        if (allChildrenSelected) {
                          clearByParent(option.value);
                        } else {
                          selectAllChildren(option);
                        }
                      }
                    }}
                  >
                    <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</span>
                  </Checkbox>
                ) : (
                  <div className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</div>
                )}
                <Flex align="center" gap={4}>
                  <div className={getFilterCls(prefixCls, 'icon-wrapper')}>
                    <RightOutlined
                      className={hasSelectedChildren ? getFilterCls(prefixCls, 'arrow-icon') : ''}
                    />
                    {hasSelectedChildren && (
                      <div
                        className={getFilterCls(prefixCls, 'clear-icon')}
                        onClick={e => {
                          e.stopPropagation();
                          clearByParent(option.value);
                        }}
                      >
                        <CloseOutlined />
                      </div>
                    )}
                  </div>
                </Flex>
              </Flex>
            </div>
          </Popover>
        );
      })}
    </div>
  );

  // Wrapped 模式
  if (isWrapped) {
    const hasValue = currentValue.length > 0;

    // 多选模式：使用 Tag 展示选中的值
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
            {...filterButtonProps}
          >
            <WrappedTagsDisplay tags={selectedTags} onRemove={handleRemoveTag} />
          </FilterButton>
        </div>
      );
    }

    // 单选模式
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
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{getSelectedLabel()}</span>
      {multiple && showCount && currentValue.length > 0 && (
        <CountNumber
          count={currentValue.length}
          total={
            showTotal ? options.reduce((acc, curr) => acc + (curr.children?.length || 0), 0) : 0
          }
        />
      )}
    </FilterButton>
  );

  // 多选模式下，始终用 Tooltip 包裹整个 FilterButton，保持组件树结构稳定
  // 类似 FilterCheckbox 的处理方式，避免第一次选择时组件树变化导致弹窗关闭
  if (!isWrapped && multiple) {
    const selectedTags = getSelectedTags();
    return (
      <Tooltip
        mouseEnterDelay={0.8}
        open={isWrapped ? false : tooltipOpen}
        onOpenChange={onTooltipOpenChange}
        title={
          currentValue.length > 0 ? (
            <Flex wrap="wrap" gap={4}>
              {selectedTags.map(item => (
                <Tag
                  key={`${item.parentValue}-${item.childValue}`}
                  closable
                  onClose={() => handleRemoveTag(item.value)}
                >
                  {item.label}
                </Tag>
              ))}
            </Flex>
          ) : null
        }
      >
        {filterButton}
      </Tooltip>
    );
  }

  return filterButton;
};

export default FilterCascader;
