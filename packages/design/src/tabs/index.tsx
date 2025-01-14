import { isNullValue } from '@oceanbase/util';
import { Divider, Space, Tabs as AntTabs, Tag } from 'antd';
import React, { useContext } from 'react';
import type { TabsProps as AntTabsProps, TabsPosition as AntTabsPosition } from 'antd/es/tabs';
import type { Tab as AntTab } from 'rc-tabs/es/interface';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle from './style';
import TabPane from './TabPane';
import type { TabPaneProps } from './TabPane';

export * from 'antd/es/tabs';
export type { TabPaneProps };

export interface AntTabOptional extends Omit<AntTab, 'key' | 'label'> {
  key?: string;
  label?: React.ReactNode;
}

export type Tab = {
  tag?: React.ReactNode;
  divider?: boolean;
} & (AntTab | AntTabOptional);

export interface TabsProps extends Omit<AntTabsProps, 'items'> {
  items?: Tab[];
}

export type TabsPosition = AntTabsPosition;

const Tabs = ({
  children,
  items,
  type,
  tabPosition,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: TabsProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const tabsCls = classNames(className);

  const isHorizontal = !tabPosition || tabPosition === 'top' || tabPosition === 'bottom';
  const dividerList = items?.filter(item => item.divider) || [];

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
    } else if (!isNullValue(item.tag)) {
      return {
        ...item,
        label: (
          <Space size={4}>
            {item.label}
            <Tag bordered={false} className={`${prefixCls}-tab-tag`}>
              {item.tag}
            </Tag>
          </Space>
        ),
      };
    }
    return item;
  });

  return wrapSSR(
    <AntTabs
      items={newItems as AntTabsProps['items']}
      type={type}
      tabPosition={tabPosition}
      prefixCls={customizePrefixCls}
      className={tabsCls}
      {...restProps}
    />
  );
};

Tabs.TabPane = TabPane;

if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = AntTabs.displayName;
}

export default Tabs;
