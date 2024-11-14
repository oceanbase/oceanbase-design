import React, { useState } from 'react';
import { Flex, Radio, Space, Progress } from '@oceanbase/design';
import type { ProgressSize } from '@oceanbase/design/es/progress';

const App: React.FC = () => {
  const [size, setSize] = useState<ProgressSize>('default');
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        Size:
        <Radio.Group
          value={size}
          onChange={e => {
            setSize(e.target.value);
          }}
        >
          <Radio value="default">default</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
      </Space>
      <Flex gap="small">
        <Progress size={size} type="circle" percent={75} />
        <Progress size={size} type="circle" percent={70} status="exception" />
        <Progress size={size} type="circle" percent={100} />
      </Flex>
    </>
  );
};

export default App;
