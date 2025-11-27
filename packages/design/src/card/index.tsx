import { isNullValue } from '@oceanbase/util';
import { Card as AntCard, Space, Tag } from 'antd';
import type {
  CardProps as AntCardProps,
  CardTabListType as AntCardTabListType,
} from 'antd/es/card';
import classNames from 'classnames';
import React, { useContext, useState, useMemo, useCallback } from 'react';
import { CaretRightFilled } from '@oceanbase/icons';
import ConfigProvider from '../config-provider';
import { isHorizontalPaddingZero } from '../_util';
import theme from '../theme';
import useStyle, { genTableStyle } from './style';

export * from 'antd/es/card/Card';
export * from 'antd/es/card';

export interface CardTabListType extends AntCardTabListType {
  tag?: React.ReactNode;
}

export interface CardProps extends AntCardProps {
  divided?: boolean;
  tabList?: CardTabListType[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      size,
      title,
      tabList,
      tabProps,
      divided: outerDivided,
      prefixCls: customizePrefixCls,
      bodyStyle,
      styles,
      className,
      collapsible,
      defaultCollapsed,
      collapsed: outerCollapsed,
      onCollapse,
      extra,
      ...restProps
    },
    ref
  ) => {
    const {
      getPrefixCls,
      card: contextCard,
      iconPrefixCls,
    } = useContext(ConfigProvider.ConfigContext);
    const { token } = theme.useToken();
    const divided = outerDivided ?? contextCard?.divided ?? true;

    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const tabsPrefixCls = getPrefixCls('tabs', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls, tabsPrefixCls);

    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed ?? false);
    const collapsed = outerCollapsed !== undefined ? outerCollapsed : internalCollapsed;

    const handleCollapse = useCallback(() => {
      const newCollapsed = !collapsed;
      if (outerCollapsed === undefined) {
        setInternalCollapsed(newCollapsed);
      }
      onCollapse?.(newCollapsed);
    }, [collapsed, outerCollapsed, onCollapse]);

    const cardTitle = useMemo(() => {
      if (!collapsible) {
        return title;
      }
      if (!title) {
        return null;
      }
      return (
        <div
          className={`${prefixCls}-title-wrapper`}
          onClick={handleCollapse}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <CaretRightFilled
            className={`${prefixCls}-collapsible-icon`}
            style={{
              transition: `transform ${token.motionDurationMid}`,
              transform: collapsed ? undefined : 'rotate(90deg)',
              color: token.colorIcon,
              marginRight: token.marginXS,
            }}
          />
          <span>{title}</span>
        </div>
      );
    }, [collapsible, title, collapsed, prefixCls, token, handleCollapse]);

    // card body no horizontal padding
    const noBodyHorizontalPadding =
      isHorizontalPaddingZero(bodyStyle?.padding) || isHorizontalPaddingZero(styles?.body?.padding);
    const cardCls = classNames(
      {
        [`${prefixCls}-has-title`]: !!title,
        [`${prefixCls}-no-divider`]: !divided,
        [`${prefixCls}-no-body-horizontal-padding`]: noBodyHorizontalPadding,
        [`${prefixCls}-collapsible`]: collapsible,
        [`${prefixCls}-collapsed`]: collapsed,
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
        title={cardTitle}
        tabList={newTabList}
        tabProps={{
          size: 'middle',
          ...tabProps,
        }}
        prefixCls={customizePrefixCls}
        bodyStyle={{
          ...bodyStyle,
        }}
        styles={styles}
        className={cardCls}
        extra={extra}
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
