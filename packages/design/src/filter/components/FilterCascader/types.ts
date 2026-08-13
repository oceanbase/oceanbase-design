import type { ReactNode } from 'react';
import type { BaseFilterProps, InternalFilterProps } from '../../type';

export interface CascaderOption {
  label?: ReactNode;
  value: string;
  disabled?: boolean;
  children?: CascaderOption[];
}

// 单选和多选的 Props 类型
// 基础 Props 类型（不包含 flat 和 showSearch）
interface BaseFilterCascaderProps extends BaseFilterProps, InternalFilterProps {
  /** 选项列表 */
  options?: CascaderOption[];
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
}

// 单选的基础类型
type FilterCascaderSingleBase = BaseFilterCascaderProps & {
  /** 是否多选 */
  multiple?: false;
  /** 当前选中值，格式为 [parentValue, childValue] */
  value?: string[];
  /** 值变化回调 */
  onChange?: (value: string[]) => void;
};

// 多选的基础类型
type FilterCascaderMultipleBase = BaseFilterCascaderProps & {
  /** 是否多选 */
  multiple?: true;
  /** 当前选中值，格式为 [[parentValue, childValue], ...] */
  value?: string[][];
  /** 值变化回调 */
  onChange?: (value: string[][]) => void;
};

// showSearch 模式（不能使用 flat）
type FilterCascaderWithSearch<T extends FilterCascaderSingleBase | FilterCascaderMultipleBase> =
  T & {
    /** 是否显示搜索框，默认为 false */
    showSearch: true;
    flat?: never;
  };

// flat 模式（不能使用 showSearch）
type FilterCascaderWithFlat<T extends FilterCascaderSingleBase | FilterCascaderMultipleBase> = T & {
  /** 扁平化展示 */
  flat: true;
  showSearch?: never;
};

// 普通模式（可以使用 showSearch 或 flat）
type FilterCascaderNormal<T extends FilterCascaderSingleBase | FilterCascaderMultipleBase> = T & {
  flat?: false;
  showSearch?: false;
};

// 单选 Props（flat 和 showSearch 互斥）
export type FilterCascaderSingleProps =
  | FilterCascaderWithSearch<FilterCascaderSingleBase>
  | FilterCascaderWithFlat<FilterCascaderSingleBase>
  | FilterCascaderNormal<FilterCascaderSingleBase>;

// 多选 Props（flat 和 showSearch 互斥）
export type FilterCascaderMultipleProps =
  | FilterCascaderWithSearch<FilterCascaderMultipleBase>
  | FilterCascaderWithFlat<FilterCascaderMultipleBase>
  | FilterCascaderNormal<FilterCascaderMultipleBase>;

export type FilterCascaderProps = FilterCascaderSingleProps | FilterCascaderMultipleProps;

export interface SelectedTag {
  label: ReactNode;
  value: string;
  parentValue: string;
  childValue: string;
}
