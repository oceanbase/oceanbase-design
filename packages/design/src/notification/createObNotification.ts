import type { NotificationConfig, NotificationInstance } from 'antd/es/notification/interface';
import { notification as antNotification } from 'antd';
import { OB_NOTIFICATION_DEFAULT_CONFIG, wrapNotificationArgs } from './wrapNotificationArgs';
import type { NotificationType, ObNotificationArgs, ObNotificationInstance } from './interface';

const activeDedupeKeys = new Set<string>();

const getDedupeScopeKey = (type: NotificationType, dedupeKey: string) => `${type}:${dedupeKey}`;

const openWithType = (
  base: NotificationInstance,
  type: NotificationType,
  args: ObNotificationArgs
) => {
  const wrapped = wrapNotificationArgs({ type, args });

  if (type === 'processing') {
    base.open(wrapped);
    return;
  }

  base[type](wrapped);
};

const shouldSkipDedupe = (type: NotificationType, args: ObNotificationArgs) => {
  if (!args.dedupeKey) {
    return false;
  }
  const scopeKey = getDedupeScopeKey(type, args.dedupeKey);
  if (activeDedupeKeys.has(scopeKey)) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        `[@oceanbase/design] Notification ${type} with dedupeKey "${args.dedupeKey}" was skipped.`
      );
    }
    return true;
  }
  return false;
};

const attachDedupeCleanup = (type: NotificationType, args: ObNotificationArgs) => {
  if (!args.dedupeKey) {
    return args;
  }

  const scopeKey = getDedupeScopeKey(type, args.dedupeKey);
  activeDedupeKeys.add(scopeKey);
  const originalOnClose = args.onClose;

  return {
    ...args,
    onClose: () => {
      activeDedupeKeys.delete(scopeKey);
      originalOnClose?.();
    },
  };
};

export const createObNotification = (base: NotificationInstance): ObNotificationInstance => {
  const wrap = (type: NotificationType) => (args: ObNotificationArgs) => {
    if (shouldSkipDedupe(type, args)) {
      return;
    }
    openWithType(base, type, attachDedupeCleanup(type, args));
  };

  return {
    ...base,
    open: (args: ObNotificationArgs) => {
      const type = (args.type as NotificationType) || 'info';
      if (shouldSkipDedupe(type, args)) {
        return;
      }
      openWithType(base, type, attachDedupeCleanup(type, args));
    },
    success: wrap('success'),
    error: wrap('error'),
    info: wrap('info'),
    warning: wrap('warning'),
    processing: wrap('processing'),
    destroy: (key?: React.Key) => {
      if (key === undefined) {
        activeDedupeKeys.clear();
      }
      base.destroy(key);
    },
    config: (config: NotificationConfig) => {
      antNotification.config({
        ...OB_NOTIFICATION_DEFAULT_CONFIG,
        ...config,
        stack: config.stack ?? OB_NOTIFICATION_DEFAULT_CONFIG.stack,
      } as NotificationConfig);
    },
  };
};
