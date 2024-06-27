import React from 'react';
import { ConfigProvider } from '@oceanbase/design';
import { ProForm, ProFormText } from '@oceanbase/ui';

const App: React.FC = () => (
  <ConfigProvider>
    <ProForm name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
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
  </ConfigProvider>
);

export default App;
