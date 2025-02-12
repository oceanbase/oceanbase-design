import React, { useContext } from 'react';
import { ProCard as AntProCard } from '@ant-design/pro-components';
import type { ProCardProps } from '@ant-design/pro-components';
import { ConfigProvider } from '@oceanbase/design';
import classNames from 'classnames';
import useStyle from './style';

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
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('pro-card', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const zeroPaddingList = [0, '0', '0px'];
  // ProCard body has no padding
  const noBodyPadding = zeroPaddingList.includes(bodyStyle?.padding as string | number) || ghost;

  const proCardCls = classNames(
    {
      [`${prefixCls}-has-title`]: !!title,
      [`${prefixCls}-no-body-padding`]: noBodyPadding,
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
