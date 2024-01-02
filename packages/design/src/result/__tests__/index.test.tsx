import React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from '@oceanbase/design';
import type { DrawerProps } from '@oceanbase/design';
import { waitFakeTimer } from '../../../../../tests/util';

const DrawerTest: React.FC<DrawerProps> = props => (
  <Drawer
    title="Title"
    open={true}
    // for snapshot test
    getContainer={false}
    {...props}
  >
    Here is content of Drawer
  </Drawer>
);

describe('Drawer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  it('render correctly', async () => {
    const { container, asFragment } = render(<DrawerTest />);
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-body-content')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with default footer', async () => {
    const { container, asFragment } = render(<DrawerTest footer={true} />);
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-footer-content')).toBeTruthy();
    expect(container.querySelectorAll('.ant-btn').length).toBe(2);
    expect(container.querySelectorAll('.ant-btn-primary').length).toBe(1);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with custom footer', async () => {
    const { container, asFragment } = render(<DrawerTest footer={<div>custom footer</div>} />);
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-footer-content')).toBeTruthy();
    expect(container.querySelector('.ant-drawer-footer-content').textContent).toBe('custom footer');
    expect(container.querySelector('.ant-btn')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with onOk', async () => {
    const { container, asFragment } = render(<DrawerTest onOk={() => {}} />);
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-footer-content')).toBeTruthy();
    expect(container.querySelectorAll('.ant-btn').length).toBe(2);
    expect(container.querySelectorAll('.ant-btn-primary').length).toBe(1);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with okText and cancenText', async () => {
    const { container, asFragment } = render(
      <DrawerTest onOk={() => {}} okText="custom ok text" cancelText="custom cancel text" />
    );
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-footer-content')).toBeTruthy();
    expect(container.querySelector('.ant-btn-primary').textContent).toBe('custom ok text');
    expect(container.querySelector('.ant-btn:not(.ant-btn-primary)').textContent).toBe(
      'custom cancel text'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render with confirmLoading and okButtonProps', async () => {
    const { container, asFragment } = render(
      <DrawerTest onOk={() => {}} confirmLoading={true} okButtonProps={{ danger: true }} />
    );
    await waitFakeTimer();
    expect(container.querySelector('.ant-drawer-footer-content')).toBeTruthy();
    expect(container.querySelectorAll('.ant-btn').length).toBe(2);
    expect(container.querySelectorAll('.ant-btn-dangerous').length).toBe(1);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
