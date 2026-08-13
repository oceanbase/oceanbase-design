import { createMessageCompat, mapMessageConfigToNotification } from '../createMessageCompat';
import type { ObNotificationInstance } from '../../notification/interface';

const createMockNotification = () => {
  const calls: { method: string; args: unknown }[] = [];
  const api = {
    success: vi.fn((args: unknown) => calls.push({ method: 'success', args })),
    error: vi.fn((args: unknown) => calls.push({ method: 'error', args })),
    info: vi.fn((args: unknown) => calls.push({ method: 'info', args })),
    warning: vi.fn((args: unknown) => calls.push({ method: 'warning', args })),
    loading: vi.fn((args: unknown) => calls.push({ method: 'loading', args })),
    open: vi.fn(),
    destroy: vi.fn(),
    config: vi.fn(),
  } as unknown as ObNotificationInstance & { destroy: ReturnType<typeof vi.fn> };

  return { api, calls };
};

describe('mapMessageConfigToNotification', () => {
  it('maps top to notification placement and top offset', () => {
    expect(mapMessageConfigToNotification({ top: 24 })).toMatchObject({
      placement: 'top',
      top: 24,
    });
  });

  it('parses string top values', () => {
    expect(mapMessageConfigToNotification({ top: '32px' })).toMatchObject({
      placement: 'top',
      top: 32,
    });
  });

  it('forwards prefixCls and getContainer', () => {
    const getContainer = () => document.body;
    expect(
      mapMessageConfigToNotification({
        prefixCls: 'custom-message',
        getContainer,
        duration: 4,
      })
    ).toMatchObject({
      prefixCls: 'custom-message',
      getContainer,
      duration: 4,
    });
  });
});

describe('createMessageCompat', () => {
  it('maps message.success string content to notification.success', () => {
    const { api, calls } = createMockNotification();
    const message = createMessageCompat(api);

    message.success('Saved');

    expect(calls).toHaveLength(1);
    expect(calls[0].method).toBe('success');
    expect(calls[0].args).toMatchObject({ message: 'Saved' });
  });

  it('maps message.loading to notification.loading', () => {
    const { api, calls } = createMockNotification();
    const message = createMessageCompat(api);

    message.loading('Loading', 0);

    expect(calls).toHaveLength(1);
    expect(calls[0].method).toBe('loading');
    expect(calls[0].args).toMatchObject({ message: 'Loading', duration: 0 });
  });

  it('maps message.open args with loading type to notification.loading', () => {
    const { api, calls } = createMockNotification();
    const message = createMessageCompat(api);

    message.open({ type: 'loading', content: 'Submitting' });

    expect(calls).toHaveLength(1);
    expect(calls[0].method).toBe('loading');
    expect(calls[0].args).toMatchObject({ message: 'Submitting' });
  });

  it('forwards open args fields to notification', () => {
    const { api, calls } = createMockNotification();
    const message = createMessageCompat(api);
    const onClose = vi.fn();
    const onClick = vi.fn();
    const icon = 'custom-icon';

    message.open({
      type: 'warning',
      content: 'Heads up',
      duration: 6,
      key: 'warn-1',
      className: 'custom-message',
      style: { color: 'red' },
      icon,
      onClose,
      onClick,
    });

    expect(calls[0].args).toMatchObject({
      message: 'Heads up',
      duration: 6,
      key: 'warn-1',
      className: 'custom-message',
      style: { color: 'red' },
      icon,
    });

    const args = calls[0].args as { onClick?: () => void; onClose?: () => void };
    args.onClick?.();
    expect(onClick).toHaveBeenCalledTimes(1);
    args.onClose?.();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('uses explicit key without generating a new one', () => {
    const { api } = createMockNotification();
    const message = createMessageCompat(api);

    message.open({ type: 'info', content: 'Hello', key: 'fixed-key' });

    expect((api.info as ReturnType<typeof vi.fn>).mock.calls[0][0].key).toBe('fixed-key');
  });

  it('returns a close function that destroys by key', () => {
    const { api } = createMockNotification();
    const message = createMessageCompat(api);

    const close = message.info('Hello');
    const key = (api.info as ReturnType<typeof vi.fn>).mock.calls[0][0].key;
    close();

    expect(api.destroy).toHaveBeenCalledWith(key);
  });

  it('resolves returned promise when notification closes', async () => {
    const { api } = createMockNotification();
    const message = createMessageCompat(api);

    const closeable = message.success('Saved');
    const onClose = (api.success as ReturnType<typeof vi.fn>).mock.calls[0][0]
      .onClose as () => void;
    onClose();

    await expect(closeable.then(Boolean)).resolves.toBe(true);
  });

  it('forwards message.config to notification.config', () => {
    const { api } = createMockNotification();
    const message = createMessageCompat(api);
    const getContainer = () => document.body;

    message.config({
      duration: 3,
      maxCount: 5,
      rtl: true,
      top: 16,
      prefixCls: 'custom-message',
      getContainer,
    });

    expect(api.config).toHaveBeenCalledWith({
      duration: 3,
      maxCount: 5,
      rtl: true,
      top: 16,
      placement: 'top',
      prefixCls: 'custom-message',
      getContainer,
    });
  });

  it('maps typed method duration overload to onClose callback', () => {
    const { api, calls } = createMockNotification();
    const message = createMessageCompat(api);
    const onClose = vi.fn();

    message.info('Hello', onClose);

    expect(calls[0].args).toMatchObject({
      message: 'Hello',
    });

    (calls[0].args as { onClose?: () => void }).onClose?.();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
