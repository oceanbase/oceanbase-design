import React, { useState } from 'react';
import { Filter, Space, Flex, theme, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [selectValue, setSelectValue] = useState<string>('');
  const [statusListValue, setStatusListValue] = useState<string[]>([]);

  const statusList = [
    {
      label: 'success',
      value: 'success',
      color: token.colorSuccess,
    },
    {
      label: 'failure',
      value: 'failure',
      color: token.colorError,
    },
    {
      label: 'processing',
      value: 'processing',
      color: token.colorPrimary,
    },
    {
      label: 'warning',
      value: 'warning',
      color: token.colorWarning,
    },
  ];

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
          <Filter.Cascader
            label="footer"
            options={[
              {
                value: 'frontend',
                label: '前端',
                children: [
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular', disabled: true },
                ],
              },
              {
                value: 'backend',
                label: '后端',
                disabled: true,
                children: [
                  { value: 'java', label: 'Java' },
                  { value: 'python', label: 'Python' },
                  { value: 'go', label: 'Go' },
                ],
              },
            ]}
            footer={<Typography.Link>了解更多</Typography.Link>}
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
      <div>
        <Space wrap>
          <Filter.Status
            value={statusListValue}
            onChange={setStatusListValue}
            count={{ showTotal: true }}
            label="Status"
            options={statusList}
          />
          <Filter.DatePreset label="日期" />
        </Space>
      </div>
    </Flex>
  );
};

export default App;
