import type { Key, MouseEvent } from 'react';
import type {
  ArgsProps as MessageArgsProps,
  ConfigOptions,
  JointContent,
  MessageInstance,
  NoticeType,
} from 'antd/es/message/interface';
import type { NotificationConfig } from 'antd/es/notification/interface';
import type {
  NotificationType,
  ObNotificationArgs,
  ObNotificationInstance,
} from '../notification/interface';
import { wrapPromiseFn } from './wrapPromiseFn';

let keyIndex = 0;

const warnDeprecated = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '[@oceanbase/design] `message` is deprecated for notification scenarios. Use `notification` instead.'
    );
  }
};

const parseOffset = (value: string | number) => {
  const parsed = typeof value === 'number' ? value : Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const adaptMessageOnClick = (onClick?: (event: MouseEvent<HTMLDivElement>) => void) => {
  if (!onClick) {
    return undefined;
  }
  return () => {
    onClick({} as MouseEvent<HTMLDivElement>);
  };
};

const isMessageArgs = (content: JointContent): content is MessageArgsProps =>
  typeof content === 'object' && content !== null && 'content' in content;

const normalizeMessageArgs = (
  type: NoticeType | undefined,
  content: JointContent,
  duration?: number | VoidFunction,
  onClose?: VoidFunction
): { noticeType: NotificationType; args: ObNotificationArgs } => {
  const config: MessageArgsProps = isMessageArgs(content) ? content : { content };

  let mergedDuration: number | undefined;
  let mergedOnClose: VoidFunction | undefined;
  if (typeof duration === 'function') {
    mergedOnClose = duration;
  } else {
    mergedDuration = duration;
    mergedOnClose = onClose;
  }

  const noticeType = (config.type ?? type ?? 'info') as NotificationType;

  return {
    noticeType,
    args: {
      message: config.content,
      duration: config.duration ?? mergedDuration,
      onClose: config.onClose ?? mergedOnClose,
      icon: config.icon,
      key: config.key,
      style: config.style,
      className: config.className,
      onClick: adaptMessageOnClick(config.onClick),
    },
  };
};

const openWithNotification = (
  notification: ObNotificationInstance,
  noticeType: NotificationType,
  args: ObNotificationArgs
) => {
  let mergedKey = args.key;
  if (mergedKey === undefined || mergedKey === null) {
    keyIndex += 1;
    mergedKey = `ob-message-compat-${keyIndex}`;
  }

  return wrapPromiseFn(resolve => {
    const originalOnClose = args.onClose;
    const config: ObNotificationArgs = {
      ...args,
      key: mergedKey,
      onClose: () => {
        originalOnClose?.();
        resolve();
      },
    };

    notification[noticeType](config);

    return () => {
      notification.destroy(mergedKey);
    };
  });
};

export const mapMessageConfigToNotification = (config?: ConfigOptions): NotificationConfig => {
  if (!config) {
    return {};
  }

  const { top, duration, prefixCls, getContainer, maxCount, rtl, transitionName } = config;
  const notificationConfig: NotificationConfig = {
    duration,
    prefixCls,
    getContainer,
    maxCount,
    rtl,
  };

  if (top !== undefined) {
    const parsedTop = parseOffset(top);
    if (parsedTop !== undefined) {
      notificationConfig.placement = 'top';
      notificationConfig.top = parsedTop;
    }
  }

  if (process.env.NODE_ENV !== 'production' && transitionName) {
    console.warn(
      '[@oceanbase/design] message.config transitionName is not supported by notification and will be ignored.'
    );
  }

  return notificationConfig;
};

export const createMessageCompat = (
  notification: ObNotificationInstance
): MessageInstance & {
  config: (config: ConfigOptions) => void;
} => {
  const openMessage = (
    type: NoticeType | undefined,
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction
  ) => {
    warnDeprecated();
    const { noticeType, args } = normalizeMessageArgs(type, content, duration, onClose);
    return openWithNotification(notification, noticeType, args);
  };

  return {
    info: (content, duration, onClose) => openMessage('info', content, duration, onClose),
    success: (content, duration, onClose) => openMessage('success', content, duration, onClose),
    error: (content, duration, onClose) => openMessage('error', content, duration, onClose),
    warning: (content, duration, onClose) => openMessage('warning', content, duration, onClose),
    loading: (content, duration, onClose) => openMessage('loading', content, duration, onClose),
    open: config => openMessage(config.type, config),
    destroy: (key?: Key) => {
      notification.destroy(key);
    },
    config: config => {
      warnDeprecated();
      notification.config?.(mapMessageConfigToNotification(config));
    },
  };
};
