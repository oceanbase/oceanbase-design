import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '@oceanbase/design';
import type { TagProps } from '@oceanbase/design';

const TagTest: React.FC<TagProps> = props => (
  <Tag {...props}>
    <div id="test">
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </div>
  </Tag>
);

describe('Tag', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  it('default ellipsis', async () => {
    const { container, asFragment } = render(<TagTest />);
    expect(container.querySelector('.ant-typography')).toBeTruthy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
    expect(container.querySelector('.ant-tag-ellipsis')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom ellipsis', async () => {
    const { container, asFragment } = render(
      <TagTest
        ellipsis={{
          tooltip: {
            title: 'Custom Tooltip',
          },
        }}
      />
    );
    expect(container.querySelector('.ant-typography')).toBeTruthy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
    expect(container.querySelector('.ant-tag-ellipsis')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('disable ellipsis', async () => {
    const { container, asFragment } = render(<TagTest ellipsis={false} />);
    expect(container.querySelector('.ant-typography')).toBeFalsy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
