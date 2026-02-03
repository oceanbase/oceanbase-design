import type { ReactNode } from 'react';
import type { BaseFilterProps, InternalFilterProps } from '../../type';

export interface CascaderOption {
  label?: ReactNode;
  value: string;
  disabled?: boolean;
  children?: CascaderOption[];
}

// 单选和多选的 Props 类型
export interface FilterCascaderSingleProps extends BaseFilterProps, InternalFilterProps {
  /** 是否多选 */
  multiple?: false;
  /** 选项列表 */
  options?: CascaderOption[];
  /** 当前选中值，格式为 [parentValue, childValue] */
  value?: string[];
  /** 值变化回调 */
  onChange?: (value: string[]) => void;
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
  /** 扁平化展示 */
  flat?: boolean;
}

export interface FilterCascaderMultipleProps extends BaseFilterProps, InternalFilterProps {
  /** 是否多选 */
  multiple: true;
  /** 选项列表 */
  options?: CascaderOption[];
  /** 当前选中值，格式为 [[parentValue, childValue], ...] */
  value?: string[][];
  /** 值变化回调 */
  onChange?: (value: string[][]) => void;
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
  /** 扁平化展示 */
  flat?: boolean;
}

export type FilterCascaderProps = FilterCascaderSingleProps | FilterCascaderMultipleProps;

export interface SelectedTag {
  label: ReactNode;
  value: string;
  parentValue: string;
  childValue: string;
}
