import React, { useContext } from 'react';
import { ProCard as AntProCard } from '@ant-design/pro-components';
import type { ProCardProps } from '@ant-design/pro-components';
import { ConfigProvider } from '@oceanbase/design';
import classNames from 'classnames';
import useStyle from './style';

export { ProCardProps };

// @ts-ignore
const ProCard: typeof AntProCard = ({
  bodyStyle,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('pro-card', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const zeroPaddingList = [0, '0', '0px'];
  // ProCard body has no padding
  const noBodyPadding = zeroPaddingList.includes(bodyStyle?.padding as string | number);

  const proCardCls = classNames(
    {
      [`${prefixCls}-no-body-padding`]: noBodyPadding,
    },
    className
  );

  return wrapSSR(
    <AntProCard
      prefixCls={customizePrefixCls}
      bodyStyle={bodyStyle}
      className={proCardCls}
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
