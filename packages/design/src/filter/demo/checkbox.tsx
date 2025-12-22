import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
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
  );
};

export default App;
