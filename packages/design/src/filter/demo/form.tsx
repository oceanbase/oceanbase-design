import React from 'react';
import { Filter, Flex, Form, Space, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const handleApply = async () => {
    const values = await form.validateFields();
    console.log('Form values:', values);
  };

  const handleClearAll = () => {
    form.resetFields();
  };

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
      children: [
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
      ],
    },
  ];

  return (
    <Flex gap={16} vertical>
      <div>
        <Text>
          Wrap filter components with <code>Form.Item</code>. Click Apply to log all form values to
          the console.
        </Text>
      </div>
      <Space direction="vertical" size="large" style={{ width: '240px' }}>
        <Form form={form} layout="inline">
          <Filter.ResponsiveGroup onApply={handleApply} onClearAll={handleClearAll}>
            <Form.Item name="status" noStyle>
              <Filter.Select
                icon={<HeaderTableOutlined />}
                label="Status"
                options={[
                  { value: 'running', label: 'Running' },
                  { value: 'stopped', label: 'Stopped' },
                  { value: 'pending', label: 'Pending' },
                ]}
              />
            </Form.Item>

            <Form.Item name="type" noStyle>
              <Filter.Select
                label="Type"
                options={[
                  { value: 'type1', label: 'Type 1' },
                  { value: 'type2', label: 'Type 2' },
                ]}
              />
            </Form.Item>

            <Form.Item name="priority" noStyle>
              <Filter.Checkbox
                label="Priority"
                count
                options={[
                  { value: 'high', label: 'High' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'low', label: 'Low' },
                ]}
              />
            </Form.Item>

            <Form.Item name="category" noStyle>
              <Filter.Cascader label="Category" multiple count options={categoryOptions} />
            </Form.Item>

            <Form.Item name="date" noStyle>
              <Filter.Range label="Date range" />
            </Form.Item>

            <Form.Item name="darkMode" valuePropName="checked" noStyle>
              <Filter.Switch label="Dark mode" />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Input label="Search" />
            </Form.Item>
          </Filter.ResponsiveGroup>
        </Form>

        <Text type="secondary">
          Tip: Open the browser console (F12) and click Apply to see the logged form values.
        </Text>
      </Space>
    </Flex>
  );
};

export default App;
