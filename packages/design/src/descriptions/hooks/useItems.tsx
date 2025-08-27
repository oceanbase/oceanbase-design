import React, { isValidElement, ReactElement } from 'react';
import warning from 'antd/es/_util/warning';
import toArray from 'rc-util/lib/Children/toArray';
import type { TooltipPlacement } from 'antd/es/tooltip';
import Typography from '../../typography';
import type { DescriptionsItemType } from '..';
import { getEllipsisConfig } from '../../_util/getEllipsisConfig';

// Convert children into items
const children2Items = (children?: React.ReactNode) => {
  const childrenItems = toArray(children)
    .map((node: React.ReactElement<DescriptionsItemType>) => {
      if (React.isValidElement(node)) {
        const { key, props } = node;
        return {
          key: key as string,
          ...props,
        };
      }
      return null;
    })
    .filter(node => !!node);
  return childrenItems;
};

function convertItem(props: DescriptionsItemType, bordered?: boolean) {
  const { children: itemChildren, contentProps, ...restItemProps } = props;
  const itemChildrenType = (itemChildren as ReactElement)?.type as any;
  const defaultEllipsis = {
    tooltip: {
      placement: 'topLeft' as TooltipPlacement,
      title: itemChildren,
    },
  };
  const { ellipsis = defaultEllipsis, editable, ...restContentProps } = contentProps || {};
  return {
    ...restItemProps,
    // 无边框并且子元素非 Typography 时外面包一层 Typography.Text，以实现自动省略
    children:
      bordered || itemChildrenType?.__ANT_TYPOGRAPHY ? (
        itemChildren
      ) : (
        <Typography.Text
          {...restContentProps}
          ellipsis={getEllipsisConfig(ellipsis, itemChildren)}
          editable={
            // disable autoSize by default to avoid over height
            typeof editable === 'object'
              ? {
                  autoSize: false,
                  ...editable,
                }
              : editable === true
                ? {
                    autoSize: false,
                  }
                : editable
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
