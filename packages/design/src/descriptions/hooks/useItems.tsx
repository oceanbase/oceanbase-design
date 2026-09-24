import React, { isValidElement, ReactElement } from 'react';
import warning from 'antd/es/_util/warning';
import toArray from 'rc-util/lib/Children/toArray';
import type { TooltipPlacement } from 'antd/es/tooltip';
import Typography from '../../typography';
import type { DescriptionsItemType, DescriptionsContentProps } from '..';
import { getEllipsisConfig } from '../../_util/getEllipsisConfig';

export interface UseItemsOptions {
  bordered?: boolean;
  prefixCls?: string;
  /** Default content props for all items, can be overridden by each item's `contentProps` */
  contentProps?: DescriptionsContentProps;
}

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

// disable autoSize by default to avoid over height
const getEditableConfig = (editable: DescriptionsContentProps['editable']) =>
  typeof editable === 'object'
    ? {
        autoSize: false,
        ...editable,
      }
    : editable === true
      ? {
          autoSize: false,
        }
      : editable;

function convertItem(props: DescriptionsItemType, options: UseItemsOptions) {
  const { bordered, prefixCls, contentProps: defaultContentProps } = options;
  const { children: itemChildren, contentProps: itemContentProps, ...restItemProps } = props;
  const itemChildrenType = (itemChildren as ReactElement)?.type as any;
  const defaultEllipsis = {
    tooltip: {
      placement: 'topLeft' as TooltipPlacement,
      title: itemChildren,
    },
  };
  const {
    ellipsis = defaultEllipsis,
    editable,
    ...restContentProps
  } = {
    ...defaultContentProps,
    ...itemContentProps,
  };
  // 原生 title 仅支持纯文本，显式 title 优先，字符串内容自动派生，结构化内容需业务显式传入
  const mergedTitle =
    restContentProps.title ?? (typeof itemChildren === 'string' ? itemChildren : undefined);
  // editable、copyable 依赖 Typography 的内联操作按钮，会被 css 截断容器一并裁掉，
  // 因此这类描述项回退到完整模式，保证表现和 `ellipsis: true` 一致
  // 显式关闭（false）时不渲染按钮，无需回退
  const hasActions = Boolean(editable) || Boolean(restContentProps.copyable);
  // css 模式走纯 CSS 截断 + 原生 title，不触发 Typography 的溢出测量和 Tooltip
  const isCssEllipsis = ellipsis === 'css' && !hasActions;
  // css 模式下仍保留 Typography.Text，用于承载 caption、block 等其余内容属性，仅关闭 ellipsis
  // 仅显式开启的内容属性才需要承载，避免 `copyable: false` 这类关闭值白白多包一层
  const shouldKeepTypography = Object.values(restContentProps).some(Boolean);

  // 无边框并且子元素非 Typography 时外面包一层 Typography.Text 或 css 截断容器，以实现自动省略
  const itemContent =
    bordered || itemChildrenType?.__ANT_TYPOGRAPHY ? (
      itemChildren
    ) : isCssEllipsis ? (
      <span className={`${prefixCls}-item-content-css-ellipsis`} title={mergedTitle}>
        {shouldKeepTypography ? (
          <Typography.Text
            {...restContentProps}
            ellipsis={false}
            editable={getEditableConfig(editable)}
          >
            {itemChildren}
          </Typography.Text>
        ) : (
          itemChildren
        )}
      </span>
    ) : (
      <Typography.Text
        {...restContentProps}
        // css 模式回退或不支持时，按默认的省略和 Tooltip 处理
        ellipsis={getEllipsisConfig(ellipsis === 'css' ? defaultEllipsis : ellipsis, itemChildren)}
        editable={getEditableConfig(editable)}
      >
        {itemChildren}
      </Typography.Text>
    );

  return {
    ...restItemProps,
    children: itemContent,
  };
}

export default function useItems(
  items: DescriptionsItemType[] | undefined,
  children: React.ReactNode,
  options: UseItemsOptions = {}
) {
  if (items) {
    return items.map(item => convertItem(item, options));
  }
  warning(
    !children,
    'Descriptions',
    'Descriptions.Item is deprecated. Please use `items` directly.'
  );
  return children2Items(children).map(item => convertItem(item, options));
}
