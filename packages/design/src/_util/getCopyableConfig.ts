import type { ReactNode } from 'react';
import type { CopyConfig as AntCopyConfig } from 'antd/es/typography/Base';

export interface CopyConfig extends AntCopyConfig {
  /** 仅在 hover 文本或键盘聚焦时展示复制入口 */
  hover?: boolean;
}

export type Copyable = boolean | CopyConfig;

/**
 * 剥离 OceanBase 扩展的 hover 配置，其余配置原样透传给 antd。
 * 组件未显式设置 `hover` 时回退到 ConfigProvider 的全局默认值。
 * 纯图标型复制（无子元素）没有可 hover 的内容，此时回退为常驻展示，避免入口不可见。
 */
export function getCopyableConfig(
  copyable?: Copyable,
  children?: ReactNode,
  defaultHover?: boolean
) {
  if (!copyable) {
    return { hover: false, copyable };
  }
  const iconOnly = children === undefined || children === null;
  if (typeof copyable !== 'object') {
    return { hover: !!defaultHover && !iconOnly, copyable };
  }
  const { hover, ...rest } = copyable;
  const resolvedHover = hover ?? defaultHover;
  return { hover: !!resolvedHover && !iconOnly, copyable: rest };
}
