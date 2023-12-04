import React, { useContext } from 'react';
import { Badge as AntBadge, Space } from 'antd';
import type { BadgeProps as AntBadgeProps } from 'antd/es/badge';
import {
  CloseCircleFilled,
  CheckCircleFilled,
  Loading3QuartersOutlined,
  StopFilled,
  ClockCircleFilled,
} from '@oceanbase/icons';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/badge';

export interface BadgeProps extends AntBadgeProps {
  icon?: boolean | React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ prefixCls: customizePrefixCls, className, status, text, icon, ...restProps }, ref) => {
    const { getPrefixCls, iconPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('badge', customizePrefixCls);
    const { wrapSSR, hashId } = useStyle(prefixCls);

    const iconMap = {
      default: <StopFilled />,
      processing: (
        <Loading3QuartersOutlined
          style={{
            display: 'inline-block',
          }}
          className={`${iconPrefixCls}-spin`}
        />
      ),
      success: <CheckCircleFilled />,
      error: <CloseCircleFilled />,
      warning: <ClockCircleFilled />,
    };

    return wrapSSR(
      <>
        {status && icon ? (
          <span
            ref={ref}
            // should add prefixCls as part of className to make style work
            className={classNames(prefixCls, `${prefixCls}-status`, className, hashId)}
            style={{
              display: 'inline-block',
            }}
            {...restProps}
          >
            <span
              className={classNames(`${prefixCls}-status-icon`, `${prefixCls}-status-${status}`)}
            >
              {React.isValidElement(icon) ? icon : iconMap[status]}
            </span>
            {text && <span className={`${prefixCls}-status-text`}>{text}</span>}
          </span>
        ) : (
          <AntBadge
            ref={ref}
            prefixCls={customizePrefixCls}
            className={className}
            status={status}
            text={text}
            {...restProps}
          />
        )}
      </>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = AntBadge.displayName;
}

export default Object.assign(Badge, {
  Ribbon: AntBadge.Ribbon,
});
