import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '@oceanbase/design';
import type { TagProps } from '@oceanbase/design';
import { vi } from 'vitest';

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
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllTimers();
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

  it('css ellipsis renders lightweight structure without typography', async () => {
    const { container, asFragment } = render(
      <Tag ellipsis="css">
        Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
        excess.Show ellipsis for excess.
      </Tag>
    );
    expect(container.querySelector('.ant-typography')).toBeFalsy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis-css')).toBeTruthy();
    expect(container.querySelector('.ant-tag-ellipsis-css-content')).toBeTruthy();
    // 字符串 children 自动派生原生 title
    const tag = container.querySelector('.ant-tag');
    expect(tag?.getAttribute('title')).toBe(
      'Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('css ellipsis prefers explicit title prop', async () => {
    const { container } = render(
      <Tag ellipsis="css" title="Explicit Title">
        Show ellipsis for excess.Show ellipsis for excess.
      </Tag>
    );
    expect(container.querySelector('.ant-tag')?.getAttribute('title')).toBe('Explicit Title');
  });

  it('css ellipsis does not derive title from structured children', async () => {
    const { container } = render(
      <Tag ellipsis="css">
        <span>Structured</span>
      </Tag>
    );
    expect(container.querySelector('.ant-tag')?.getAttribute('title')).toBeNull();
  });
});
