import type { ReactNode } from 'react';
import { useCallback } from 'react';
import type { CascaderOption, SelectedTag } from '../types';
import { findOptionByPath } from '../utils/pathUtils';

/**
 * 管理级联选择器的标签显示逻辑
 */
export const useCascaderLabels = (
  currentValue: string[][],
  options: CascaderOption[],
  label: ReactNode,
  multiple: boolean,
  isCollapsed: boolean
) => {
  // 获取当前选中值的 label（用于单选模式显示）
  const getSelectedLabel = useCallback((): ReactNode => {
    if (isCollapsed && currentValue.length === 0) {
      return '';
    }
    if (currentValue.length === 0) {
      return label;
    }

    if (!multiple && currentValue.length === 1) {
      const selectedPath = currentValue[0];

      // 如果是空路径
      if (!selectedPath || selectedPath.length === 0) {
        return label;
      }

      // 对于多层级路径，查找最后一个节点
      const currentOption = findOptionByPath(options, selectedPath);
      return currentOption?.label || label;
    }

    return label;
  }, [currentValue, isCollapsed, label, multiple, options]);

  // 获取选中值的 tags（用于多选模式 Tag 显示）
  const getSelectedTags = useCallback((): SelectedTag[] => {
    return currentValue.map((selectedPath, index) => {
      // 对于多层级路径，查找最后一个节点
      const currentOption = findOptionByPath(options, selectedPath);

      const displayLabel = currentOption?.label || selectedPath[selectedPath.length - 1];
      const valueKey = selectedPath.join('::') + `::${index}`;

      return {
        label: displayLabel,
        value: valueKey,
        parentValue: selectedPath[0],
        childValue: selectedPath[selectedPath.length - 1],
      };
    });
  }, [currentValue, options]);

  return { getSelectedLabel, getSelectedTags };
};
