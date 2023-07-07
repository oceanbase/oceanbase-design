import { isNullValue } from '@oceanbase/util';
import { Card as AntCard, Space, Tag } from 'antd';
import type {
  CardProps as AntCardProps,
  CardTabListType as AntCardTabListType,
} from 'antd/es/card';
import classNames from 'classnames';
import React, { useContext, useRef, useState } from 'react';
import ConfigProvider from '../config-provider';
import useInkBar from '../tabs/hooks/useInkBar';
import useStyle from './style';

export * from 'antd/es/card';

export interface CardTabListType extends AntCardTabListType {
  tag?: React.ReactNode;
}

export interface CardProps extends AntCardProps {
  // 是否展示分割线，默认为 true
  divided?: boolean;
  tabList?: CardTabListType[];
}

const Card = ({
  children,
  divided = true,
  tabList,
  activeTabKey,
  defaultActiveTabKey,
  onTabChange,
  tabProps,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: CardProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('card', customizePrefixCls);
  const tabsPrefixCls = getPrefixCls('tabs', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls, tabsPrefixCls);
  const cardCls = classNames(
    {
      [`${prefixCls}-no-divider`]: !divided,
    },
    className,
    hashId
  );

  const ref = useRef<HTMLDivElement>();

  const newTabList = tabList?.map(item => {
    if (!isNullValue(item.tag)) {
      return {
        ...item,
        tab: (
          <Space size={4}>
            {item.tab}
            <Tag bordered={false} className={`${tabsPrefixCls}-tab-tag`}>
              {item.tag}
            </Tag>
          </Space>
        ),
      };
    }
    return item;
  });

  const [activeKey, setActiveKey] = useState(
    activeTabKey || defaultActiveTabKey || newTabList?.[0]?.key
  );

  useInkBar({
    prefixCls: tabsPrefixCls,
    activeKey,
    size: tabProps?.size,
    type: tabProps?.type,
    tabPosition: tabProps?.tabPosition,
    containerRef: ref,
  });

  return wrapSSR(
    <AntCard
      ref={ref}
      tabList={newTabList}
      defaultActiveTabKey={defaultActiveTabKey}
      activeTabKey={activeTabKey}
      onTabChange={key => {
        setActiveKey(key);
        onTabChange?.(key);
      }}
      tabProps={tabProps}
      prefixCls={customizePrefixCls}
      className={cardCls}
      {...restProps}
    >
      {children}
    </AntCard>
  );
};

Card.Grid = AntCard.Grid;
Card.Meta = AntCard.Meta;

if (process.env.NODE_ENV !== 'production') {
  Card.displayName = AntCard.displayName;
}

export default Card;
