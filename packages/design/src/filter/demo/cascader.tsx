import React, { useState } from 'react';
import { Filter, Space } from '@oceanbase/design';

const options = [
  {
    value: 'frontend',
    label: 'Angulardfghjjkandanwdajkndjkwandkjwnadjakjndwkad',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angulardfghjjkandanwdajkndjkwandkjwnadjakjndwkad' },
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
  );
};

export default App;
