import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '@oceanbase/design';
import { TaobaoOutlined } from '@oceanbase/icons';

describe('Badge', () => {
  it('status dot', () => {
    const { container, asFragment } = render(<Badge status="success" text="Success" />);
    // badge
    expect(container.querySelector('.ant-badge')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status')).toBeTruthy();
    // status dot
    expect(container.querySelector('.ant-badge-status-dot')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-success')).toBeTruthy();
    // status text
    expect(container.querySelector('.ant-badge-status-text')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-text').textContent).toBe('Success');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('status icon', () => {
    const { container, asFragment } = render(<Badge status="success" text="Success" icon={true} />);
    // badge
    expect(container.querySelector('.ant-badge')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status')).toBeTruthy();
    // status icon
    expect(container.querySelector('.ant-badge-status-icon')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-success')).toBeTruthy();
    // status text
    expect(container.querySelector('.ant-badge-status-text')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-text').textContent).toBe('Success');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('status custom icon', () => {
    const { container, asFragment } = render(
      <Badge status="success" text="Success" icon={<TaobaoOutlined />} />
    );
    // badge
    expect(container.querySelector('.ant-badge')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status')).toBeTruthy();
    // status icon
    expect(container.querySelector('.ant-badge-status-icon')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-success')).toBeTruthy();
    expect(container.querySelector('.anticon-taobao')).toBeTruthy();
    // status text
    expect(container.querySelector('.ant-badge-status-text')).toBeTruthy();
    expect(container.querySelector('.ant-badge-status-text').textContent).toBe('Success');
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
