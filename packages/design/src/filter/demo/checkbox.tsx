import React, { useState } from 'react';
import { Filter, Space, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [values, setValues] = useState<string[]>([]);
  const [statusValues, setStatusValues] = useState<string[]>([]);

  // Status options (with color property, enables status mode automatically)
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
          label="Tags"
          value={values}
          onChange={setValues}
          options={[
            { value: 'tag1', label: 'Tag 1' },
            { value: 'tag2', label: 'Tag 2' },
            { value: 'tag3', label: 'Tag 3' },
            { value: 'tag4', label: 'Tag 4' },
          ]}
        />
        <Filter.Checkbox
          label="With count"
          count
          options={[
            { value: 'item1', label: 'Option 1' },
            { value: 'item2', label: 'Option 2' },
            { value: 'item3', label: 'Option 3' },
          ]}
        />
        <Filter.Checkbox
          label="Show total"
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
          label="Status mode"
          value={statusValues}
          onChange={setStatusValues}
          options={statusOptions}
        />
        <Filter.Checkbox
          label="Status mode with count"
          value={statusValues}
          onChange={setStatusValues}
          count
          options={statusOptions}
        />
        <Filter.Checkbox
          label="Status mode show total"
          value={statusValues}
          onChange={setStatusValues}
          count={{ showTotal: true }}
          options={statusOptions}
        />
      </Space>

      <Space wrap>
        <Filter.Checkbox
          label="Show search"
          showSearch
          options={[
            { value: 'tag1', label: 'Tag 1' },
            { value: 'tag2', label: 'Tag 2' },
            { value: 'tag3', label: 'Tag 3' },
            { value: 'tag4', label: 'Tag 4' },
            { value: 'tag5', label: 'Tag 5' },
            { value: 'tag6', label: 'Tag 6' },
            { value: 'tag7', label: 'Tag 7' },
            { value: 'tag8', label: 'Tag 8' },
          ]}
        />
        <Filter.Checkbox
          label="Status search"
          showSearch
          value={statusValues}
          onChange={setStatusValues}
          count
          options={statusOptions}
        />
      </Space>
    </Space>
  );
};

export default App;
