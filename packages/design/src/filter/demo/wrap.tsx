import React, { useState } from 'react';
import { Filter, Space, Typography } from '@oceanbase/design';

const { Text } = Typography;

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text strong>普通模式（不折叠）：</Text>
        <Filter.Wrap>
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
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>折叠模式：</Text>
        <Filter.Wrap collapsed label="筛选条件">
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
            options={[
              { value: 'high', label: '高' },
              { value: 'medium', label: '中' },
              { value: 'low', label: '低' },
            ]}
          />
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>带额外内容：</Text>
        <Filter.Wrap collapsed label="筛选条件" extra={<Text type="secondary">共 2 个筛选器</Text>}>
          <Filter.Select
            label="状态"
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
            ]}
          />
          <Filter.Select
            label="类型"
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
            ]}
          />
        </Filter.Wrap>
      </div>
    </Space>
  );
};

export default App;
