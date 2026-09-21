import { notification as antNotification } from 'antd';
import { createObNotification } from '../createObNotification';
import { resetGlobalNotificationDuration } from '../durationConfig';
import { wrapNotificationArgs } from '../wrapNotificationArgs';

describe('createObNotification', () => {
  afterEach(() => {
    resetGlobalNotificationDuration();
  });
  it('deduplicates notifications by dedupeKey within the same type', () => {
    const warning = vi.fn();
    const error = vi.fn();
    const api = createObNotification({
      ...antNotification,
      warning,
      error,
      open: vi.fn(),
      success: vi.fn(),
      info: vi.fn(),
      destroy: vi.fn(),
    } as typeof antNotification);

    api.warning({
      message: 'Warning 1',
      dedupeKey: 'same-key',
    });
    api.warning({
      message: 'Warning 2',
      dedupeKey: 'same-key',
    });
    api.error({
      message: 'Error 1',
      dedupeKey: 'same-key',
    });

    expect(warning).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
  });

  it('exposes loading method for in-progress notifications', () => {
    const open = vi.fn();
    const api = createObNotification({
      ...antNotification,
      warning: vi.fn(),
      error: vi.fn(),
      open,
      success: vi.fn(),
      info: vi.fn(),
      destroy: vi.fn(),
    } as typeof antNotification);

    api.loading({ message: 'Loading' });

    expect(open).toHaveBeenCalledTimes(1);
  });

  it('wraps loading notification with loading class', () => {
    const wrapped = wrapNotificationArgs({
      type: 'loading',
      args: { message: 'Loading' },
    });

    expect(wrapped.className).toContain('ant-notification-notice-loading');
    expect(wrapped.duration).toBe(5);
    expect(wrapped.showProgress).toBe(true);
  });

  it('applies instance duration to wrapped args', () => {
    const wrapped = wrapNotificationArgs({
      type: 'error',
      args: { message: 'Error' },
      configuredDuration: 4,
    });

    expect(wrapped.duration).toBe(4);
    expect(wrapped.showProgress).toBe(true);
  });

  it('applies global duration configured by notification.config', () => {
    const error = vi.fn();
    const configSpy = vi.spyOn(antNotification, 'config').mockImplementation(() => {});
    const api = createObNotification({
      ...antNotification,
      warning: vi.fn(),
      error,
      open: vi.fn(),
      success: vi.fn(),
      info: vi.fn(),
      destroy: vi.fn(),
    } as typeof antNotification);

    api.config?.({ duration: { error: 3 } });
    api.error({ message: 'Error' });

    expect(error).toHaveBeenCalledWith(expect.objectContaining({ duration: 3 }));
    // 对象形式的 duration 只用于 OB 侧解析，不传给 antd
    expect(configSpy).toHaveBeenCalledTimes(1);
    expect(configSpy.mock.calls[0][0]).not.toHaveProperty('duration');

    configSpy.mockRestore();
  });

  it('merges duration across repeated notification.config calls', () => {
    const error = vi.fn();
    const success = vi.fn();
    const configSpy = vi.spyOn(antNotification, 'config').mockImplementation(() => {});
    const api = createObNotification({
      ...antNotification,
      warning: vi.fn(),
      error,
      success,
      open: vi.fn(),
      info: vi.fn(),
      destroy: vi.fn(),
    } as typeof antNotification);

    api.config?.({ duration: { error: 3 } });
    api.config?.({ duration: { success: 2 } });
    // 未传 duration 时保持已有配置，且不传给 antd
    api.config?.({ top: 24 });
    api.error({ message: 'Error' });
    api.success({ message: 'OK' });

    expect(error).toHaveBeenCalledWith(expect.objectContaining({ duration: 3 }));
    expect(success).toHaveBeenCalledWith(expect.objectContaining({ duration: 2 }));
    expect(configSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ top: 24, stack: expect.anything() })
    );

    configSpy.mockRestore();
  });

  it('falls back per type from the instance duration to the global config', () => {
    const error = vi.fn();
    const success = vi.fn();
    const configSpy = vi.spyOn(antNotification, 'config').mockImplementation(() => {});
    const api = createObNotification(
      {
        ...antNotification,
        warning: vi.fn(),
        error,
        success,
        open: vi.fn(),
        info: vi.fn(),
        destroy: vi.fn(),
      } as typeof antNotification,
      { durations: [{ error: 6 }] }
    );

    // 实例级只配置了 error，success 应按类型回退到全局配置
    api.config?.({ duration: { success: 2 } });
    api.error({ message: 'Error' });
    api.success({ message: 'OK' });

    expect(error).toHaveBeenCalledWith(expect.objectContaining({ duration: 6 }));
    expect(success).toHaveBeenCalledWith(expect.objectContaining({ duration: 2 }));

    configSpy.mockRestore();
  });

  it('resolves duration at open time so later config calls apply', () => {
    const success = vi.fn();
    const configSpy = vi.spyOn(antNotification, 'config').mockImplementation(() => {});
    const api = createObNotification({
      ...antNotification,
      warning: vi.fn(),
      error: vi.fn(),
      success,
      open: vi.fn(),
      info: vi.fn(),
      destroy: vi.fn(),
    } as typeof antNotification);

    api.config?.({ duration: { success: 2 } });
    api.success({ message: 'OK' });

    expect(success).toHaveBeenCalledWith(expect.objectContaining({ duration: 2 }));

    configSpy.mockRestore();
  });
});
