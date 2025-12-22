import React, { useState } from 'react';
import { Filter, Slider, Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [containerWidth, setContainerWidth] = useState(300);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text strong>示例：使用 alwaysCollapse 属性</Text>
        <br />
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
          下面的示例中，"分类"和"来源"筛选器设置了 <code>alwaysCollapse</code> 属性，
          无论容器宽度是否充足，它们都会被折叠到"更多筛选"按钮中。
        </Text>
      </div>

      <div
        style={{
          width: containerWidth,
          border: '1px dashed #d9d9d9',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Filter.ResponsiveGroup
          label="更多筛选"
          onApply={() => console.log('Apply clicked')}
          onClearAll={() => {
            setStatus('');
            setType('');
            setPriority([]);
            setSearch('');
          }}
        >
          <Filter.Select
            label="状态"
            value={status}
            onChange={setStatus}
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
            ]}
          />
          <Filter.Select
            label="类型"
            value={type}
            onChange={setType}
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
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
          {/* 始终折叠的筛选器 */}
          <Filter.Input label="搜索" value={search} onChange={setSearch} alwaysCollapse />
          {/* 始终折叠的筛选器 */}
          <Filter.Switch label="暗黑模式" value={darkMode} onChange={setDarkMode} alwaysCollapse />
        </Filter.ResponsiveGroup>
      </div>

      <Text type="secondary">
        提示：即使容器宽度足够显示所有筛选器，alwaysCollapse 为 true
        的筛选器也会始终折叠在"更多筛选"按钮中。
      </Text>
    </Space>
  );
};

export default App;
