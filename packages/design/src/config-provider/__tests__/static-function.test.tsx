import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ConfigProvider, Modal, token } from '@oceanbase/design';
import defaultTheme from '../../theme/default';
import { waitFakeTimer } from '../../../../../tests/util';

describe('ConfigProvider static function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllTimers();
  });

  it('Modal static function', async () => {
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

  it('Modal static function in nested ConfigProvider', async () => {
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
});
