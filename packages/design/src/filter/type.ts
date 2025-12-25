import type { ReactNode } from 'react';
import type { PopoverProps } from 'antd';

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
  /** 额外内容，显示在筛选器弹框的标签旁边 */
  extra?: ReactNode;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否可以被 ResponsiveGroup 收集到 Wrap 中，默认为 true */
  collapsible?: boolean;
  /** 是否始终折叠到"更多"按钮中，无论容器宽度是否充足，默认为 false */
  alwaysCollapse?: boolean;
}

/** 内部属性，用于标记组件是否在 Wrap 中 */
export interface InternalFilterProps {
  /** @internal */
  _isInWrap?: boolean;
}
