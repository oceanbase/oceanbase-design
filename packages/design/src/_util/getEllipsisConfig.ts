import React, { isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { EllipsisConfig } from '../typography';
import type { TooltipPlacement } from '../tooltip';

export type Ellipsis = boolean | EllipsisConfig;

export function getEllipsisConfig(ellipsis?: Ellipsis, children?: ReactNode): Ellipsis {
  const childrenType = (children as ReactElement)?.type as any;
  return typeof ellipsis === 'object'
    ? {
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
      }
    : ellipsis;
}
