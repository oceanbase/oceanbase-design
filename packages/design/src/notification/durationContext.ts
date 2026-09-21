import React from 'react';
import type { ObNotificationDuration } from './interface';

/**
 * ConfigProvider 下发的通知默认自动关闭时长。
 * 独立成模块，避免 notification 与 config-provider 相互引用形成循环依赖。
 */
export const NotificationDurationContext = React.createContext<ObNotificationDuration | undefined>(
  undefined
);
