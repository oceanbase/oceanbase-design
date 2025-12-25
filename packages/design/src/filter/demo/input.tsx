import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  return (
    <Space wrap>
      <Filter.Input label="输入筛选" value={inputValue} onChange={setInputValue} />
      <Filter.Input
        label="带占位符"
        value={inputValue2}
        onChange={setInputValue2}
        inputProps={{
          placeholder: '请输入关键词',
        }}
      />
      <Filter.Input label="禁用状态" disabled value="" />
      <Filter.Input
        label="自定义 Input 属性"
        value={inputValue}
        onChange={setInputValue}
        inputProps={{
          placeholder: '请输入',
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
