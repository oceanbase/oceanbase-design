import React, { useState } from 'react';
import { Filter, Space, Flex, theme, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [selectValue, setSelectValue] = useState<string>('');

  return (
    <Flex vertical gap={16}>
      <div>
        <Space wrap>
          <Filter.Select
            label="Status"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
            ]}
          />
          <Filter.Select
            label="Type"
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
              { value: 'disabled', label: 'Disabled Option', disabled: true },
            ]}
          />
          <Filter.Select
            label="Disabled"
            disabled
            options={[{ value: 'option1', label: 'Option 1' }]}
          />
          <Filter.Select
            label="Loading"
            loading
            options={[{ value: 'option1', label: 'Option 1' }]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Bordered"
            bordered
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
          <Filter.Select
            label="Borderless"
            bordered={false}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="With Icon"
            icon={<HeaderTableOutlined />}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'disabled', label: 'Disabled Option', disabled: true },
            ]}
          />
          <Filter.Select
            label="footer"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            footer={<Typography.Link>Learn more</Typography.Link>}
          />
          <Filter.Select
            label="Hide suffix icon"
            showSuffixIcon={false}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Auto ellipsis"
            options={[
              {
                value: 'type1',
                label: 'This is a very long option used to test auto ellipsis',
              },
              {
                value: 'type2',
                label: 'This is a very long option used to test auto ellipsis',
              },
            ]}
          />
        </Space>
      </div>
      <div>
        <Space wrap>
          <Filter.Select
            label="Show search"
            showSearch
            options={[
              { value: 'running', label: 'Running' },
              { value: 'stopped', label: 'Stopped' },
              { value: 'pending', label: 'Pending' },
              { value: 'completed', label: 'Completed' },
              { value: 'failed', label: 'Failed' },
              { value: 'cancelled', label: 'Cancelled' },
              { value: 'processing', label: 'Processing' },
              { value: 'waiting', label: 'Waiting' },
            ]}
          />
        </Space>
      </div>
    </Flex>
  );
};

export default App;
