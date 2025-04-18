import { isNullValue } from '@oceanbase/util';
import { Card as AntCard, Space, Tag } from 'antd';
import type {
  CardProps as AntCardProps,
  CardTabListType as AntCardTabListType,
} from 'antd/es/card';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import { isHorizontalPaddingZero } from '../_util';
import useStyle, { genTableStyle } from './style';

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
      title,
      tabList,
      divided: outerDivided,
      prefixCls: customizePrefixCls,
      bodyStyle,
      styles,
      className,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls, card: contextCard } = useContext(ConfigProvider.ConfigContext);
    const divided = outerDivided ?? contextCard?.divided ?? true;

    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const tabsPrefixCls = getPrefixCls('tabs', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls, tabsPrefixCls);

    // card body no horizontal padding
    const noBodyHorizontalPadding =
      isHorizontalPaddingZero(bodyStyle?.padding) || isHorizontalPaddingZero(styles?.body?.padding);
    const cardCls = classNames(
      {
        [`${prefixCls}-has-title`]: !!title,
        [`${prefixCls}-no-divider`]: !divided,
        [`${prefixCls}-no-body-horizontal-padding`]: noBodyHorizontalPadding,
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
      <AntCard
        ref={ref}
        size={size}
        title={title}
        tabList={newTabList}
        prefixCls={customizePrefixCls}
        bodyStyle={bodyStyle}
        styles={styles}
        className={cardCls}
        {...restProps}
      >
        {children}
      </AntCard>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Card.displayName = AntCard.displayName;
}

export default Object.assign(Card, {
  Grid: AntCard.Grid,
  Meta: AntCard.Meta,
  genTableStyle,
});
