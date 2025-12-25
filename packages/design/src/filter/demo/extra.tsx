import React, { useState } from 'react';
import { Button, Filter, Space, Tag, Tooltip } from '@oceanbase/design';
import { PlusOutlined, QuestionCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priority, setPriority] = useState<string[]>([]);

  return (
    <Space wrap>
      {/* 带提示图标的筛选器 */}
      <Filter.Select
        label="状态"
        value={status}
        onChange={setStatus}
        extra={
          <Tooltip title="选择任务的状态">
            <QuestionCircleOutlined style={{ color: '#8592ad', cursor: 'help' }} />
          </Tooltip>
        }
        options={[
          { value: 'running', label: '运行中' },
          { value: 'stopped', label: '已停止' },
          { value: 'pending', label: '待处理' },
        ]}
      />

      {/* 带标签的筛选器 */}
      <Filter.Select
        label="类型"
        value={type}
        onChange={setType}
        extra={
          <Tag color="blue" style={{ margin: 0 }}>
            重要
          </Tag>
        }
        options={[
          { value: 'type1', label: '类型一' },
          { value: 'type2', label: '类型二' },
        ]}
      />

      {/* 带额外操作的筛选器 */}
      <Filter.Checkbox
        label="额外操作"
        value={priority}
        onChange={setPriority}
        extra={
          <Button type="link" icon={<PlusOutlined />} size="small">
            Add
          </Button>
        }
        options={[
          { value: 'high', label: '高' },
          { value: 'medium', label: '中' },
          { value: 'low', label: '低' },
        ]}
      />
    </Space>
  );
};

export default App;
