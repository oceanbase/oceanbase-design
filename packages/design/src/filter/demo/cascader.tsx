import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const options = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      { value: 'java', label: 'Java' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' },
    ],
  },
  {
    value: 'database',
    label: '数据库',
    children: [
      { value: 'mysql', label: 'MySQL' },
      { value: 'postgresql', label: 'PostgreSQL' },
      { value: 'oceanbase', label: 'OceanBase' },
    ],
  },
];

const App: React.FC = () => {
  const [singleValue, setSingleValue] = useState<string[][]>([]);
  const [multipleValue, setMultipleValue] = useState<string[][]>([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space wrap>
        <Filter.Cascader
          label="单选级联"
          value={singleValue}
          onChange={setSingleValue}
          options={options}
        />
        <Filter.Cascader
          label="多选级联"
          multiple
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
        />
        <Filter.Cascader label="带计数" multiple count options={options} />
        <Filter.Cascader label="显示总数" multiple count={{ showTotal: true }} options={options} />
      </Space>

      <Space wrap>
        <Filter.Cascader
          label="单选+搜索"
          showSearch
          value={singleValue}
          onChange={setSingleValue}
          options={options}
        />
        <Filter.Cascader
          label="多选+搜索"
          showSearch
          multiple
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
        />
      </Space>

      <Space wrap>
        <Filter.Cascader
          label="扁平化单选"
          value={singleValue}
          onChange={setSingleValue}
          options={options}
          flat
        />
        <Filter.Cascader
          label="扁平化多选"
          multiple
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
          flat
        />
      </Space>
    </Space>
  );
};

export default App;
