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

const flatOptions = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      {
        value: 'react',
        label: 'React',
        children: [
          { value: 'react16', label: 'React 16' },
          { value: 'react17', label: 'React 17' },
          { value: 'react18', label: 'React 18' },
        ],
      },
      {
        value: 'vue',
        label: 'Vue',
        children: [
          { value: 'vue2', label: 'Vue 2' },
          { value: 'vue3', label: 'Vue 3' },
        ],
      },
      {
        value: 'angular',
        label: 'Angular',
        children: [
          { value: 'angular16', label: 'Angular 16' },
          { value: 'angular17', label: 'Angular 17' },
          { value: 'angular18', label: 'Angular 18' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      {
        value: 'java',
        label: 'Java',
        children: [
          { value: 'java8', label: 'Java 8' },
          { value: 'java11', label: 'Java 11' },
          { value: 'java17', label: 'Java 17' },
        ],
      },
      {
        value: 'python',
        label: 'Python',
        children: [
          { value: 'python3', label: 'Python 3' },
          { value: 'python2', label: 'Python 2' },
          { value: 'python3.10', label: 'Python 3.10' },
        ],
      },
      { value: 'go', label: 'Go' },
    ],
  },
];

const App: React.FC = () => {
  const [singleValue, setSingleValue] = useState<string[][]>([]);
  const [multipleValue, setMultipleValue] = useState<string[][]>([]);
  const [flatSingleValue, setFlatSingleValue] = useState<string[]>([]);
  const [flatMultipleValue, setFlatMultipleValue] = useState<string[][]>([]);

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
          value={flatSingleValue}
          onChange={setFlatSingleValue}
          options={flatOptions}
          flat
        />
        <Filter.Cascader
          label="扁平化多选"
          multiple
          value={flatMultipleValue}
          onChange={setFlatMultipleValue}
          options={flatOptions}
          flat
        />
      </Space>
    </Space>
  );
};

export default App;
