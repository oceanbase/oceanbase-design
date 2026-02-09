import React, { useMemo } from 'react';
import { Cascader } from 'antd';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';

/**
 * 类型工具：根据 multiple 属性推断 Cascader.Panel 的 value 类型
 * - 单选 (multiple=false): string[]
 * - 多选 (multiple=true): string[][]
 */
type CascaderPanelValue<Multiple extends boolean> = Multiple extends true ? string[][] : string[];

interface FlatCascaderContentProps {
  options: CascaderOption[];
  currentValue: string[][];
  multiple: boolean;
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
  //   - 单选 (multiple=false): string[]
  //   - 多选 (multiple=true): string[][]

  const cascaderValue = useMemo((): CascaderPanelValue<typeof multiple> | undefined => {
    if (currentValue.length === 0) return undefined;

    if (!multiple) {
      // 单选：currentValue 是 [[parent, child]]，返回 [parent, child]
      return currentValue[0] as CascaderPanelValue<typeof multiple>;
    } else {
      // 多选：currentValue 是 [[parent, child], ...]
      return currentValue as CascaderPanelValue<typeof multiple>;
    }
  }, [currentValue, multiple]);

  // 处理 Cascader.Panel 的值变化（单选版本）
  const handleSingleCascaderChange = (value: string[], _selectedOptions: CascaderOption[]) => {
    onValueChange([value]);
    filterButtonRef.current?.closePopover();
  };

  // 处理 Cascader.Panel 的值变化（多选版本）
  const handleMultipleCascaderChange = (
    value: string[][],
    _selectedOptions: CascaderOption[][]
  ) => {
    onValueChange(value);
  };

  // 使用条件渲染来处理 multiple 属性的类型问题
  return multiple ? (
    <Cascader.Panel
      options={options}
      value={cascaderValue as string[][]}
      onChange={handleMultipleCascaderChange}
      multiple={true}
    />
  ) : (
    <Cascader.Panel
      options={options}
      value={cascaderValue as string[]}
      onChange={handleSingleCascaderChange}
      multiple={false}
    />
  );
};
