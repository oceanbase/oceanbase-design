import { notification as antNotification } from 'antd';
import { OB_NOTIFICATION_DEFAULT_CONFIG } from './wrapNotificationArgs';

let configured = false;

export const ensureNotificationConfig = () => {
  if (configured) {
    return;
  }
  antNotification.config(OB_NOTIFICATION_DEFAULT_CONFIG);
  configured = true;
};
