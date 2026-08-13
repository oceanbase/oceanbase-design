import { notification as antNotification } from 'antd';
import { createObNotification } from '../createObNotification';
import { wrapNotificationArgs } from '../wrapNotificationArgs';

describe('createObNotification', () => {
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
});
