import React, { useState } from 'react';
import { Button, Filter, Space, Tag, Tooltip } from '@oceanbase/design';
import { PlusOutlined, QuestionCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);

  return (
    <Space wrap>
      {/* Filter with tooltip icon */}
      <Filter.Select
        label="Status"
        value={status}
        onChange={setStatus}
        extra={
          <Tooltip title="Select the task status">
            <QuestionCircleOutlined style={{ color: '#8592ad', cursor: 'help' }} />
          </Tooltip>
        }
        options={[
          { value: 'running', label: 'Running' },
          { value: 'stopped', label: 'Stopped' },
          { value: 'pending', label: 'Pending' },
        ]}
      />

      {/* Filter with tag */}
      <Filter.Select
        label="Type"
        value={type}
        onChange={setType}
        extra={
          <Tag color="blue" style={{ margin: 0 }}>
            Important
          </Tag>
        }
        options={[
          { value: 'type1', label: 'Type 1' },
          { value: 'type2', label: 'Type 2' },
        ]}
      />

      {/* Filter with extra action */}
      <Filter.Checkbox
        label="Extra action"
        value={priority}
        onChange={setPriority}
        extra={
          <Button type="link" icon={<PlusOutlined />} size="small">
            Add
          </Button>
        }
        options={[
          { value: 'high', label: 'High' },
          { value: 'medium', label: 'Medium' },
          { value: 'low', label: 'Low' },
        ]}
      />
    </Space>
  );
};

export default App;
