import { Descriptions as AntDescriptions, Typography } from 'antd';
import type { DescriptionsProps as AntDescriptionsProps } from 'antd/es/descriptions';
import type { TooltipPlacement } from 'antd/es/tooltip';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import type { ReactElement } from 'react';
import React, { isValidElement, useContext } from 'react';
import ConfigProvider from '../config-provider';
import type { DescriptionsItemProps } from './Item';
import DescriptionsItem from './Item';
import useStyle from './style';

export * from 'antd/es/descriptions';

export type DescriptionsProps = AntDescriptionsProps;

const Descriptions = ({
  children,
  bordered,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: DescriptionsProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const typographyPrefixCls = getPrefixCls('typography', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls, typographyPrefixCls);
  const descriptionsCls = classNames(className, hashId);

  // 仅无边框时定制 children
  const newChildren = bordered
    ? children
    : toArray(children)
        .map((node: React.ReactElement<DescriptionsItemProps>) => {
          if (React.isValidElement(node)) {
            const { props } = node;
            const { children: itemChildren, contentProps, ...restItemProps } = props;
            const itemChildrenType = (itemChildren as ReactElement)?.type as any;
            const defaultEllipsis = {
              tooltip: {
                placement: 'topLeft' as TooltipPlacement,
                title: itemChildren,
              },
            };
            const { ellipsis = defaultEllipsis, ...restContentProps } = contentProps || {};
            return {
              ...node,
              props: {
                ...restItemProps,
                children: (
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
              },
            };
          }
          return null;
        })
        .map(node => node);

  return wrapSSR(
    <AntDescriptions
      bordered={bordered}
      prefixCls={customizePrefixCls}
      className={descriptionsCls}
      {...restProps}
    >
      {newChildren}
    </AntDescriptions>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Descriptions.displayName = AntDescriptions.displayName;
}

Descriptions.Item = DescriptionsItem;

export default Descriptions;
