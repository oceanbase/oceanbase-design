import React, { isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { EllipsisConfig } from '../typography';

export type Ellipsis = boolean | EllipsisConfig;

export function getEllipsisConfig(ellipsis?: Ellipsis, children?: ReactNode): Ellipsis | undefined {
  const childrenType = (children as ReactElement)?.type as any;
  if (typeof ellipsis === 'object' && ellipsis !== null) {
    return {
      ...ellipsis,
      tooltip:
        // 如果目标元素已经被 Tooltip 包裹，则去掉默认的 Tooltip，避免有两个 Tooltip
        childrenType?.__ANT_TOOLTIP
          ? undefined
          : {
              // TooltipProps
              ...(typeof ellipsis.tooltip === 'object' && !isValidElement(ellipsis.tooltip)
                ? ellipsis.tooltip
                : {
                    title: ellipsis.tooltip,
                  }),
            },
    };
  }
  return ellipsis ?? false;
}
