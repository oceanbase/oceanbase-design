import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Form, Input } from '@oceanbase/design';
import type { FormProps } from '@oceanbase/design';

const FormTest: React.FC<FormProps> = props => (
  <Form {...props}>
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Name is required',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Address" name="address">
      <Input />
    </Form.Item>
  </Form>
);

describe('Drawer', () => {
  it('requiredMark should be optional by default', () => {
    const { container, asFragment } = render(<FormTest />);
    expect(
      container.querySelector('.ant-form-item-required.ant-form-item-required-mark-optional')
    ).toBeTruthy();
    expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('requiredMark could be changed', () => {
    const { container, asFragment } = render(<FormTest requiredMark={true} />);
    expect(
      container.querySelector('.ant-form-item-required.ant-form-item-required-mark-optional')
    ).toBeFalsy();
    expect(container.querySelector('.ant-form-item-optional')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('requiredMark could be changed by ConfigProvider', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        form={{
          requiredMark: true,
        }}
      >
        <FormTest />
      </ConfigProvider>
    );
    expect(
      container.querySelector('.ant-form-item-required.ant-form-item-required-mark-optional')
    ).toBeFalsy();
    expect(container.querySelector('.ant-form-item-optional')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Form hideRequiredMark should be priority over ConfigProvider form.requiredMark', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        form={{
          requiredMark: true,
        }}
      >
        <FormTest hideRequiredMark={true} />
      </ConfigProvider>
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
