import { Badge as AntBadge } from 'antd';
import type { BadgeProps as AntBadgeProps } from 'antd/es/badge';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import IconBadge from './IconBadge';
import useStyle from './style';

export * from 'antd/es/badge';

export interface BadgeProps extends AntBadgeProps {
  gray?: boolean;
  icon?: boolean | React.ReactNode;
}

const Badge = ({
  prefixCls: customizePrefixCls,
  className,
  gray,
  icon,
  ...restProps
}: BadgeProps) => {
  const { getPrefixCls, badge } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('badge', customizePrefixCls);

  const { wrapSSR } = useStyle(prefixCls);

  const badgeCls = classNames(
    {
      [`${prefixCls}-oceanbase`]: true,
      [`${prefixCls}-oceanbase-gray`]: gray,
    },
    className
  );

  return wrapSSR(<>
    {
      icon ? <IconBadge
        prefixCls={customizePrefixCls}
        className={badgeCls}
        icon={icon}
        {...restProps}
      /> : <AntBadge
        prefixCls={customizePrefixCls}
        className={badgeCls}
        {...restProps}
      />
    }
  </>

  );
};

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = AntBadge.displayName;
}
Badge.Icon = IconBadge;

export default Badge;
