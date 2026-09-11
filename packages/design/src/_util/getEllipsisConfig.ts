import React, { isValidElement } from 'react';
import type { ReactNode } from 'react';
import toArray from 'rc-util/lib/Children/toArray';
import type { EllipsisConfig } from '../typography';

export type Ellipsis = boolean | EllipsisConfig;

/**
 * 判断 children 中是否已经包含 Tooltip，避免自动添加的 Tooltip 与业务自己的 Tooltip 重复。
 * 通过 toArray 展开数组和 Fragment，兼容多子元素、Fragment 包裹等场景。
 */
const isTooltipWrapped = (children?: ReactNode): boolean =>
  toArray(children).some(node => (node.type as any)?.__ANT_TOOLTIP === true);

export function getEllipsisConfig(ellipsis?: Ellipsis, children?: ReactNode): Ellipsis | undefined {
  // ellipsis 未开启或已关闭时，保持原样
  if (!ellipsis) {
    return ellipsis;
  }
  const ellipsisConfig: EllipsisConfig = typeof ellipsis === 'object' ? ellipsis : {};
  const { tooltip } = ellipsisConfig;

  // 如果目标元素已经被 Tooltip 包裹，则关闭默认的 Tooltip，避免出现两个 Tooltip
  if (isTooltipWrapped(children)) {
    return {
      ...ellipsisConfig,
      tooltip: false,
    };
  }

  // 未自定义 Tooltip 时，默认在内容溢出时展示 Tooltip，title 取 children
  if (tooltip === undefined) {
    return {
      ...ellipsisConfig,
      tooltip: true,
    };
  }

  return {
    ...ellipsisConfig,
    // TooltipProps
    tooltip:
      tooltip === true
        ? true
        : typeof tooltip === 'object' && !isValidElement(tooltip)
          ? tooltip
          : { title: tooltip },
  };
}
