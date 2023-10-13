import React, { useState, useRef, useContext, } from 'react';
import { Space, Tabs as AntTabs, Tag } from 'antd';
import type { TabsProps as AntTabsProps, TabsPosition as AntTabsPosition } from 'antd/es/tabs';
import type { Tab as AntTab } from 'rc-tabs/es/interface';
import { isNullValue } from '@oceanbase/util';
import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle from './style';
import TabPane from './TabPane';

export * from 'antd/es/tabs';

export type { TabPaneProps } from './TabPane';

export interface Tab extends AntTab {
  tag?: React.ReactNode;
}

export interface TabsProps extends AntTabsProps {
  items?: Tab[];
}

export type TabsPosition = AntTabsPosition;

const Tabs = ({
  children,
  items,
  defaultActiveKey,
  activeKey: activeKeyProp,
  onChange,
  size,
  type,
  tabPosition,
  prefixCls: customizePrefixCls,
  className,
  indicatorSize,
  ...restProps
}: TabsProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const tabsCls = classNames(className, hashId);

  const ref = useRef<HTMLDivElement>();
  const isHorizontal = !tabPosition || tabPosition === 'top' || tabPosition === 'bottom';

  let newItems = items?.map(item => {
    if (!isNullValue(item.tag)) {
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

  newItems = useLegacyItems(newItems, children, prefixCls);

  const [activeKey, setActiveKey] = useState(
    activeKeyProp || defaultActiveKey || newItems?.[0]?.key
  );

  // 防止第一次顶掉默认值
  useUpdateEffect(() => {
    // 外部触发的 activeKey 更改，需要同步内部状态变化
    if (activeKeyProp) {
      setActiveKey(activeKeyProp);
    }
  }, [activeKeyProp]);


  return wrapSSR(
    <AntTabs
      ref={ref}
      items={newItems}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKey}
      onChange={key => {
        setActiveKey(key);
        onChange?.(key);
      }}
      size={size}
      type={type}
      //  水平布局，宽度 >= 24，则两侧各减去 8px，并保持水平居中
      // 垂直布局，高度始终与 Tab btn 相同，并保持垂直居中
      indicatorSize={isHorizontal ? (origin) => (origin >= 24 ? origin - 16 : origin) : 16}
      tabPosition={tabPosition}
      tabBarGutter={!type || type === 'line' ? (isHorizontal ? 24 : 0) : undefined}
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
