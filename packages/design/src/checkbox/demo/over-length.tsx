import React, { useState } from 'react';
import { Checkbox, Space } from '@oceanbase/design';
import type { CheckboxGroupProps } from '@oceanbase/design/es/checkbox';

const App: React.FC = () => {
  const [value, setValue] = useState(['long']);

  const onChange: CheckboxGroupProps['onChange'] = value => {
    console.log('checkbox checked', value);
    setValue(value);
  };

  return (
    <Checkbox.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Checkbox value="long">
          This is long long long long long long long long long long long long long long long long
          long long long long long long long long text
        </Checkbox>
        <Checkbox value="short">This is short text</Checkbox>
      </Space>
    </Checkbox.Group>
  );
};

export default App;
