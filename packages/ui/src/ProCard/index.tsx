import React, { useContext } from 'react';
import { ProCard as AntProCard } from '@ant-design/pro-components';
import type { ProCardProps } from '@ant-design/pro-components';
import { ConfigProvider, theme } from '@oceanbase/design';
import { isHorizontalPaddingZero } from '@oceanbase/design/es/_util';
import { CaretRightFilled } from '@oceanbase/icons';
import classNames from 'classnames';
import useStyle from './style';

export { ProCardProps };

export type ProCardType = typeof AntProCard;

const ProCard = (({
  bordered,
  ghost,
  title,
  tabs,
  headerBordered,
  bodyStyle,
  prefixCls: customizePrefixCls,
  className,
  style,
  ...restProps
}) => {
  const {
    getPrefixCls,
    iconPrefixCls,
    card: contextCard,
  } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('pro-card', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const { token } = theme.useToken();

  // ProCard body no horizontal padding
  const noBodyHorizontalPadding = isHorizontalPaddingZero(bodyStyle?.padding) || ghost;

  const proCardCls = classNames(
    {
      [`${prefixCls}-has-title`]: !!title,
      [`${prefixCls}-no-body-horizontal-padding`]: noBodyHorizontalPadding,
      [`${prefixCls}-no-divider`]: !headerBordered,
      [`${prefixCls}-contain-tabs`]: !!tabs,
    },
    contextCard?.className,
    className
  );

  return wrapSSR(
    <AntProCard
      prefixCls={customizePrefixCls}
      bordered={
        bordered ?? (contextCard?.variant ? contextCard?.variant === 'outlined' : undefined)
      }
      ghost={ghost}
      title={title}
      tabs={
        typeof tabs === 'object'
          ? {
              size: 'large',
              ...tabs,
            }
          : tabs
      }
      headerBordered={headerBordered ?? contextCard?.divided}
      bodyStyle={bodyStyle}
      className={proCardCls}
      style={{
        ...contextCard?.style,
        ...style,
      }}
      collapsibleIconRender={({ collapsed }) => {
        return (
          <CaretRightFilled
            className={`${iconPrefixCls} ${iconPrefixCls}-right ${prefixCls}-collapsible-icon`}
            style={{
              transition: 'transform 0.2s',
              transform: collapsed ? undefined : 'rotate(90deg)',
              color: token.colorTextSecondary,
            }}
          />
        );
      }}
      {...restProps}
    />
  );
}) as ProCardType;

if (process.env.NODE_ENV !== 'production') {
  ProCard.displayName = AntProCard.displayName;
}

ProCard.isProCard = AntProCard.isProCard;
ProCard.Divider = AntProCard.Divider;
ProCard.TabPane = AntProCard.TabPane;
ProCard.Group = AntProCard.Group;

export default ProCard;
