import React from 'react';
import { render } from '@testing-library/react';
import { Button, ConfigProvider } from '@oceanbase/design';
import { PlusOutlined } from '@oceanbase/icons';

describe('ConfigProvider prefixCls', () => {
  it('prefixCls', () => {
    const { container, asFragment } = render(
      <ConfigProvider>
        <Button>button</Button>
        <ConfigProvider prefixCls="customPrefixCls">
          <Button>button</Button>
          <ConfigProvider>
            <Button>button</Button>
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.ant-btn').length).toBe(1);
    expect(container.querySelectorAll('.customPrefixCls-btn').length).toBe(2);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('iconPrefixCls', () => {
    const { container, asFragment } = render(
      <ConfigProvider>
        <PlusOutlined />
        <ConfigProvider iconPrefixCls="customIconPrefixCls">
          <PlusOutlined />
          <ConfigProvider>
            <PlusOutlined />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
    expect(container.querySelectorAll('.anticon').length).toBe(1);
    expect(container.querySelectorAll('.customIconPrefixCls').length).toBe(2);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
