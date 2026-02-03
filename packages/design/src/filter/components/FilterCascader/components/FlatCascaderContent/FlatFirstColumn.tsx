import React from 'react';
import { Flex } from 'antd';
import theme from '../../../../../theme';
import classNames from 'classnames';
import { getFilterCls } from '../../../../style';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';
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

interface FlatFirstColumnProps {
  options: CascaderOption[];
  currentValue: string[][];
  multiple: boolean;
  prefixCls: string;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onColumnsChange: (columns: string[][]) => void;
  onValueChange: (value: string[][]) => void;
}

/**
 * Flat 模式的第一列（根级别）组件
 */
export const FlatFirstColumn: React.FC<FlatFirstColumnProps> = ({
  options,
  currentValue,
  multiple,
  prefixCls,
  filterButtonRef,
  onColumnsChange,
  onValueChange,
}) => {
  const { token } = theme.useToken();

  return (
    <div style={{ minWidth: COLUMN_WIDTH }}>
      <div
        style={{
          width: COLUMN_WIDTH,
          padding: PADDING_VERTICAL,
          maxHeight: MAX_HEIGHT,
          overflowY: 'auto',
        }}
      >
        {options.map(option => {
          const currentPath = [option.value];
          const hasOptionChildren = option.children && option.children.length > 0;

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
                })}
                justify="space-between"
                align="center"
                onClick={() => {
                  if (hasOptionChildren) {
                    // 有子节点，设置第一列和第二列（第二列使用空值占位）
                    onColumnsChange([[option.value], [option.value, '']]);
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
    </div>
  );
};
