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

describe('Form', () => {
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

  it('ref should forward to the underlying antd form', () => {
    const ref = React.createRef<React.ComponentRef<typeof Form>>();
    const { container } = render(
      <Form ref={ref}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
      </Form>
    );
    expect(ref.current).toBeTruthy();
    expect(typeof ref.current?.validateFields).toBe('function');
    expect(ref.current?.nativeElement).toBe(container.querySelector('form'));
  });

  // Type-only regression guard: Form / Form.Item must keep antd's generic <Values>
  // inference (validated by `tsc --noEmit`, not by vitest at runtime).
  it('keeps antd-style generic typing for Form and Form.Item', () => {
    const TypedForm = () => {
      const [form] = Form.useForm<{ name: string }>();
      return (
        <Form
          form={form}
          onFinish={values => {
            // Values must be inferred from the form instance, not `any`.
            // @ts-expect-error inferred Values has no `nonexistentProp`
            expect(values.nonexistentProp).toBeUndefined();
            return undefined;
          }}
        />
      );
    };
    render(<TypedForm />);

    render(
      <Form.Item name="name">
        {fieldForm => {
          // render-prop form instance must be typed, not `any`.
          // @ts-expect-error FormInstance has no `nonexistentMethod`
          expect(fieldForm.nonexistentMethod).toBeUndefined();
          return null;
        }}
      </Form.Item>
    );
  });
});
