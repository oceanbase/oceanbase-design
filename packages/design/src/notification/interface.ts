import type {
  ArgsProps,
  GlobalConfigProps,
  NotificationConfig,
  NotificationInstance,
} from 'antd/es/notification/interface';
import type { NotificationConfig as AntNotificationProviderConfig } from 'antd/es/config-provider/context';

export type {
  ArgsProps,
  GlobalConfigProps,
  NotificationInstance,
  NotificationPlacement,
} from 'antd/es/notification/interface';

export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'loading';

/**
 * 通知默认自动关闭时长（单位：秒），支持按类型配置。
 * `default` 用于未单独配置的类型；`0` 表示不自动关闭。
 */
export interface ObNotificationDurationConfig {
  default?: number;
  info?: number;
  success?: number;
  warning?: number;
  error?: number;
  loading?: number;
}

/**
 * 全局默认自动关闭时长：传数字表示所有类型统一使用该时长，
 * 传对象则可按类型分别配置（未命中的类型回退到 `default`，再回退到内置策略）。
 */
export type ObNotificationDuration = number | ObNotificationDurationConfig;

/** OB 扩展的通知全局配置，`duration` 支持按类型配置 */
export type ObNotificationConfig = Omit<NotificationConfig & GlobalConfigProps, 'duration'> & {
  duration?: ObNotificationDuration;
};

/**
 * ConfigProvider 下发的通知配置：antd 仅消费 `className` / `style` / `closeIcon`，
 * OB 额外消费 `duration`，其余 antd `notification.config()` 参数在此层不生效。
 */
export type ObNotificationProviderConfig = AntNotificationProviderConfig & {
  duration?: ObNotificationDuration;
};

export interface ErrorDetailItem {
  label: string;
  value: string;
  copyable?: boolean;
}

export interface ObNotificationArgs extends ArgsProps {
  errorDetails?: ErrorDetailItem[];
  /** Deduplicate notifications with the same key per type; only the first is shown */
  dedupeKey?: string;
}

export type ObNotificationMethod = (args: ObNotificationArgs) => void;

export interface ObNotificationInstance extends NotificationInstance {
  success: ObNotificationMethod;
  error: ObNotificationMethod;
  info: ObNotificationMethod;
  warning: ObNotificationMethod;
  open: ObNotificationMethod;
  loading: ObNotificationMethod;
  config?: (config: ObNotificationConfig) => void;
}
