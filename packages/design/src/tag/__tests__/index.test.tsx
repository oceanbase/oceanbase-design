import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  it('ellipsis is disabled by default', async () => {
    const { container, asFragment } = render(<TagTest />);
    expect(container.querySelector('.ant-typography')).toBeFalsy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis-css')).toBeFalsy();
    expect(container.querySelector('.ant-tag-ellipsis-css-content')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('does not derive native title on hover when ellipsis is disabled by default', async () => {
    const { container } = render(<Tag>Overflowing content</Tag>);
    const tag = container.querySelector('.ant-tag') as HTMLElement;

    fireEvent.mouseEnter(tag);
    expect(tag.getAttribute('title')).toBeNull();
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
    // No static title: it is only derived on hover when the content actually overflows
    expect(container.querySelector('.ant-tag')?.getAttribute('title')).toBeNull();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('css ellipsis sets native title only when content overflows', async () => {
    const { container } = render(<Tag ellipsis="css">Overflowing content</Tag>);
    const tag = container.querySelector('.ant-tag') as HTMLElement;
    const content = container.querySelector('.ant-tag-ellipsis-css-content') as HTMLElement;

    Object.defineProperty(content, 'scrollWidth', { configurable: true, value: 200 });
    Object.defineProperty(content, 'clientWidth', { configurable: true, value: 80 });
    fireEvent.mouseEnter(tag);
    expect(content.getAttribute('title')).toBe('Overflowing content');

    Object.defineProperty(content, 'scrollWidth', { configurable: true, value: 80 });
    fireEvent.mouseEnter(tag);
    expect(content.getAttribute('title')).toBeNull();
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
