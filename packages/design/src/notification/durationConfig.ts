import type { NotificationType, ObNotificationDuration } from './interface';

let globalDuration: ObNotificationDuration | undefined;

/**
 * 更新全局默认自动关闭时长，语义与 antd notification.config 保持一致：
 * 传数字时整体覆盖，传对象时按类型合并，未传则保持不变。
 */
export const setGlobalNotificationDuration = (duration?: ObNotificationDuration) => {
  if (duration === undefined) {
    return;
  }
  if (typeof duration === 'number') {
    globalDuration = duration;
    return;
  }
  globalDuration = {
    ...(typeof globalDuration === 'object' ? globalDuration : undefined),
    ...duration,
  };
};

/** 清空全局配置，供测试重置使用 */
export const resetGlobalNotificationDuration = () => {
  globalDuration = undefined;
};

/**
 * 按类型取出某一级配置的自动关闭时长，未命中返回 undefined。
 * 传数字时对所有类型生效；传对象时优先取同类型配置，其次取 default。
 */
const pickDurationAtLevel = (
  duration: ObNotificationDuration | undefined,
  type: NotificationType
): number | undefined => {
  if (duration === undefined) {
    return undefined;
  }
  if (typeof duration === 'number') {
    return duration;
  }
  return duration[type] ?? duration.default;
};

/**
 * 解析已配置的默认自动关闭时长（不含内置策略，返回值 undefined 表示需要回退到内置策略）。
 *
 * `durations` 按优先级从高到低传入；最后一级固定为 notification.config 的全局配置。
 * 按类型逐级回退：某一级未命中该类型时继续向下一级查找，而不是整份配置直接胜出。
 */
export const getConfiguredNotificationDuration = (
  type: NotificationType,
  ...durations: (ObNotificationDuration | undefined)[]
): number | undefined => {
  for (const duration of [...durations, globalDuration]) {
    const picked = pickDurationAtLevel(duration, type);
    if (picked !== undefined) {
      return picked;
    }
  }
  return undefined;
};
