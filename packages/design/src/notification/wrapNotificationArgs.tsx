import React from 'react';
import { CloseOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import BuildNotificationContent from './NotificationContent';
import { iconMap } from './icons';
import type { NotificationType, ObNotificationArgs } from './interface';
import type { ArgsProps } from 'antd/es/notification/interface';

export const OB_NOTIFICATION_DEFAULT_CONFIG = {
  placement: 'bottomLeft' as const,
  bottom: 24,
  stack: { threshold: 3, gap: 8 },
  pauseOnHover: true,
  closable: true,
};

const hasRenderableContent = (node: React.ReactNode) =>
  node !== undefined && node !== null && node !== false && node !== '';

/**
 * 解析自动关闭时长，优先级：单次调用 duration > 已配置的 duration（由
 * `getConfiguredNotificationDuration` 统一解析）> 内置策略。
 */
export const resolveDuration = (
  type: NotificationType,
  description: React.ReactNode | undefined,
  args: ObNotificationArgs,
  configuredDuration?: number
): number | null => {
  if (args.duration !== undefined && args.duration !== null) {
    return args.duration;
  }
  if (configuredDuration !== undefined) {
    return configuredDuration;
  }
  if (type === 'error') {
    return 0;
  }
  if (hasRenderableContent(description)) {
    return 10;
  }
  return 5;
};

export interface WrapNotificationArgsOptions {
  type: NotificationType;
  args: ObNotificationArgs;
  prefixCls?: string;
  /** 已配置的默认自动关闭时长（实例级优先于全局），未传时回退到内置策略 */
  configuredDuration?: number;
}

export const wrapNotificationArgs = ({
  type,
  args,
  prefixCls = 'ant-notification-notice',
  configuredDuration,
}: WrapNotificationArgsOptions): ArgsProps => {
  const {
    errorDetails,
    dedupeKey: _dedupeKey,
    className,
    style,
    icon,
    closeIcon,
    actions,
    btn,
    ...restArgs
  } = args;

  if (process.env.NODE_ENV !== 'production' && style?.width !== undefined) {
    console.warn(
      '[@oceanbase/design] Notification width is fixed at 350px and cannot be customized.'
    );
  }

  if (process.env.NODE_ENV !== 'production' && (actions || btn)) {
    console.warn(
      '[@oceanbase/design] Notification `actions` / `btn` is deprecated. Pass custom links in `message` or `description` instead.'
    );
  }

  const content = BuildNotificationContent({
    prefixCls,
    args: {
      message: restArgs.message,
      description: restArgs.description,
      errorDetails,
    },
  });

  const resolvedDuration = resolveDuration(
    type,
    content.description ?? restArgs.description,
    args,
    configuredDuration
  );
  const noticeType = type === 'loading' ? undefined : type;

  const defaultIcon = icon ?? iconMap[type];
  let iconNode: React.ReactNode = defaultIcon;
  if (React.isValidElement<{ className?: string }>(defaultIcon)) {
    iconNode = React.cloneElement(defaultIcon, {
      className: classNames(`ant-notification-notice-icon-${type}`, defaultIcon.props.className),
    });
  }

  return {
    ...restArgs,
    actions,
    btn,
    ...content,
    ...OB_NOTIFICATION_DEFAULT_CONFIG,
    type: noticeType,
    duration: resolvedDuration,
    showProgress:
      resolvedDuration !== null && resolvedDuration > 0
        ? (args.showProgress ?? true)
        : args.showProgress,
    pauseOnHover: args.pauseOnHover ?? OB_NOTIFICATION_DEFAULT_CONFIG.pauseOnHover,
    closable: args.closable ?? OB_NOTIFICATION_DEFAULT_CONFIG.closable,
    closeIcon: closeIcon ?? <CloseOutlined />,
    icon: iconNode,
    className: classNames(`ant-notification-notice-${type}`, className),
    placement: args.placement ?? OB_NOTIFICATION_DEFAULT_CONFIG.placement,
  };
};
