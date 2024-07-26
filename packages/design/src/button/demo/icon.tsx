import React, { useState } from 'react';
import { PlusOutlined } from '@oceanbase/icons';
import { Button, Divider, Radio, Space } from '@oceanbase/design';

const App: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');

  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={e => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Space>
        <Button type="primary" icon={<PlusOutlined />} iconPosition={position}>
          Primary
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position}>
          Default
        </Button>
        <Button type="dashed" icon={<PlusOutlined />} iconPosition={position}>
          Dashed
        </Button>
        <Button icon={<PlusOutlined />} iconPosition={position} />
      </Space>
    </>
  );
};

export default App;
