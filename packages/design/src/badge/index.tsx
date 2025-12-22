import React, { useContext } from 'react';
import { Badge as AntBadge, Progress } from 'antd';
import type { BadgeProps as AntBadgeProps } from 'antd/es/badge';
import type { ProgressProps as AntProgressProps } from 'antd/es/progress';
import {
  CloseCircleFilled,
  CheckCircleFilled,
  MinusCircleFilled,
  EllipsisCircleFilled,
} from '@oceanbase/icons';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import theme from '../theme';
import useStyle from './style';

export * from 'antd/es/badge';

export interface BadgeProps extends AntBadgeProps {
  icon?: boolean | React.ReactNode;
  progressProps?: AntProgressProps;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { prefixCls: customizePrefixCls, className, status, text, icon, progressProps, ...restProps },
    ref
  ) => {
    const { getPrefixCls, iconPrefixCls = 'anticon' } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('badge', customizePrefixCls);
    const [wrapCSSVar, hashId] = useStyle(prefixCls);

    const { token } = theme.useToken();
    const hasPercent = progressProps?.percent !== undefined;

    const iconMap = {
      default: <MinusCircleFilled rotate={45} />,
      processing: (
        <Progress
          type="circle"
          trailColor="transparent"
          strokeColor={token.colorPrimary}
          percent={progressProps?.percent ?? 75}
          strokeWidth={18}
          size={token.fontSize}
          {...progressProps}
          className={classNames(
            {
              [`${iconPrefixCls}-spin`]: !hasPercent,
            },
            progressProps?.className
          )}
          style={{
            // remove pointer events for progress icon to avoid trigger format popover when no percent
            ...(hasPercent ? {} : { pointerEvents: 'none' }),
            ...progressProps?.style,
          }}
        />
      ),
      success: <CheckCircleFilled />,
      error: <CloseCircleFilled />,
      warning: <EllipsisCircleFilled />,
    };

    return wrapCSSVar(
      <>
        {status && icon ? (
          <span
            ref={ref}
            // should add prefixCls as part of className to make style work
            className={classNames(
              prefixCls,
              `${prefixCls}-status`,
              className,
              // hashId is required to make style work
              hashId
            )}
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
