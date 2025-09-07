import React, { useCallback, useContext } from 'react';
import { Divider, Space, Tabs as AntTabs, Tag } from 'antd';
import type {
  TabsProps as AntTabsProps,
  TabsPosition as AntTabsPosition,
  TabsRef,
} from 'antd/es/tabs';
import type { Tab as AntTab } from 'rc-tabs/es/interface';
import { isNullValue } from '@oceanbase/util';
import classNames from 'classnames';
import Badge from '../badge';
import ConfigProvider from '../config-provider';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle, { genTabsStyle } from './style';
import TabPane from './TabPane';
import type { TabPaneProps } from './TabPane';
import type { BadgeProps } from '../badge';

export * from 'antd/es/tabs';
export type { TabPaneProps };

type BadgeType = BadgeProps | BadgeProps['count'];

export interface AntTabOptional extends Omit<AntTab, 'key' | 'label'> {
  key?: string;
  label?: React.ReactNode;
}

export type Tab = {
  /** @deprecated please use `badge` instead */
  tag?: React.ReactNode;
  divider?: boolean;
  badge?: BadgeType;
} & (AntTab | AntTabOptional);

export interface TabsProps extends Omit<AntTabsProps, 'items'> {
  divider?: boolean;
  items?: Tab[];
}

export type TabsPosition = AntTabsPosition;

const isReactNode = (item: BadgeType): item is React.ReactNode => {
  return React.isValidElement(item);
};

type CompoundedComponent = React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<TabsRef>
> & {
  TabPane: typeof TabPane;
  genTabsStyle: typeof genTabsStyle;
};

const Tabs = React.forwardRef<TabsRef, TabsProps>(
  (
    {
      children,
      divider = false,
      items,
      type,
      tabPosition,
      prefixCls: customizePrefixCls,
      className,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tabs', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const tabsCls = classNames(className, {
      [`${prefixCls}-no-divider`]: !divider,
    });

    const isHorizontal = !tabPosition || tabPosition === 'top' || tabPosition === 'bottom';
    const dividerList = items?.filter(item => item.divider) || [];

    const renderBadge = useCallback(
      (badge: BadgeType) => {
        if (typeof badge === 'object' && !isReactNode(badge)) {
          return (
            <Badge {...badge} className={classNames(`${prefixCls}-tab-badge`, badge.className)} />
          );
        }
        return <Badge className={`${prefixCls}-tab-badge`} count={badge} />;
      },
      [prefixCls]
    );

    let newItems = useLegacyItems(items, children);

    newItems = newItems?.map(item => {
      if (!isNullValue(item.divider)) {
        return {
          ...item,
          key: `divider-${dividerList?.indexOf(item)}`,
          label: (
            <Divider
              // horizontal tabs => vertical divider
              type={isHorizontal ? 'vertical' : 'horizontal'}
              className={`${prefixCls}-divider`}
            />
          ),
          disabled: true,
        };
      } else if (!isNullValue(item.tag) || !isNullValue(item.badge)) {
        return {
          ...item,
          label: (
            <Space size={4}>
              {item.label}
              {item.badge && renderBadge(item.badge)}
              {!isNullValue(item.tag) && (
                <Tag bordered={false} className={`${prefixCls}-tab-tag`}>
                  {item.tag}
                </Tag>
              )}
            </Space>
          ),
        };
      }
      return item;
    });

    return wrapSSR(
      <AntTabs
        ref={ref}
        items={newItems as AntTabsProps['items']}
        type={type}
        tabPosition={tabPosition}
        prefixCls={customizePrefixCls}
        className={tabsCls}
        {...restProps}
      />
    );
  }
) as CompoundedComponent;

Tabs.TabPane = TabPane;
Tabs.genTabsStyle = genTabsStyle;

if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = AntTabs.displayName;
}

export default Tabs;
