import React, { useState } from 'react';
import { Filter, Space, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [values, setValues] = useState<string[]>([]);
  const [statusValues, setStatusValues] = useState<string[]>([]);

  // 状态选项（包含 color 属性，自动启用状态模式）
  const statusOptions = [
    {
      label: 'success',
      value: 'success',
      color: token.colorSuccess,
    },
    {
      label: 'failure',
      value: 'failure',
      color: token.colorError,
    },
    {
      label: 'processing',
      value: 'processing',
      color: token.colorPrimary,
    },
    {
      label: 'warning',
      value: 'warning',
      color: token.colorWarning,
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space wrap>
        <Filter.Checkbox
          label="标签"
          value={values}
          onChange={setValues}
          options={[
            { value: 'tag1', label: '标签一' },
            { value: 'tag2', label: '标签二' },
            { value: 'tag3', label: '标签三' },
            { value: 'tag4', label: '标签四' },
          ]}
        />
        <Filter.Checkbox
          label="带计数"
          count
          options={[
            { value: 'item1', label: '选项一' },
            { value: 'item2', label: '选项二' },
            { value: 'item3', label: '选项三' },
          ]}
        />
        <Filter.Checkbox
          label="显示总数"
          count={{ showTotal: true }}
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' },
            { value: 'd', label: 'D' },
          ]}
        />
      </Space>

      <Space wrap>
        <Filter.Checkbox
          label="状态模式"
          value={statusValues}
          onChange={setStatusValues}
          options={statusOptions}
        />
        <Filter.Checkbox
          label="状态模式-带计数"
          value={statusValues}
          onChange={setStatusValues}
          count
          options={statusOptions}
        />
        <Filter.Checkbox
          label="状态模式-显示总数"
          value={statusValues}
          onChange={setStatusValues}
          count={{ showTotal: true }}
          options={statusOptions}
        />
      </Space>
    </Space>
  );
};

export default App;
