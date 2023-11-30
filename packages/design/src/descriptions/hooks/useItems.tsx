import React, { isValidElement } from 'react';
import warning from 'antd/es/_util/warning';
import toArray from 'rc-util/lib/Children/toArray';
import type { TooltipPlacement } from 'antd/es/tooltip';
import Typography, { TextProps } from '../../typography';
import type { DescriptionsItemType } from '..';

// Convert children into items
const children2Items = (children?: React.ReactNode) => {
  const childrenItems = toArray(children)
    .map((node: React.ReactElement<DescriptionsItemType>) => {
      if (React.isValidElement(node)) {
        const { key, props } = node;
        return {
          key,
          ...props,
        };
      }
      return null;
    })
    .filter(node => node);
  return childrenItems;
};

function convertItem(props?: DescriptionsItemType, bordered?: boolean) {
  const { children: itemChildren, contentProps, ...restItemProps } = props;
  const itemChildrenType = (itemChildren as React.ReactElement)?.type as any;
  const defaultEllipsis = {
    tooltip: {
      placement: 'topLeft' as TooltipPlacement,
      title: itemChildren,
    },
  };
  const { ellipsis = defaultEllipsis, ...restContentProps } = contentProps || {};
  return {
    ...restItemProps,
    // 仅无边框时定制 children
    children: bordered ? (
      itemChildren
    ) : (
      <Typography.Text
        {...restContentProps}
        ellipsis={
          typeof ellipsis === 'object'
            ? {
                ...ellipsis,
                tooltip:
                  // 如果目标元素已经被 Tooltip 包裹，则去掉默认的 Tooltip，避免有两个 Tooltip
                  itemChildrenType?.__ANT_TOOLTIP
                    ? undefined
                    : {
                        ...defaultEllipsis.tooltip,
                        // TooltipProps
                        ...(typeof ellipsis.tooltip === 'object' &&
                        !isValidElement(ellipsis.tooltip)
                          ? ellipsis.tooltip
                          : {
                              title: ellipsis.tooltip,
                            }),
                      },
              }
            : ellipsis
        }
      >
        {itemChildren}
      </Typography.Text>
    ),
  };
}

export default function useItems(
  items?: DescriptionsItemType[],
  children?: React.ReactNode,
  bordered?: boolean
) {
  if (items) {
    return items.map(item => convertItem(item, bordered));
  }
  warning(
    !children,
    'Descriptions',
    'Descriptions.Item is deprecated. Please use `items` directly.'
  );
  return children2Items(children).map(item => convertItem(item, bordered));
}
