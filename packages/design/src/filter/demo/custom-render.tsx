import React, { useState } from 'react';
import { Filter, Space, Tag } from '@oceanbase/design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const options = [
    { value: 'success', label: '成功' },
    { value: 'warning', label: '警告' },
    { value: 'error', label: '错误' },
  ];

  const colorMap: Record<string, string> = {
    success: 'green',
    warning: 'orange',
    error: 'red',
  };

  return (
    <Space wrap>
      <Filter.Select
        label="自定义渲染"
        value={value}
        onChange={setValue}
        options={options}
        optionRender={option => (
          <Space>
            <Tag color={colorMap[option.value]}>{option.label}</Tag>
            <span style={{ color: '#8592ad' }}>({option.value})</span>
          </Space>
        )}
      />
    </Space>
  );
};

export default App;
