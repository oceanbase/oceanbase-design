import React, { useState } from 'react';
import { Filter, Slider, Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(700);
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [category, setCategory] = useState<string[][]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const categoryOptions = [
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
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>调整容器宽度来查看响应式折叠效果：</Text>
        <Slider
          min={100}
          max={700}
          value={containerWidth}
          onChange={setContainerWidth}
          marks={{
            100: '100px',
            300: '300px',
            500: '500px',
            700: '700px',
          }}
        />
      </div>

      <div
        style={{
          width: containerWidth,
          border: '1px dashed #d9d9d9',
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Filter.ResponsiveGroup
          label="更多筛选"
          onApply={() => console.log('Apply clicked')}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setCategory([]);
          }}
        >
          <Filter.Select
            label="状态"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
              { value: 'pending', label: '待处理' },
            ]}
          />
          <Filter.Select
            label="类型"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
              { value: 'type3', label: '类型三' },
            ]}
          />
          <Filter.Checkbox
            label="优先级"
            value={priority}
            onChange={setPriority}
            count
            options={[
              { value: 'high', label: '高' },
              { value: 'medium', label: '中' },
              { value: 'low', label: '低' },
            ]}
          />
          <Filter.Cascader
            label="分类"
            value={category}
            onChange={setCategory}
            multiple
            count
            options={categoryOptions}
          />
          <Filter.Switch label="暗黑模式" value={darkMode} onChange={setDarkMode} />
          <Filter.Select
            label="来源"
            options={[
              { value: 'internal', label: '内部' },
              { value: 'external', label: '外部' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        当容器宽度不足以显示所有筛选器时，后面的筛选器会自动折叠到"更多筛选"按钮中。
      </Text>
    </Space>
  );
};

export default App;
