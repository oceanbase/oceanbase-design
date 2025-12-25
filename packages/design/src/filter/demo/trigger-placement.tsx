import React from 'react';
import { Filter, Space, Typography, Radio } from '@oceanbase/design';
import { useState } from 'react';

const { Text } = Typography;

const App: React.FC = () => {
  const [trigger, setTrigger] = useState<'click' | 'hover' | 'focus'>('click');
  const [placement, setPlacement] = useState<
    'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'
  >('bottomLeft');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>Filter 组件支持自定义触发方式和弹出位置。</Text>
      </div>

      <div>
        <Text strong>触发方式（trigger）：</Text>
        <Radio.Group
          value={trigger}
          onChange={e => setTrigger(e.target.value)}
          style={{ marginBottom: 16 }}
        >
          <Radio value="click">click</Radio>
          <Radio value="hover">hover</Radio>
          <Radio value="focus">focus</Radio>
        </Radio.Group>
        <Space wrap>
          <Filter.Select
            label="触发方式"
            trigger={trigger}
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
              { value: 'option3', label: '选项三' },
            ]}
          />
        </Space>
      </div>

      <div>
        <Text strong>弹出位置（placement）：</Text>
        <Radio.Group
          value={placement}
          onChange={e => setPlacement(e.target.value)}
          style={{ marginBottom: 16 }}
        >
          <Radio value="bottomLeft">bottomLeft</Radio>
          <Radio value="bottomRight">bottomRight</Radio>
          <Radio value="topLeft">topLeft</Radio>
          <Radio value="topRight">topRight</Radio>
        </Radio.Group>
        <Space wrap>
          <Filter.Select
            label="弹出位置"
            placement={placement}
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
              { value: 'option3', label: '选项三' },
            ]}
          />
        </Space>
      </div>

      <div>
        <Text strong>组合使用：</Text>
        <Space wrap>
          <Filter.Select
            label="hover + topLeft"
            trigger="hover"
            placement="topLeft"
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
          <Filter.Select
            label="focus + bottomRight"
            trigger="focus"
            placement="bottomRight"
            options={[
              { value: 'option1', label: '选项一' },
              { value: 'option2', label: '选项二' },
            ]}
          />
        </Space>
      </div>
    </Space>
  );
};

export default App;

