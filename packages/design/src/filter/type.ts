import type { PopoverProps } from '@oceanbase/design';
import type { ReactNode } from 'react';

export interface BaseFilterProps extends Omit<PopoverProps, 'title' | 'content' | 'children'> {
  /** 前缀图标 */
  icon?: ReactNode;
  /** 筛选器标签 */
  label?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示边框，默认 true */
  bordered?: boolean;
  /** 底部操作区域 */
  footer?: ReactNode;
  /** 是否可以被 ResponsiveGroup 收集到 Wrap 中，默认为 true */
  collapsible?: boolean;
}

/** 内部属性，用于标记组件是否在 Wrap 中 */
export interface InternalFilterProps {
  /** @internal */
  _isInWrap?: boolean;
}
