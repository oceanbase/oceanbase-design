import React, { useMemo } from 'react';
import { Cascader } from 'antd';
import type { CascaderPanelProps } from 'antd';
import type { CascaderOption } from '../../types';
import type { FilterButtonRef } from '../../../FilterButton';

/**
 * 类型工具：根据 multiple 属性推断 Cascader.Panel 的 value 类型
 * - 单选 (multiple=false): string[]
 * - 多选 (multiple=true): string[][]
 */
type CascaderPanelValue<Multiple extends boolean> = Multiple extends true
  ? (string | number)[][]
  : (string | number)[];

interface FlatCascaderContentProps extends CascaderPanelProps {
  options: CascaderOption[];
  currentValue: (string | number)[][];
  multiple: boolean;
  filterButtonRef: React.RefObject<FilterButtonRef>;
  onValueChange: (value: (string | number)[][]) => void;
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
  ...restProps
}) => {
  // 将组件内部的值格式转换为 Cascader.Panel 需要的格式
  // 组件内部：[[parent, child], ...] 或 [[parent, child]]
  // Cascader.Panel：
  //   - 单选 (multiple=false): string[]
  //   - 多选 (multiple=true): string[][]

  const cascaderValue = useMemo<CascaderPanelValue<typeof multiple> | undefined>(() => {
    if (currentValue.length === 0) return undefined;

    if (!multiple) {
      // 单选：currentValue 是 [[parent, child]]，返回 [parent, child]
      return currentValue[0] as CascaderPanelValue<false>;
    } else {
      // 多选：currentValue 是 [[parent, child], ...]
      return currentValue as CascaderPanelValue<true>;
    }
  }, [currentValue, multiple]);

  // 处理 Cascader.Panel 的值变化
  const handleCascaderChange = (value: CascaderPanelValue<typeof multiple>) => {
    if (multiple) {
      // 多选：value 是 string[][]，如 [['frontend', 'react'], ['backend', 'java']]
      onValueChange(value as (string | number)[][]);
    } else {
      // 单选：value 是 string[]，如 ['frontend', 'react']
      onValueChange([value as (string | number)[]]);
      filterButtonRef.current?.closePopover();
    }
  };

  // 使用条件渲染来处理 multiple 属性的类型问题
  return multiple ? (
    // @ts-ignore-next-line
    <Cascader.Panel
      options={options}
      value={cascaderValue as CascaderPanelValue<true>}
      onChange={handleCascaderChange}
      multiple={multiple}
      showCheckedStrategy={Cascader.SHOW_CHILD}
      {...restProps}
    />
  ) : (
    <Cascader.Panel
      options={options}
      value={cascaderValue as CascaderPanelValue<false>}
      onChange={handleCascaderChange}
      multiple={false}
      {...restProps}
    />
  );
};
