import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from '@oceanbase/design';
import { waitFakeTimer } from '../../../../../tests/util';
import { CloseCircleOutlined } from '@oceanbase/icons';

describe('Tooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
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
    const onClose = jest.fn();
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
});
