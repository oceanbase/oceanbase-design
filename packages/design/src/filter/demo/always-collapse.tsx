import React, { useState } from 'react';
import { Filter, Slider, Space, theme, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [containerWidth, setContainerWidth] = useState(300);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <div>
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
        <Text type="secondary">
          In the example below, the &quot;Search&quot; and &quot;Dark mode&quot; filters have the{' '}
          <code>alwaysCollapse</code> prop set. Regardless of container width, they are always
          collapsed into the &quot;Filter&quot; button.
        </Text>
      </div>

      <div
        style={{
          width: containerWidth,
          border: `1px dashed ${token.colorBorder}`,
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Filter.ResponsiveGroup
          onApply={() => console.log('Apply clicked')}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setSearch('');
          }}
        >
          <Filter.Select
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
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
          {/* Always collapsed filter */}
          <Filter.Input label="Search" value={search} onChange={setSearch} alwaysCollapse />
          {/* Always collapsed filter */}
          <Filter.Switch label="Dark mode" value={darkMode} onChange={setDarkMode} alwaysCollapse />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        Tip: Even when the container is wide enough to show all filters, filters with alwaysCollapse
        set to true remain collapsed in the &quot;Filter&quot; button.
      </Text>
    </Space>
  );
};

export default App;
