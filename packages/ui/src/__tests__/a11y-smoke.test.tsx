import React from 'react';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it, vi } from 'vitest';
import { Button, ConfigProvider } from '@oceanbase/design';
import {
  BasicLayout,
  BatchOperationBar,
  Dialog,
  FooterToolbar,
  FullscreenBox,
  NavMenu,
  Password,
  DateRanger,
} from '@oceanbase/ui';

vi.mock('screenfull', () => ({
  default: {
    isFullscreen: false,
    on: vi.fn(),
    off: vi.fn(),
    request: vi.fn(() => Promise.resolve()),
    exit: vi.fn(() => Promise.resolve()),
  },
}));

async function expectNoSeriousViolations(container: HTMLElement) {
  const results = await axe.run(container, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
  });
  const impactful = results.violations.filter(
    v => v.impact === 'critical' || v.impact === 'serious'
  );
  expect(impactful, JSON.stringify(impactful, null, 2)).toEqual([]);
}

describe('ui a11y smoke (axe)', () => {
  it('BatchOperationBar with selection has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <BatchOperationBar selectedRows={[1, 2]} open />
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('FullscreenBox default header has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <FullscreenBox header="Metrics">
          <Button>Refresh</Button>
        </FullscreenBox>
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('NavMenu navigation landmark has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <NavMenu
          menuList={[
            { key: '1', title: 'Home', link: '/' },
            { key: '2', title: 'Settings', link: '/settings' },
          ]}
        />
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('FooterToolbar has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <FooterToolbar>
          <Button type="primary">Save</Button>
        </FooterToolbar>
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('Password field has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <Password value="Abcdef12!@" onChange={() => {}} />
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('DateRanger has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <DateRanger hasSync={false} hasRewind={false} hasForward={false} />
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('BasicLayout shell has no serious or critical violations', async () => {
    const { container } = render(
      <ConfigProvider>
        <BasicLayout
          location={{ pathname: '/home' }}
          logoUrl="https://example.com/logo.png"
          topHeader={{}}
          menus={[
            { link: '/home', title: 'Home' },
            { link: '/settings', title: 'Settings' },
          ]}
        >
          <div>Page content</div>
        </BasicLayout>
      </ConfigProvider>
    );
    await expectNoSeriousViolations(container);
  });

  it('Dialog open state has no serious or critical violations', async () => {
    const { baseElement } = render(
      <ConfigProvider>
        <Dialog visible title="Help" clientWidth={1024} clientHeight={768} onClose={() => {}}>
          <Button type="primary">Confirm</Button>
        </Dialog>
      </ConfigProvider>
    );
    await expectNoSeriousViolations(baseElement);
  });
});
