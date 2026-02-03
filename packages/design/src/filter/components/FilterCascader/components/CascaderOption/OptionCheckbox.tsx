import React from 'react';
import Checkbox from '../../../../../checkbox';
import { collectLeafPaths } from '../../utils/countUtils';
import type { CascaderOption } from '../../types';
import { getFilterCls } from '../../../../style';

interface OptionCheckboxProps {
  option: CascaderOption;
  currentPath: string[];
  currentValue: string[][];
  hasChildren: boolean;
  allChildrenCount: number;
  selectedChildrenCount: number;
  allChildrenSelected: boolean;
  prefixCls: string;
  onValueChange: (value: string[][]) => void;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * 级联选择器的复选框选项组件（支持父节点和叶子节点）
 */
export const OptionCheckbox: React.FC<OptionCheckboxProps> = ({
  option,
  currentPath,
  currentValue,
  hasChildren,
  allChildrenSelected,
  selectedChildrenCount,
  prefixCls,
  onValueChange,
  onClick,
}) => {
  const isExactMatch = currentValue.some(
    selectedPath =>
      selectedPath.length === currentPath.length &&
      selectedPath.every((val, idx) => val === currentPath[idx])
  );

  // 父节点（有子节点）
  if (hasChildren) {
    return (
      <Checkbox
        checked={allChildrenSelected}
        indeterminate={selectedChildrenCount > 0 && !allChildrenSelected}
        disabled={option.disabled}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClick?.(e);
        }}
        onChange={() => {
          if (!option.disabled) {
            if (allChildrenSelected) {
              // 取消选中该路径下的所有项
              onValueChange(
                currentValue.filter(selectedPath => {
                  if (selectedPath.length <= currentPath.length) return true;
                  return !currentPath.every((val, idx) => selectedPath[idx] === val);
                })
              );
            } else {
              // 选中该路径下的所有叶子节点
              const leafPaths = collectLeafPaths(option.children!, currentPath);
              const otherValues = currentValue.filter(selectedPath => {
                if (selectedPath.length <= currentPath.length) return true;
                return !currentPath.every((val, idx) => selectedPath[idx] === val);
              });
              onValueChange([...otherValues, ...leafPaths]);
            }
          }
        }}
      >
        <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</span>
      </Checkbox>
    );
  }

  // 叶子节点（无子节点）
  return (
    <Checkbox
      checked={isExactMatch}
      disabled={option.disabled}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      onChange={() => {
        if (!option.disabled) {
          if (isExactMatch) {
            onValueChange(
              currentValue.filter(
                item =>
                  !(
                    item.length === currentPath.length &&
                    item.every((val, idx) => val === currentPath[idx])
                  )
              )
            );
          } else {
            onValueChange([...currentValue, currentPath]);
          }
        }
      }}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{option.label}</span>
    </Checkbox>
  );
};
