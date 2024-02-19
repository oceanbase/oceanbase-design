import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Tooltip } from '@oceanbase/design';
import { waitFakeTimer, isTooltipOpen } from '../../../../../tests/util';
import { CloseCircleOutlined } from '@oceanbase/icons';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllTimers();
  });

  it('default close icon should render correctly', async () => {
    const { container } = render(
      <Tooltip title="This is prompt text" closeIcon={true}>
        <div id="hello">Hello world!</div>
      </Tooltip>
    );

    const divElement = container.querySelector('#hello');
    fireEvent.mouseEnter(divElement!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).not.toBeNull();
    expect(document.querySelectorAll('.ant-tooltip-close-icon').length).toBe(1);

    // After clicking the close icon, the tooltip disappears.
    fireEvent.click(document.querySelector('.ant-tooltip-close-icon'));
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });

  it('custom close icon should render correctly', async () => {
    const { container } = render(
      <Tooltip title="This is prompt text" closeIcon={<CloseCircleOutlined />}>
        <div id="hello">Hello world!</div>
      </Tooltip>
    );

    const divElement = container.querySelector('#hello');
    fireEvent.mouseEnter(divElement!);
    await waitFakeTimer();
    expect(document.querySelectorAll('.anticon-close-circle').length).toBe(1);

    // After clicking the close icon, the tooltip disappears.
    fireEvent.click(document.querySelector('.ant-tooltip-close-icon'));
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });

  it('check `onOpenChange` arguments', async () => {
    const onClose = vi.fn();
    const { container } = render(
      <Tooltip title="This is prompt text" closeIcon={true} onClose={onClose}>
        <div id="hello">Hello world!</div>
      </Tooltip>
    );

    const divElement = container.querySelector('#hello');
    fireEvent.mouseEnter(divElement!);
    await waitFakeTimer();

    fireEvent.click(document.querySelector('.ant-tooltip-close-icon'));
    expect(onClose).toHaveBeenCalled();

    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });

  it('close icon should work correctly for open', async () => {
    const Demo = () => {
      const [open, setOpen] = useState(true);
      return (
        <Tooltip
          title="This is prompt text"
          open={open}
          closeIcon={true}
          onClose={() => {
            setOpen(false);
          }}
        >
          <button id="button">Button</button>
        </Tooltip>
      );
    };
    const { container } = render(<Demo />);

    // tooltip is open by default
    expect(container.querySelector('.ant-tooltip-open')).not.toBeNull();

    // click close icon => tooltip close
    const closeIconElement = document.querySelector('.ant-tooltip-close-icon');
    fireEvent.click(closeIconElement!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();

    // mouse enter div => tooltip is still closed
    const buttonElement = container.querySelector('#button');
    fireEvent.mouseEnter(buttonElement!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });

  it('close icon should work correctly for visible', async () => {
    const Demo = () => {
      const [visible, setVisible] = useState(true);
      return (
        <Tooltip
          title="This is prompt text"
          visible={visible}
          closeIcon={true}
          onClose={() => {
            setVisible(false);
          }}
        >
          <button id="button">Button</button>
        </Tooltip>
      );
    };
    const { container } = render(<Demo />);

    // tooltip is open by default
    expect(container.querySelector('.ant-tooltip-open')).not.toBeNull();

    // click close icon => tooltip close
    const closeIconElement = document.querySelector('.ant-tooltip-close-icon');
    fireEvent.click(closeIconElement!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();

    // mouse enter div => tooltip is still closed
    const buttonElement = container.querySelector('#button');
    fireEvent.mouseEnter(buttonElement!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });

  it('should hide when title is none', async () => {
    const onOpenChange = vi.fn();

    const { container, rerender } = render(
      <Tooltip
        title="Have a nice day!"
        mouseEnterDelay={0}
        mouseLeaveDelay={0}
        onOpenChange={onOpenChange}
      >
        <div id="hello">Hello world!</div>
      </Tooltip>
    );

    const divElement = container.querySelector('#hello');
    fireEvent.mouseEnter(divElement!);
    await waitFakeTimer();
    expect(onOpenChange).toHaveBeenCalled();
    expect(isTooltipOpen()).toBeTruthy();
    expect(container.querySelector('.ant-tooltip-open')).not.toBeNull();

    fireEvent.mouseLeave(divElement!);
    await waitFakeTimer();
    expect(onOpenChange).toHaveBeenCalled();
    expect(isTooltipOpen()).toBeFalsy();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();

    // update `title` value.
    rerender(
      <Tooltip title="" mouseEnterDelay={0} mouseLeaveDelay={0} onOpenChange={onOpenChange}>
        <div id="hello">Hello world!</div>
      </Tooltip>
    );

    onOpenChange.mockClear();
    fireEvent.mouseEnter(divElement!);
    await waitFakeTimer();
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(isTooltipOpen()).toBeFalsy();
    expect(container.querySelector('.ant-tooltip-open')).toBeNull();
  });
});
