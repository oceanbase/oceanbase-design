import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '@oceanbase/design';
import { TaobaoOutlined } from '@ant-design/icons';

describe('Badge', () => {

  it('icon mode should render correctly', () => {
    const { container, asFragment } = render(<Badge status='success' icon={true} />);
    expect(container.querySelector('.ant-badge-status-icon')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom icon mode should render correctly', () => {
    const { container, asFragment } = render(
      <Badge status='success' icon={<TaobaoOutlined />} />
    );
    expect(container.querySelector('.custom-indicator')).toBeTruthy();
    expect(container.querySelector('.ant-spin-oceanbase')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
