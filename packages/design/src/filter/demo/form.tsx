import React from 'react';
import { Filter, Flex, Form, Space, Typography } from '@oceanbase/design';
import { HeaderTableOutlined } from '@oceanbase/icons';

const { Text } = Typography;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const handleApply = async () => {
    const values = await form.validateFields();
    console.log('表单值:', values);
  };

  const handleClearAll = () => {
    form.resetFields();
  };

  const categoryOptions = [
    {
      value: 'frontend',
      label: '前端',
      children: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
      ],
    },
    {
      value: 'backend',
      label: '后端',
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
          使用 <code>Form.Item</code> 包裹筛选组件，点击 Apply 按钮时会在控制台输出所有表单值。
        </Text>
      </div>
      <Space direction="vertical" size="large" style={{ width: '240px' }}>
        <Form form={form} layout="inline">
          <Filter.ResponsiveGroup onApply={handleApply} onClearAll={handleClearAll}>
            <Form.Item name="status" noStyle>
              <Filter.Select
                icon={<HeaderTableOutlined />}
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
                ]}
              />
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

            <Form.Item name="date" noStyle>
              <Filter.Range label="时间段" />
            </Form.Item>

            <Form.Item name="darkMode" valuePropName="checked" noStyle initialValue={false}>
              <Filter.Switch label="暗黑模式" />
            </Form.Item>

            <Form.Item name="search" noStyle>
              <Filter.Input label="搜索" />
            </Form.Item>
          </Filter.ResponsiveGroup>
        </Form>

        <Text type="secondary">
          提示：打开浏览器控制台（F12），点击 Apply 按钮查看输出的表单值。
        </Text>
      </Space>
    </Flex>
  );
};

export default App;
