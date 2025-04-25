import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, Form, Input } from '@oceanbase/design';
import type { FormItemProps } from '@oceanbase/design';

const FormItemTest: React.FC<FormItemProps> = props => (
  <Form.Item label="Name" name="name" {...props}>
    <Input />
  </Form.Item>
);

describe('Form.Item', () => {
  it('action should not work by default', () => {
    const { container, asFragment } = render(
      <Form>
        <FormItemTest />
      </Form>
    );
    expect(container.querySelector('.ant-form-item-action')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('action should not work for default layout', () => {
    const { container, asFragment } = render(
      <Form layout="horizontal">
        <FormItemTest action={<a>Action</a>} />
      </Form>
    );
    expect(container.querySelector('.ant-form-item-action')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('action should not work for horizontal layout', () => {
    const { container, asFragment } = render(
      <Form layout="horizontal">
        <FormItemTest action={<a>Action</a>} />
      </Form>
    );
    expect(container.querySelector('.ant-form-item-action')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('action should work for vertical layout', () => {
    const { container, asFragment } = render(
      <Form layout="vertical">
        <FormItemTest action={<a>Action</a>} />
      </Form>
    );
    expect(container.querySelector('.ant-form-item-action')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
