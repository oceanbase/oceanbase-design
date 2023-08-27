import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from '@oceanbase/design';
import { waitFakeTimer } from '../../../../../tests/util'

describe('Tooltip', () => {
  it('default close icon should render correctly', async () => {
    const { container, asFragment } = render(<Tooltip title="This is prompt text"
      closeIcon={true}
    >
      <div id="hello">Hello world!</div>
    </Tooltip>);

    const divElement = container.querySelector('#hello');
    fireEvent.mouseEnter(divElement!);
    waitFakeTimer()
    expect(container.querySelectorAll('.ant-tooltip-close-icon').length).toBe(1);
    expect(container.querySelector('.ant-tooltip-hidden')).toBeNull()

    // After clicking the close icon, the tooltip disappears.
    fireEvent.click(container.querySelector('.ant-tooltip-close-icon'))
    expect(container.querySelector('.ant-tooltip-hidden')).not.toBeNull()
  });
});
