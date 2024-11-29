import React, { useState } from 'react';
import { Flex, Radio, Progress, Space } from '@oceanbase/design';
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
      <Flex gap="small" vertical>
        <Progress size={size} percent={30} />
        <Progress size={size} percent={50} status="active" />
        <Progress size={size} percent={70} status="exception" />
        <Progress size={size} percent={100} />
      </Flex>
    </>
  );
};

export default App;
