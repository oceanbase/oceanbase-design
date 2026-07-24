import React, { useState } from 'react';
import { Button, Filter, Form, Input, Slider, Space, Typography, theme } from '@oceanbase/design';
import { SearchOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [containerWidth, setContainerWidth] = useState(300);
  const [form] = Form.useForm();

  const categoryOptions = [
    {
      value: 'frontend',
      label: 'Frontend',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
    },
    {
      value: 'backend',
      label: 'Backend',
      children: [
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'go', label: 'Go' },
      ],
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>Adjust container width to see responsive collapse:</Text>
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

      <div
        style={{
          width: containerWidth,
          border: `1px dashed ${token.colorBorder}`,
          padding: 16,
          borderRadius: 8,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 8,
        }}
      >
        <Form layout="inline" form={form} style={{ gap: 8, width: '100%', flexWrap: 'nowrap' }}>
          <Filter.ResponsiveGroup
            onApply={() => console.log(form.getFieldsValue())}
            gap={8}
            onClearAll={() => {
              form.resetFields();
            }}
          >
            <Form.Item name="input" noStyle>
              <Input style={{ width: 100 }} />
            </Form.Item>
            <Form.Item name="status" noStyle>
              <Filter.Checkbox
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
                  { value: 'type3', label: 'Type 3' },
                ]}
              />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Slot label="Search" formatValue={val => val}>
                <Input prefix={<SearchOutlined />} placeholder="Search..." allowClear />
              </Filter.Slot>
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
            <Button>Action</Button>
          </Filter.ResponsiveGroup>
        </Form>
      </div>

      <Text type="secondary">
        Complex scenario, typically used for page-level Extra handling multiple use cases
      </Text>
    </Space>
  );
};

export default App;
