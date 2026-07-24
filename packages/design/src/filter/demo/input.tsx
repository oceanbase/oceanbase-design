import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  return (
    <Space wrap>
      <Filter.Input label="Input filter" value={inputValue} onChange={setInputValue} />
      <Filter.Input
        label="With placeholder"
        value={inputValue2}
        onChange={setInputValue2}
        inputProps={{
          placeholder: 'Please enter keyword',
        }}
      />
      <Filter.Input label="Disabled" disabled value="" />
      <Filter.Input
        label="Custom Input props"
        value={inputValue}
        onChange={setInputValue}
        inputProps={{
          placeholder: 'Please enter',
          allowClear: true,
        }}
        switchProps={{
          size: 'small',
        }}
      />
    </Space>
  );
};

export default App;
