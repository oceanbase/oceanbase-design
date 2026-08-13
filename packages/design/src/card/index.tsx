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
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import {
  isHorizontalPaddingZero,
  isPaddingBottomZero,
  Document,
  type DocumentType,
} from '../_util';
import theme from '../theme';
import useStyle, { genTableStyle } from './style';

export * from 'antd/es/card/Card';
export * from 'antd/es/card';

export interface CardTabListType extends AntCardTabListType {
  tag?: React.ReactNode;
}

export type CardLocale = Record<string, never>;

export interface CardProps extends AntCardProps {
  subTitle?: React.ReactNode;
  document?: DocumentType;
  divided?: boolean;
  gray?: boolean;
  tabList?: CardTabListType[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  locale?: CardLocale;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      size,
      title,
      subTitle,
      document,
      extra,
      tabList,
      tabProps,
      tabBarExtraContent,
      divided: outerDivided,
      gray,
      prefixCls: customizePrefixCls,
      bodyStyle,
      styles,
      className,
      collapsible,
      defaultCollapsed,
      collapsed: outerCollapsed,
      onCollapse,
      locale: customLocale,
      ...restProps
    },
    ref
  ) => {
    const {
      getPrefixCls,
      card: contextCard,
      locale: contextLocale,
    } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
    const { token } = theme.useToken();
    const divided = outerDivided ?? contextCard?.divided ?? true;

    const cardLocale: CardLocale = {
      ...defaultLocale.Card,
      ...contextLocale?.Card,
      ...customLocale,
    };

    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const tabsPrefixCls = getPrefixCls('tabs', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls, tabsPrefixCls);

    const viewDocument = contextLocale?.global?.viewDocument;

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
      if (!collapsible && !subTitle && !document) {
        return title;
      }
      if (!title) {
        return null;
      }

      const titleContent = (
        <>
          <span className={`${prefixCls}-title-content`}>{title}</span>
          {(subTitle || document) && (
            <Space className={`${prefixCls}-sub-title-wrapper`} size="small">
              {subTitle && <div className={`${prefixCls}-sub-title`}>{subTitle}</div>}
              <Document document={document} prefixCls={prefixCls} viewDocument={viewDocument} />
            </Space>
          )}
        </>
      );

      if (!collapsible) {
        return (
          <div
            className={`${prefixCls}-title-wrapper`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {titleContent}
          </div>
        );
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
          {titleContent}
        </div>
      );
    }, [
      collapsible,
      title,
      subTitle,
      document,
      collapsed,
      prefixCls,
      token,
      handleCollapse,
      viewDocument,
    ]);

    // card body no horizontal padding
    const noBodyHorizontalPadding =
      isHorizontalPaddingZero(bodyStyle?.padding) || isHorizontalPaddingZero(styles?.body?.padding);
    const noBodyPaddingBottom =
      isPaddingBottomZero(bodyStyle?.padding) || isPaddingBottomZero(styles?.body?.padding);
    const cardCls = classNames(
      {
        [`${prefixCls}-has-head`]: !!(title || extra || tabList || tabBarExtraContent),
        [`${prefixCls}-no-divider`]: !divided,
        [`${prefixCls}-gray`]: gray,
        [`${prefixCls}-no-body-horizontal-padding`]: noBodyHorizontalPadding,
        [`${prefixCls}-no-body-padding-bottom`]: noBodyPaddingBottom,
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

    return wrapCSSVar(
      <AntCard
        ref={ref}
        size={size}
        title={cardTitle}
        extra={extra}
        tabList={newTabList}
        tabBarExtraContent={tabBarExtraContent}
        tabProps={{
          size: size === 'small' ? 'small' : 'middle',
          ...tabProps,
        }}
        prefixCls={customizePrefixCls}
        bodyStyle={{
          ...bodyStyle,
        }}
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
