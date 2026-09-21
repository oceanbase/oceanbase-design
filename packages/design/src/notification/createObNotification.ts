import type { NotificationConfig, NotificationInstance } from 'antd/es/notification/interface';
import { notification as antNotification } from 'antd';
import { getConfiguredNotificationDuration, setGlobalNotificationDuration } from './durationConfig';
import { OB_NOTIFICATION_DEFAULT_CONFIG, wrapNotificationArgs } from './wrapNotificationArgs';
import type {
  NotificationType,
  ObNotificationArgs,
  ObNotificationConfig,
  ObNotificationDuration,
  ObNotificationInstance,
} from './interface';

const activeDedupeKeys = new Set<string>();

const getDedupeScopeKey = (type: NotificationType, dedupeKey: string) => `${type}:${dedupeKey}`;

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

export interface CreateObNotificationOptions {
  /**
   * 实例级默认自动关闭时长，按优先级从高到低传入；
   * notification.config 的全局配置由 durationConfig 固定作为最后一级。
   */
  durations?: ObNotificationDuration[];
}

export const createObNotification = (
  base: NotificationInstance,
  options: CreateObNotificationOptions = {}
): ObNotificationInstance => {
  const { durations = [] } = options;

  // duration 在每次弹出时解析，保证后置的 notification.config() 也能生效
  const openNotification = (type: NotificationType, args: ObNotificationArgs) => {
    if (shouldSkipDedupe(type, args)) {
      return;
    }
    const wrapped = wrapNotificationArgs({
      type,
      args: attachDedupeCleanup(type, args),
      configuredDuration: getConfiguredNotificationDuration(type, ...durations),
    });

    if (type === 'loading') {
      base.open(wrapped);
      return;
    }

    base[type](wrapped);
  };

  const handle = (type: NotificationType) => (args: ObNotificationArgs) =>
    openNotification(type, args);

  return {
    ...base,
    open: (args: ObNotificationArgs) =>
      openNotification((args.type as NotificationType) || 'info', args),
    success: handle('success'),
    error: handle('error'),
    info: handle('info'),
    warning: handle('warning'),
    loading: handle('loading'),
    destroy: (key?: React.Key) => {
      if (key === undefined) {
        activeDedupeKeys.clear();
      }
      base.destroy(key);
    },
    config: (config?: ObNotificationConfig) => {
      const { duration: configDuration, ...restConfig } = config ?? {};
      // duration 由 OB 侧解析（数字整体覆盖、对象按类型合并），对所有静态方法与 hooks 实例生效
      setGlobalNotificationDuration(configDuration);
      antNotification.config({
        ...OB_NOTIFICATION_DEFAULT_CONFIG,
        ...restConfig,
        // OB 通知始终显式传入 duration，这里的数字镜像只为宿主中直接使用原生 antd 通知时的默认值保持与改动前一致
        ...(typeof configDuration === 'number' ? { duration: configDuration } : {}),
        stack: restConfig.stack ?? OB_NOTIFICATION_DEFAULT_CONFIG.stack,
      } as NotificationConfig);
    },
  };
};
