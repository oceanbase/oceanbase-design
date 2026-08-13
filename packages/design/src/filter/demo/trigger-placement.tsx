import React from 'react';
import { Filter, Space, Typography, Radio } from '@oceanbase/design';
import { useState } from 'react';

const { Text } = Typography;

const App: React.FC = () => {
  const [trigger, setTrigger] = useState<'click' | 'hover' | 'focus'>('click');
  const [placement, setPlacement] = useState<
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
  >('bottomLeft');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Text>Filter supports custom trigger and placement.</Text>
      </div>

      <div>
        <Text strong>Trigger mode (trigger):</Text>
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
            label="Trigger mode"
            trigger={trigger}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
        </Space>
      </div>

      <div>
        <Text strong>Placement (placement):</Text>
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
            label="Placement"
            placement={placement}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
        </Space>
      </div>

      <div>
        <Text strong>Combined usage:</Text>
        <Space wrap>
          <Filter.Select
            label="hover + topLeft"
            trigger="hover"
            placement="topLeft"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
          <Filter.Select
            label="focus + bottomRight"
            trigger="focus"
            placement="bottomRight"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />
        </Space>
      </div>
    </Space>
  );
};

export default App;
