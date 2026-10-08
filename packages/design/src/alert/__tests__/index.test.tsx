import React from 'react';
import { render } from '@testing-library/react';
import { Alert, ConfigProvider } from '@oceanbase/design';

describe('Alert', () => {
  it('should use warning type by default when banner is set without type', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert banner message="Banner message" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert-warning')).toBeTruthy();
  });

  it('should keep the explicit type when banner is set with type', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert banner type="error" message="Banner message" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert-error')).toBeTruthy();
    expect(container.querySelector('.ant-alert-warning')).toBeFalsy();
  });

  it('should render ghost className when ghost is true', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert ghost message="Ghost message" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert.ant-alert-ghost')).toBeTruthy();
  });

  it('should render mini className when mini is true', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert mini message="Mini message" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert.ant-alert-mini')).toBeTruthy();
  });

  it('should render action className when action is provided', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert message="With action" action={<button type="button">Action</button>} />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert.ant-alert-with-action')).toBeTruthy();
  });

  it('should render closable className when closable is true', () => {
    const { container } = render(
      <ConfigProvider>
        <Alert message="Closable message" closable />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-alert.ant-alert-closable')).toBeTruthy();
  });

  it('should render correct message content', () => {
    const { getByText } = render(
      <ConfigProvider>
        <Alert message="Hello OceanBase" />
      </ConfigProvider>
    );
    expect(getByText('Hello OceanBase')).toBeTruthy();
  });
});
