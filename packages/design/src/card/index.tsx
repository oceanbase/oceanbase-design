import { isNullValue } from '@oceanbase/util';
import { Card as AntCard, Space, Tag } from 'antd';
import type {
  CardProps as AntCardProps,
  CardTabListType as AntCardTabListType,
} from 'antd/es/card';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/card/Card';
export * from 'antd/es/card';

export interface CardTabListType extends AntCardTabListType {
  tag?: React.ReactNode;
}

export interface CardProps extends AntCardProps {
  // 是否展示分割线，默认为 true
  divided?: boolean;
  tabList?: CardTabListType[];
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      size,
      divided = true,
      tabList,
      prefixCls: customizePrefixCls,
      bodyStyle,
      className,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const tabsPrefixCls = getPrefixCls('tabs', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls, tabsPrefixCls);

    // card body has no padding
    const noBodyPadding = [0, '0', '0px'].includes(bodyStyle?.padding);

    const cardCls = classNames(
      {
        [`${prefixCls}-no-divider`]: !divided,
        [`${prefixCls}-no-body-padding`]: noBodyPadding,
      },
      className
    );

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

    return wrapSSR(
      <ConfigProvider
        injectStaticFunction={false}
        table={
          noBodyPadding
            ? {
                // expand selection column width for larger padding-left
                // related to .ant-card-no-body-padding style
                selectionColumnWidth: size === 'small' ? 36 : 48,
              }
            : {}
        }
      >
        <AntCard
          ref={ref}
          size={size}
          tabList={newTabList}
          prefixCls={customizePrefixCls}
          bodyStyle={bodyStyle}
          className={cardCls}
          {...restProps}
        >
          {children}
        </AntCard>
      </ConfigProvider>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Card.displayName = AntCard.displayName;
}

export default Object.assign(Card, {
  Grid: AntCard.Grid,
  Meta: AntCard.Meta,
});
