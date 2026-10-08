import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Button, ConfigProvider, message, notification } from '@oceanbase/design';
import { resetGlobalNotificationDuration } from '../durationConfig';

const NOTICE_SELECTOR = '.ant-notification-notice';
const PROGRESS_SELECTOR = '.ant-notification-notice-progress';

/**
 * 进度条仅在解析出的 duration > 0 且开启 showProgress 时渲染，因此它是「是否会自动关闭」的
 * 确定性代理；`expected = false` 表示解析结果为 0 / 未配置。
 * 负向场景的 duration 取值同时由 wrapNotificationArgs / createObNotification 的单测固定。
 */
const expectAutoClose = async (expected: boolean) => {
  await waitFor(() => {
    expect(document.querySelector(NOTICE_SELECTOR)).toBeTruthy();
  });
  await waitFor(() => {
    expect(Boolean(document.querySelector(PROGRESS_SELECTOR))).toBe(expected);
  });
};

describe('notification global duration', () => {
  afterEach(() => {
    notification.destroy();
    resetGlobalNotificationDuration();
  });

  it('keeps error notifications open by default', async () => {
    render(
      <ConfigProvider>
        <Button id="open" onClick={() => notification.error({ message: 'Failed' })}>
          Open
        </Button>
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(false);
  });

  it('auto closes error notifications configured by ConfigProvider', async () => {
    render(
      <ConfigProvider notification={{ duration: { error: 3 } }}>
        <Button id="open" onClick={() => notification.error({ message: 'Failed' })}>
          Open
        </Button>
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(true);
  });

  it('lets a single call override the global duration', async () => {
    render(
      <ConfigProvider notification={{ duration: { error: 3 } }}>
        <Button id="open" onClick={() => notification.error({ message: 'Failed', duration: 0 })}>
          Open
        </Button>
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(false);
  });

  it('shares the global duration with message', async () => {
    render(
      <ConfigProvider>
        <Button
          id="open"
          onClick={() => {
            message.config({ duration: { error: 3 } });
            message.error('Failed');
          }}
        >
          Open
        </Button>
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(true);
  });

  it('applies ConfigProvider duration to hooks API', async () => {
    const HookDemo = () => {
      const [api, holder] = notification.useNotification();
      return (
        <>
          {holder}
          <Button id="open" onClick={() => api.error({ message: 'Failed' })}>
            Open
          </Button>
        </>
      );
    };

    render(
      <ConfigProvider notification={{ duration: { error: 3 } }}>
        <HookDemo />
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(true);
  });

  it('falls back per type from the useNotification config to ConfigProvider', async () => {
    const HookDemo = () => {
      // 实例 config 只配置了 error，success 应按类型回退到 ConfigProvider 的 0（不自动关闭）
      const [api, holder] = notification.useNotification({ duration: { error: 3 } });
      return (
        <>
          {holder}
          <Button id="open" onClick={() => api.success({ message: 'OK' })}>
            Open
          </Button>
        </>
      );
    };

    render(
      <ConfigProvider notification={{ duration: { success: 0 } }}>
        <HookDemo />
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(false);
  });

  it('lets the useNotification config win over ConfigProvider for the same type', async () => {
    const HookDemo = () => {
      const [api, holder] = notification.useNotification({ duration: { success: 0 } });
      return (
        <>
          {holder}
          <Button id="open" onClick={() => api.success({ message: 'OK' })}>
            Open
          </Button>
        </>
      );
    };

    render(
      <ConfigProvider notification={{ duration: { success: 3 } }}>
        <HookDemo />
      </ConfigProvider>
    );

    fireEvent.click(document.querySelector('#open')!);

    await expectAutoClose(false);
  });
});
