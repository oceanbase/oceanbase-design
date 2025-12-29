import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Checkbox, Flex, Popover } from 'antd';
import theme from '../../theme';
import { CheckOutlined, CloseOutlined, RightOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterCollapsed } from '../hooks/useFilterCollapsed';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
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
  _isCollapsed = false,
  ...restProps
}) => {
  const isCollapsed = useFilterCollapsed(_isCollapsed);
  const { prefixCls } = useFilterStyle();
  const { token } = theme.useToken();
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('cascader', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);
  // 用于控制二级 Popover 的打开状态（仅在单选模式下使用）
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, [], onChange);

  // 获取当前选中值的 label（用于单选模式显示）
  const getSelectedLabel = useCallback((): ReactNode => {
    if (isCollapsed && currentValue.length === 0) {
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
  }, [currentValue, isCollapsed, label, multiple, options]);

  // 获取选中值的 tags（用于多选模式 Tag 显示）
  const getSelectedTags = useCallback(() => {
    return currentValue.map(([parentValue, childValue], index) => {
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
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
      externalOnOpenChange?.(open);
    },
    [onPopoverOpenChange, externalOnOpenChange, multiple]
  );

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, options, 'cascader' as FilterComponentName);
    }
  }, [isCollapsed, updateFilterValue, filterId, label, currentValue, options]);

  const handleChange = useCallback(
    (parentValue: string, childValue: string) => {
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      if (parentOption?.disabled || childOption?.disabled) {
        return;
      }

      if (multiple) {
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
        setOpenPopoverKey(null);
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

  const selectAllChildren = useCallback(
    (option: CascaderOption) => {
      if (option.disabled) {
        return;
      }
      const otherValues = currentValue.filter(item => item[0] !== option.value);
      const allChildValues =
        option.children
          ?.filter(child => !child.disabled)
          .map(child => [option.value, child.value]) || [];
      const newValueList = [...otherValues, ...allChildValues];
      setValue(newValueList);
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

  return wrapWithTooltip(filterButton);
};

export default FilterCascader;
