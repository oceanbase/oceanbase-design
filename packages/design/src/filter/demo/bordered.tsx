import React from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Filter.Select
        label="有边框"
        bordered
        options={[
          { value: 'option1', label: '选项一' },
          { value: 'option2', label: '选项二' },
        ]}
      />
      <Filter.Select
        label="无边框"
        bordered={false}
        options={[
          { value: 'option1', label: '选项一' },
          { value: 'option2', label: '选项二' },
        ]}
      />
    </Space>
  );
};

export default App;
