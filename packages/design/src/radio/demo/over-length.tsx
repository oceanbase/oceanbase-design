import React, { useState } from 'react';
import { Radio, Space } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState('long');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value="long">
          This is long long long long long long long long long long long long long long long long
          long long long long long long long long text
        </Radio>
        <Radio value="short">This is short text</Radio>
      </Space>
    </Radio.Group>
  );
};

export default App;
