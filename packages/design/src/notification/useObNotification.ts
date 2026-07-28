import { notification as antNotification } from 'antd';
import type { NotificationConfig } from 'antd/es/notification/interface';
import { createObNotification } from './createObNotification';

export const useObNotification = (config?: NotificationConfig) => {
  const [api, holder] = antNotification.useNotification(config);
  return [createObNotification(api), holder] as const;
};
