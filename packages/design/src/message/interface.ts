import type { ConfigOptions, MessageInstance } from 'antd/es/message/interface';
import type { ObNotificationDuration } from '../notification/interface';

export * from 'antd/es/message/interface';

/** OB 兼容 message 的全局配置，`duration` 支持按类型配置（内部转发至 notification） */
export type ObMessageConfig = Omit<ConfigOptions, 'duration'> & {
  duration?: ObNotificationDuration;
};

export type ObMessageInstance = MessageInstance & {
  config: (config: ObMessageConfig) => void;
};
