import React, { useState } from 'react';
import { Filter, Slider, Space, Typography, theme } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [containerWidth, setContainerWidth] = useState(300);
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [category, setCategory] = useState<string[][]>([]);

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
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
        <Text>Adjust container width to see responsive collapse:</Text>
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
          border: `1px dashed ${token.colorBorder}`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Filter.ResponsiveGroup
          onApply={() => console.log('Apply clicked')}
          gap={8}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setCategory([]);
          }}
        >
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
              { value: 'type3', label: 'Type 3' },
            ]}
          />
          <Filter.Checkbox
            label="Priority"
            value={priority}
            onChange={setPriority}
            count
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
          <Filter.Cascader
            label="Category"
            value={category}
            onChange={setCategory}
            multiple
            count
            options={categoryOptions}
          />
          <Filter.Select
            label="Source"
            options={[
              { value: 'internal', label: 'Internal' },
              { value: 'external', label: 'External' },
            ]}
          />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        When the container is too narrow to show all filters, the remaining filters are
        automatically collapsed into the &quot;Filter&quot; button.
      </Text>
    </Space>
  );
};

export default App;
