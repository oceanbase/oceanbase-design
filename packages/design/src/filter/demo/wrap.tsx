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
        <Text strong>Normal mode (no collapse):</Text>
        <Filter.Wrap>
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
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>Collapse mode:</Text>
        <Filter.Wrap collapsed label="Filter conditions">
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
            options={[
              { value: 'high', label: 'High' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
        </Filter.Wrap>
      </div>

      <div>
        <Text strong>With extra content:</Text>
        <Filter.Wrap
          collapsed
          label="Filter conditions"
          extra={<Text type="secondary">2 filters total</Text>}
        >
          <Filter.Select
            label="Status"
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
            ]}
          />
          <Filter.Select
            label="Type"
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
            ]}
          />
        </Filter.Wrap>
      </div>
    </Space>
  );
};

export default App;
