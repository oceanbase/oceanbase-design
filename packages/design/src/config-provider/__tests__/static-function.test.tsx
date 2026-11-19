import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { Button, ConfigProvider, Modal, message, notification, token } from '@oceanbase/design';
import defaultTheme from '../../theme/default';
import { waitFakeTimer } from '../../../../../tests/util';

describe('ConfigProvider static function', () => {
  describe('Modal static function', () => {
    // the confirm modal is mounted asynchronously, so fake timers make awaiting it deterministic
    beforeEach(() => {
      vi.useFakeTimers();
    });
    afterEach(() => {
      vi.useRealTimers();
      vi.clearAllTimers();
    });

    it('works inside ConfigProvider', async () => {
      const { container } = render(
        <ConfigProvider>
          <Button
            id="button"
            onClick={() => {
              Modal.confirm({
                title: 'This is a confirm modal',
              });
            }}
          >
            Click
          </Button>
        </ConfigProvider>
      );
      const button = container.querySelector('#button');
      // After clicking the button, the tooltip should display normally
      fireEvent.click(button!);
      await waitFakeTimer();
      expect(document.querySelector('.ant-modal')).toBeTruthy();
      expect(getComputedStyle(document.querySelector('.ant-modal-mask')).backgroundColor).toBe(
        defaultTheme.token.colorBgMask
      );
    });

    it('works inside nested ConfigProvider', async () => {
      const { container } = render(
        <ConfigProvider>
          <ConfigProvider>
            <div>
              <ConfigProvider>
                <Button
                  id="button"
                  onClick={() => {
                    Modal.confirm({
                      title: 'This is a confirm modal',
                    });
                  }}
                >
                  Click
                </Button>
              </ConfigProvider>
            </div>
          </ConfigProvider>
        </ConfigProvider>
      );
      const button = container.querySelector('#button');
      // After clicking the button, the tooltip should display normally
      fireEvent.click(button!);
      await waitFakeTimer();
      expect(document.querySelector('.ant-modal')).toBeTruthy();
      expect(getComputedStyle(document.querySelector('.ant-modal-mask')).backgroundColor).toBe(
        defaultTheme.token.colorBgMask
      );
    });
  });

  it('static token', () => {
    expect(token.boxShadow).toBe(defaultTheme.token.boxShadow);
    expect(token.boxShadowSecondary).toBe(defaultTheme.token.boxShadowSecondary);
  });

  it('static token in ConfigProvider', () => {
    render(
      <ConfigProvider>
        <div />
      </ConfigProvider>
    );
    expect(token.boxShadow).toBe(defaultTheme.token.boxShadow);
    expect(token.boxShadowSecondary).toBe(defaultTheme.token.boxShadowSecondary);
  });

  describe('multiple roots', () => {
    interface DetachedRoot {
      container: HTMLDivElement;
      root: Root;
    }

    let detachedRoots: DetachedRoot[] = [];

    // simulate a detached root, such as an alert rendered into its own div
    const mountDetachedRoot = async (
      configProviderProps?: React.ComponentProps<typeof ConfigProvider>
    ): Promise<DetachedRoot> => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const root = createRoot(container);
      await act(async () => {
        root.render(
          <ConfigProvider {...configProviderProps}>
            <div>detached root</div>
          </ConfigProvider>
        );
      });
      const detachedRoot = { container, root };
      detachedRoots.push(detachedRoot);
      return detachedRoot;
    };

    const unmountDetachedRoot = async (target?: DetachedRoot) => {
      const detachedRoot = target ?? detachedRoots[detachedRoots.length - 1];
      if (!detachedRoot) {
        return;
      }
      detachedRoots.splice(detachedRoots.indexOf(detachedRoot), 1);
      await act(async () => {
        detachedRoot.root.unmount();
      });
      detachedRoot.container.remove();
    };

    beforeEach(() => {
      detachedRoots = [];
    });

    afterEach(async () => {
      // keep the module-level registry clean even if an assertion fails before unmounting
      while (detachedRoots.length > 0) {
        // eslint-disable-next-line no-await-in-loop
        await unmountDetachedRoot();
      }
      notification.destroy();
      message.destroy();
      Modal.destroyAll();
    });

    it('message falls back to the resident root after a detached root unmounts', async () => {
      const { container } = render(
        <ConfigProvider>
          <Button id="message" onClick={() => message.success('notice-after-detached-message')}>
            message
          </Button>
        </ConfigProvider>
      );

      await mountDetachedRoot();
      await unmountDetachedRoot();

      fireEvent.click(container.querySelector('#message')!);
      // the notice should be rendered by the resident root instead of the destroyed one
      await waitFor(() => {
        expect(document.body.textContent).toContain('notice-after-detached-message');
      });
    });

    it('notification falls back to the resident root after a detached root unmounts', async () => {
      const { container } = render(
        <ConfigProvider>
          <Button
            id="notification"
            onClick={() => notification.info({ message: 'notice-after-detached-notification' })}
          >
            notification
          </Button>
        </ConfigProvider>
      );

      await mountDetachedRoot();
      await unmountDetachedRoot();

      fireEvent.click(container.querySelector('#notification')!);
      await waitFor(() => {
        expect(document.body.textContent).toContain('notice-after-detached-notification');
      });
    });

    it('Modal falls back to the resident root after a detached root unmounts', async () => {
      const { container } = render(
        <ConfigProvider>
          <Button id="modal" onClick={() => Modal.confirm({ title: 'modal-after-detached' })}>
            modal
          </Button>
        </ConfigProvider>
      );

      await mountDetachedRoot();
      await unmountDetachedRoot();

      fireEvent.click(container.querySelector('#modal')!);
      await waitFor(() => {
        expect(document.body.textContent).toContain('modal-after-detached');
      });
    });

    it('falls back to the latest still-mounted root', async () => {
      const { container } = render(
        <ConfigProvider>
          <Button id="first" onClick={() => message.success('notice-before-last-unmount')}>
            first
          </Button>
          <Button id="second" onClick={() => message.success('notice-after-last-unmount')}>
            second
          </Button>
        </ConfigProvider>
      );

      const first = await mountDetachedRoot();
      const second = await mountDetachedRoot();

      // unmount a detached root that is not the latest one,
      // a stack-based rollback would hand over to an already unmounted root
      await unmountDetachedRoot(first);

      fireEvent.click(container.querySelector('#first')!);
      await waitFor(() => {
        expect(document.body.textContent).toContain('notice-before-last-unmount');
      });
      message.destroy();

      // after the last detached root unmounts, the resident root takes over again
      await unmountDetachedRoot(second);

      fireEvent.click(container.querySelector('#second')!);
      await waitFor(() => {
        expect(document.body.textContent).toContain('notice-after-last-unmount');
      });
    });

    it('keeps ownership with the root that mounted last when an earlier root re-renders', async () => {
      const renderResident = (duration: number) => (
        <ConfigProvider notification={{ className: 'resident-notice', duration }}>
          <div>resident root</div>
        </ConfigProvider>
      );
      const { rerender } = render(renderResident(3));

      await mountDetachedRoot({ notification: { className: 'detached-notice' } });

      // a new inline `notification` object changes the duration and therefore the bundle identity
      // of the resident root, but ownership must stay with the root that mounted last
      rerender(renderResident(5));

      message.success('notice-owner');
      await waitFor(() => {
        expect(document.querySelector('.detached-notice')).toBeTruthy();
      });
    });
  });
});
