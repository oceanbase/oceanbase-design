import React from 'react';
import { Flex } from 'antd';
import theme from '../../../../../theme';
import classNames from 'classnames';
import { getFilterCls } from '../../../../style';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';
import { getCurrentLevelOptions } from '../../utils/pathUtils';
import { hasSelectedInPath, isExactMatch } from '../../utils/pathUtils';
import { countLeafNodes, countSelectedChildren } from '../../utils/countUtils';
import { OptionCheckbox } from '../CascaderOption/OptionCheckbox';
import { OptionItem } from '../CascaderOption/OptionItem';
import {
  COLUMN_WIDTH,
  MAX_HEIGHT,
  PADDING_VERTICAL,
  PADDING_HORIZONTAL,
  GAP_SIZE,
} from '../../constants';

interface FlatColumnProps {
  columnPath: string[];
  columnIndex: number;
  flatColumnsPath: string[][];
  currentValue: string[][];
  options: CascaderOption[];
  multiple: boolean;
  prefixCls: string;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onColumnsChange: (columns: string[][]) => void;
  onValueChange: (value: string[][]) => void;
}

/**
 * Flat 模式的单列渲染组件
 */
export const FlatColumn: React.FC<FlatColumnProps> = ({
  columnPath,
  columnIndex,
  flatColumnsPath,
  currentValue,
  options,
  multiple,
  prefixCls,
  filterButtonRef,
  onColumnsChange,
  onValueChange,
}) => {
  const { token } = theme.useToken();

  // 获取当前列应该显示的选项（过滤掉空值占位符）
  const parentPath = columnPath.slice(0, -1).filter(v => v !== '');
  const currentLevelOptions = getCurrentLevelOptions(options, parentPath);
  const activeValue = columnPath[columnPath.length - 1];

  // 检查当前列是否是最后一列（最新展开的列）
  const isLastColumn = columnIndex === flatColumnsPath.length - 1;

  return (
    <div
      key={`column-${columnIndex}`}
      style={{
        width: COLUMN_WIDTH,
        borderRight:
          columnIndex < flatColumnsPath.length - 1
            ? `1px solid ${token.colorBorderSecondary}`
            : 'none',
        padding: PADDING_VERTICAL,
        maxHeight: MAX_HEIGHT,
        overflowY: 'auto',
      }}
    >
      {currentLevelOptions.map(option => {
        const currentPath = [...parentPath, option.value];
        const hasOptionChildren = option.children && option.children.length > 0;
        const isActive = !isLastColumn && option.value === activeValue;

        const isExact = isExactMatch(currentValue, currentPath);

        // 多选模式下计算选中的子节点数量
        let selectedChildrenCount = 0;
        let allChildrenCount = 0;
        if (multiple && hasOptionChildren) {
          allChildrenCount = countLeafNodes(option.children);
          selectedChildrenCount = countSelectedChildren(currentValue, currentPath);
        }

        const allChildrenSelected =
          multiple && selectedChildrenCount > 0 && selectedChildrenCount === allChildrenCount;

        // 在多选模式下：只有完全选中时才显示背景色
        // 在单选模式下：如果路径下有选中值则显示背景色
        const hasSelected = multiple
          ? isExact || allChildrenSelected
          : isExact || hasSelectedInPath(currentValue, currentPath);

        return (
          <div key={option.value} style={{ padding: PADDING_HORIZONTAL }}>
            <Flex
              gap={GAP_SIZE}
              className={classNames(getFilterCls(prefixCls, 'select-option'), {
                [getFilterCls(prefixCls, 'has-selected')]: hasSelected,
                [getFilterCls(prefixCls, 'flat-active')]: isActive && hasOptionChildren,
              })}
              justify="space-between"
              align="center"
              onClick={() => {
                if (hasOptionChildren) {
                  // 有子节点，更新列路径，添加新列
                  const newColumns = flatColumnsPath.slice(0, columnIndex + 1);
                  newColumns[columnIndex] = currentPath;
                  newColumns.push([...currentPath, '']);
                  onColumnsChange(newColumns);
                } else if (!option.disabled && !multiple) {
                  // 单选模式下，无子节点，直接选中/取消选中
                  if (isExact) {
                    onValueChange([]);
                  } else {
                    onValueChange([currentPath]);
                  }
                  setTimeout(() => {
                    filterButtonRef.current?.closePopover();
                  }, 0);
                }
              }}
              style={{
                cursor: option.disabled ? 'not-allowed' : 'pointer',
                color: option.disabled ? token.colorTextDisabled : 'inherit',
              }}
            >
              {multiple ? (
                <>
                  <OptionCheckbox
                    option={option}
                    currentPath={currentPath}
                    currentValue={currentValue}
                    hasChildren={hasOptionChildren}
                    allChildrenCount={allChildrenCount}
                    selectedChildrenCount={selectedChildrenCount}
                    allChildrenSelected={allChildrenSelected}
                    prefixCls={prefixCls}
                    onValueChange={onValueChange}
                  />
                  <OptionItem
                    label=""
                    hasChildren={hasOptionChildren}
                    isSelected={isExact || hasSelected}
                    isMultiple={true}
                    prefixCls={prefixCls}
                  />
                </>
              ) : (
                <OptionItem
                  label={option.label}
                  hasChildren={hasOptionChildren}
                  isSelected={isExact || hasSelected}
                  isMultiple={false}
                  prefixCls={prefixCls}
                />
              )}
            </Flex>
          </div>
        );
      })}
    </div>
  );
};
