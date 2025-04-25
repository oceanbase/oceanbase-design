import React from 'react';
import { Input, Space } from '@oceanbase/design';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input showCount maxLength={20} onChange={onChange} />
    <TextArea showCount maxLength={100} onChange={onChange} />
  </Space>
);

export default App;
