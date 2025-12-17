import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('');

  return (
    <Space wrap>
      <Filter.Select
        label="状态"
        value={selectValue}
        onChange={setSelectValue}
        options={[
          { value: 'running', label: '运行中' },
          { value: 'stopped', label: '已停止' },
          { value: 'pending', label: '待处理' },
        ]}
      />
      <Filter.Select
        label="类型"
        options={[
          { value: 'type1', label: '类型一' },
          { value: 'type2', label: '类型二' },
          { value: 'disabled', label: '禁用选项', disabled: true },
        ]}
      />
      <Filter.Select label="禁用状态" disabled options={[{ value: 'option1', label: '选项一' }]} />
      <Filter.Select label="加载中" loading options={[{ value: 'option1', label: '选项一' }]} />
    </Space>
  );
};

export default App;
