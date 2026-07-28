import type {
  ArgsProps,
  GlobalConfigProps,
  NotificationConfig,
  NotificationInstance,
} from 'antd/es/notification/interface';

export type {
  ArgsProps,
  GlobalConfigProps,
  NotificationInstance,
  NotificationPlacement,
} from 'antd/es/notification/interface';

export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'loading';

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
  config?: (config: NotificationConfig | GlobalConfigProps) => void;
}
