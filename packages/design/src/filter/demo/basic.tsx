import React, { useState } from 'react';
import { Filter, Space, Flex } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>('');

  return (
    <Flex vertical gap={16}>
      <div>
        <Space wrap>
          <Filter.Select
            label="状态"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'running', label: '运行中' },
              { value: 'stopped', label: '已停止' },
              { value: 'pending', label: '待处理' },
            ]}
          />
          <Filter.Select
            label="类型"
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
              { value: 'disabled', label: '禁用选项', disabled: true },
            ]}
          />
          <Filter.Select
            label="禁用状态"
            disabled
            options={[{ value: 'option1', label: '选项一' }]}
          />
          <Filter.Select label="加载中" loading options={[{ value: 'option1', label: '选项一' }]} />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="有边框"
            bordered
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
          <Filter.Select
            label="无边框"
            bordered={false}
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="带图标"
            icon={<HeaderTableOutlined />}
            options={[
              { value: 'type1', label: '类型一' },
              { value: 'type2', label: '类型二' },
              { value: 'disabled', label: '禁用选项', disabled: true },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="内容自动缩略"
            options={[
              { value: 'type1', label: '这是一个非常长的选项，用来测试内容自动缩略功能' },
              { value: 'type2', label: '这是一个非常长的选项，用来测试内容自动缩略功能' },
            ]}
          />
        </Space>
      </div>
    </Flex>
  );
};

export default App;
