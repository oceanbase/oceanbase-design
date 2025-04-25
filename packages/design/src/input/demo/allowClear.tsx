import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input defaultValue="Input with clear icon" allowClear onChange={onChange} />
    <TextArea defaultValue="TextArea with clear icon" allowClear onChange={onChange} />
  </Space>
);

export default App;
