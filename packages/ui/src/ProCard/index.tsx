import React, { useContext } from 'react';
import { ProCard as AntProCard } from '@ant-design/pro-components';
import type { ProCardProps } from '@ant-design/pro-components';
import { ConfigProvider } from '@oceanbase/design';
import { isHorizontalPaddingZero } from '@oceanbase/design/es/_util';
import { theme } from '@oceanbase/design';
import classNames from 'classnames';
import useStyle from './style';
import { CaretRightFilled } from '@oceanbase/icons';

export { ProCardProps };

// @ts-ignore
const ProCard: typeof AntProCard = ({
  ghost,
  title,
  tabs,
  headerBordered,
  bodyStyle,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigProvider.ConfigContext);

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
    className
  );

  return wrapSSR(
    <AntProCard
      prefixCls={customizePrefixCls}
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
      headerBordered={headerBordered}
      bodyStyle={bodyStyle}
      className={proCardCls}
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
};

if (process.env.NODE_ENV !== 'production') {
  ProCard.displayName = AntProCard.displayName;
}

ProCard.isProCard = AntProCard.isProCard;
ProCard.Divider = AntProCard.Divider;
ProCard.TabPane = AntProCard.TabPane;
ProCard.Group = AntProCard.Group;

export default ProCard;
