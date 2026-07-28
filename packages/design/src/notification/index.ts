import { notification as antNotification } from 'antd';
import { createObNotification } from './createObNotification';
import { ensureNotificationConfig } from './ensureNotificationConfig';
import useNotificationStyle from './style';

export * from 'antd/es/notification';
export type {
  ErrorDetailItem,
  NotificationType,
  ObNotificationArgs,
  ObNotificationInstance,
} from './interface';

export { createObNotification } from './createObNotification';
export { iconMap } from './icons';
export { OB_NOTIFICATION_DEFAULT_CONFIG } from './wrapNotificationArgs';
export { ensureNotificationConfig } from './ensureNotificationConfig';
export { useObNotification } from './useObNotification';

export const useNotificationStyleHook = (prefixCls = 'ant-notification') => {
  return useNotificationStyle(prefixCls);
};

ensureNotificationConfig();

export default createObNotification(antNotification);
