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
      label: '前端',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
    },
    {
      value: 'backend',
      label: '后端',
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
        <Text>调整容器宽度来查看响应式折叠效果：</Text>
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
                label="状态"
                options={[
                  { value: 'running', label: '运行中' },
                  { value: 'stopped', label: '已停止' },
                  { value: 'pending', label: '待处理' },
                ]}
              />
            </Form.Item>
            <Form.Item name="type" noStyle>
              <Filter.Select
                label="类型"
                options={[
                  { value: 'type1', label: '类型一' },
                  { value: 'type2', label: '类型二' },
                  { value: 'type3', label: '类型三' },
                ]}
              />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Slot label="搜索" customRender formatValue={val => val}>
                <Input prefix={<SearchOutlined />} placeholder="搜索..." allowClear />
              </Filter.Slot>
            </Form.Item>

            <Form.Item name="priority" noStyle>
              <Filter.Checkbox
                label="优先级"
                count
                options={[
                  { value: 'high', label: '高' },
                  { value: 'medium', label: '中' },
                  { value: 'low', label: '低' },
                ]}
              />
            </Form.Item>
            <Form.Item name="category" noStyle>
              <Filter.Cascader label="分类" multiple count options={categoryOptions} />
            </Form.Item>
            <Button>操作</Button>
          </Filter.ResponsiveGroup>
        </Form>
      </div>

      <Text type="secondary">复杂场景，一般用于页面顶部的 Extra 处理多种场景</Text>
    </Space>
  );
};

export default App;
