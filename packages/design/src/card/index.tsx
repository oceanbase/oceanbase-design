import { isNullValue } from '@oceanbase/util';
import { Card as AntCard, Space, Tag, Divider, Tooltip } from 'antd';
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
import { isHorizontalPaddingZero, isPaddingBottomZero } from '../_util';
import theme from '../theme';
import useStyle, { genTableStyle } from './style';

export * from 'antd/es/card/Card';
export * from 'antd/es/card';

export interface CardTabListType extends AntCardTabListType {
  tag?: React.ReactNode;
}

export interface CardLocale {
  viewDocument?: string;
}

export interface CardProps extends AntCardProps {
  subTitle?: React.ReactNode;
  document?: string | React.MouseEventHandler<HTMLAnchorElement> | React.ReactNode;
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

    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed ?? false);
    const collapsed = outerCollapsed !== undefined ? outerCollapsed : internalCollapsed;

    const handleCollapse = useCallback(() => {
      const newCollapsed = !collapsed;
      if (outerCollapsed === undefined) {
        setInternalCollapsed(newCollapsed);
      }
      onCollapse?.(newCollapsed);
    }, [collapsed, outerCollapsed, onCollapse]);

    const documentLink = typeof document === 'string' ? document : undefined;
    const documentClick = typeof document === 'function' ? document : undefined;

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
              {document && (
                <Space size="small">
                  {document && (
                    <Divider type="vertical" className={`${prefixCls}-document-divider`} />
                  )}
                  <Tooltip title={cardLocale.viewDocument}>
                    <a
                      href={documentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={documentClick}
                      className={`${prefixCls}-document-icon`}
                    >
                      {documentLink || documentClick ? (
                        <DocumentIcon className={`${prefixCls}-document-default-icon`} />
                      ) : (
                        (document as React.ReactNode)
                      )}
                    </a>
                  </Tooltip>
                </Space>
              )}
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
      documentLink,
      documentClick,
      collapsed,
      prefixCls,
      token,
      handleCollapse,
      cardLocale.viewDocument,
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

const DocumentIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_61186_2038)">
        <path
          d="M7.99992 4.66667C7.99992 3.95942 7.71897 3.28115 7.21887 2.78105C6.71877 2.28095 6.0405 2 5.33325 2H1.33325V12H5.99992C6.53035 12 7.03906 12.2107 7.41413 12.5858C7.78921 12.9609 7.99992 13.4696 7.99992 14M7.99992 4.66667V14M7.99992 4.66667C7.99992 3.95942 8.28087 3.28115 8.78097 2.78105C9.28106 2.28095 9.95934 2 10.6666 2H14.6666V12H9.99992C9.46949 12 8.96078 12.2107 8.5857 12.5858C8.21063 12.9609 7.99992 13.4696 7.99992 14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_61186_2038">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Object.assign(Card, {
  Grid: AntCard.Grid,
  Meta: AntCard.Meta,
  genTableStyle,
});
