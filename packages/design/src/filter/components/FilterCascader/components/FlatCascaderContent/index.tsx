import React, { useMemo } from 'react';
import { Cascader } from 'antd';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';

interface FlatCascaderContentProps {
  options: CascaderOption[];
  currentValue: string[][];
  multiple?: boolean;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onValueChange: (value: string[][]) => void;
}

/**
 * Flat 模式的级联内容容器组件
 * 使用 antd 的 Cascader.Panel 实现多列展示
 */
export const FlatCascaderContent: React.FC<FlatCascaderContentProps> = ({
  options,
  currentValue,
  filterButtonRef,
  multiple = false,
  onValueChange,
}) => {
  // 将组件内部的值格式转换为 Cascader.Panel 需要的格式
  // 组件内部：[[parent, child], ...] 或 [[parent, child]]
  // Cascader.Panel：
  //   - 单选：string[]
  //   - 多选：string[][]

  const cascaderValue = useMemo(() => {
    if (currentValue.length === 0) return undefined;

    if (!multiple) {
      // 单选：currentValue 是 [[parent, child]]
      const firstValue = currentValue[0];
      // 确保 firstValue 是数组
      if (Array.isArray(firstValue) && firstValue.length > 0 && Array.isArray(firstValue[0])) {
        // 嵌套数组，展平
        return firstValue.flat() as string[];
      }
      return firstValue as string[];
    } else {
      // 多选：currentValue 是 [[parent, child], ...]
      return currentValue as string[][];
    }
  }, [currentValue, multiple]);

  // 处理 Cascader.Panel 的值变化
  const handleCascaderChange = (
    value: string[] | string[][],
    selectedOptions: CascaderOption[]
  ) => {
    if (!multiple) {
      // 单选：value 是 string[]，如 ['frontend', 'react']
      onValueChange([value as string[]]);
      filterButtonRef.current?.closePopover();
    } else {
      // 多选：value 是 string[][]，如 [['frontend', 'react'], ['backend', 'java']]
      onValueChange(value as string[][]);
    }
  };

  return (
    <Cascader.Panel
      options={options}
      value={cascaderValue}
      onChange={handleCascaderChange}
      multiple={multiple}
    />
  );
};
