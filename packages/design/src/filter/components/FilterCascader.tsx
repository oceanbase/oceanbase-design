import { Checkbox, Flex, Popover, Tag, Tooltip } from '@oceanbase/design';
import { CheckOutlined, CloseOutlined, RightOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { useCallback, useRef } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { getPlaceholder, getWrappedValueStyle } from '../utils';
import CountNumber from './CountNumber';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';
import WrappedTagsDisplay from './WrappedTagsDisplay';

export interface CascaderOption {
  label?: ReactNode;
  value: string;
  children?: { label?: ReactNode; value: string }[];
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
  const filterButtonRef = useRef<FilterButtonRef>(null);

  // 解析 count 配置
  const showCount = !!count;
  const showTotal = typeof count === 'object' ? (count.showTotal ?? false) : false;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, [], onChange);

  const handleChange = useCallback(
    (parentValue: string, childValue: string) => {
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
        // 单选模式下，选择后立即关闭弹出层
        filterButtonRef.current?.closePopover();
      }
    },
    [currentValue, multiple, setValue]
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
      const otherValues = currentValue.filter(item => item[0] !== option.value);
      const allChildValues = option.children?.map(child => [option.value, child.value]) || [];
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
    return currentValue.map(([parentValue, childValue]) => {
      const parentOption = options.find(opt => opt.value === parentValue);
      const childOption = parentOption?.children?.find(child => child.value === childValue);
      return {
        label: childOption?.label || childValue,
        value: `${parentValue}-${childValue}`,
      };
    });
  }, [currentValue, options]);

  // 移除某个选中的值
  const handleRemoveTag = useCallback(
    (tagValue: string) => {
      const [parentValue, childValue] = tagValue.split('-');
      const newValueList = currentValue.filter(
        item => !(item[0] === parentValue && item[1] === childValue)
      );
      setValue(newValueList);
    },
    [currentValue, setValue]
  );

  // 渲染弹框内容
  const renderContent = (
    <div
      style={{
        padding: isWrapped ? 0 : '8px 0px',
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
            trigger="hover"
            key={option.value}
            arrow={false}
            content={option.children?.map(child => {
              const isSelected = selectedChildren.includes(child.value);
              return (
                <Flex
                  key={child.value}
                  gap={8}
                  className={getFilterCls(prefixCls, 'select-option')}
                  justify="space-between"
                  onClick={() => handleChange(option.value, child.value)}
                >
                  {multiple ? (
                    <Checkbox checked={isSelected}>{child.label}</Checkbox>
                  ) : (
                    <>
                      {child.label}
                      <span>{isSelected && <CheckOutlined style={{ color: '#1616ff' }} />}</span>
                    </>
                  )}
                </Flex>
              );
            })}
            styles={{
              body: {
                padding: 8,
                maxHeight: 220,
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
              >
                {multiple ? (
                  <Checkbox
                    checked={allChildrenSelected}
                    indeterminate={hasSelectedChildren && !allChildrenSelected}
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    onChange={() => {
                      if (allChildrenSelected) {
                        clearByParent(option.value);
                      } else {
                        selectAllChildren(option);
                      }
                    }}
                  >
                    {option.label}
                  </Checkbox>
                ) : (
                  <div>{option.label}</div>
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
            {...restProps}
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
          {...restProps}
        >
          <span style={getWrappedValueStyle(hasValue)}>
            {hasValue ? getSelectedLabel() : getPlaceholder()}
          </span>
        </FilterButton>
      </div>
    );
  }

  return (
    <FilterButton
      ref={filterButtonRef}
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={renderContent}
      selected={!!currentValue.length}
      {...restProps}
    >
      <span style={{ whiteSpace: 'nowrap' }}>{getSelectedLabel()}</span>
      {multiple && showCount && currentValue.length > 0 && (
        <Tooltip
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
          <span>
            <CountNumber
              count={currentValue.length}
              total={
                showTotal ? options.reduce((acc, curr) => acc + (curr.children?.length || 0), 0) : 0
              }
            />
          </span>
        </Tooltip>
      )}
    </FilterButton>
  );
};

export default FilterCascader;
