import { useContext } from 'react';
import { notification as antNotification } from 'antd';
import { createObNotification } from './createObNotification';
import { NotificationDurationContext } from './durationContext';
import type { ObNotificationConfig } from './interface';

export const useObNotification = (config?: ObNotificationConfig) => {
  const contextDuration = useContext(NotificationDurationContext);
  // duration 由 OB 侧解析（支持按类型配置），不下传给 antd
  const { duration, ...restConfig } = config ?? {};
  const [api, holder] = antNotification.useNotification(restConfig);
  // 实例 config 优先于 ConfigProvider，未命中的类型继续向下回退
  return [createObNotification(api, { durations: [duration, contextDuration] }), holder] as const;
};
