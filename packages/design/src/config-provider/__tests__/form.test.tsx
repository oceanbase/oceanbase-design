import React from 'react';
import { render, act } from '@testing-library/react';
import { ConfigProvider, Form, Input } from '@oceanbase/design';
import type { FormInstance } from '@oceanbase/design';
import { ProForm, ProFormText } from '@oceanbase/ui';
import type { ProFormProps } from '@oceanbase/ui';

const ProFormTest: React.FC<ProFormProps> = props => (
  <ProForm {...props}>
    <ProFormText
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Name is required',
        },
      ]}
    />
    <ProFormText label="Address" name="address" />
  </ProForm>
);

const PreserveFormTest: React.FC<{
  preserve?: boolean;
  onFormReady?: (form: FormInstance) => void;
}> = ({ preserve, onFormReady }) => {
  const [showField, setShowField] = React.useState(true);
  const [form] = Form.useForm();
  React.useEffect(() => {
    onFormReady?.(form);
  }, [form, onFormReady]);
  return (
    <ConfigProvider form={{ preserve }}>
      <button type="button" onClick={() => setShowField(false)}>
        remove
      </button>
      <Form form={form}>
        {showField && (
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
        )}
      </Form>
    </ConfigProvider>
  );
};

describe('ConfigProvider form', () => {
  it('ConfigProvider form.requiredMark should be `optional` by default and work for ProForm', () => {
    const { container, asFragment } = render(
      <ConfigProvider>
        <ProFormTest />
      </ConfigProvider>
    );
    expect(
      container.querySelector('.ant-form-item-required.ant-form-item-required-mark-optional')
    ).toBeTruthy();
    expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider form.preserve=true should keep unmounted field values', () => {
    let formInstance: FormInstance | undefined;
    const { container } = render(
      <PreserveFormTest preserve={true} onFormReady={form => (formInstance = form)} />
    );
    act(() => {
      formInstance?.setFieldValue('name', 'oceanbase');
    });
    // Remove the field from the form
    act(() => {
      container.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(formInstance?.getFieldsValue(true)).toEqual({ name: 'oceanbase' });
  });

  it('unmounted field values should be dropped by default (preserve=false)', () => {
    let formInstance: FormInstance | undefined;
    const { container } = render(<PreserveFormTest onFormReady={form => (formInstance = form)} />);
    act(() => {
      formInstance?.setFieldValue('name', 'oceanbase');
    });
    // Remove the field from the form
    act(() => {
      container.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(formInstance?.getFieldsValue(true)).toEqual({});
  });
});
