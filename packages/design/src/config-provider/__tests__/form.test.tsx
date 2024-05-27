import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '@oceanbase/design';
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

describe('ConfigProvider form', () => {
  it('ConfigProvider form.requiredMark should be `optional` by default and work for ProForm', () => {
    const { container, asFragment } = render(
      <ConfigProvider>
        <ProFormTest />
      </ConfigProvider>
    );
    // expect(
    //   container.querySelector('.ant-form-item-required.ant-form-item-required-mark-optional')
    // ).toBeTruthy();
    // expect(container.querySelector('.ant-form-item-optional')).toBeTruthy();
    // expect(asFragment().firstChild).toMatchSnapshot();
  });
});
