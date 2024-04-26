import React, { useState } from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState('A');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Space direction="vertical">
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
      <Radio.Group onChange={onChange} value={value} disabled={true}>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
    </Space>
  );
};

export default App;
