import type { RadioChangeEvent } from '@oceanbase/design';
import { Radio, Segmented, Space } from '@oceanbase/design';
import React, { useState } from 'react';

type SizeType = 'small' | 'middle' | 'large';

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <div>
        <Segmented size={size} options={['年度', '季度', '年度']} />
      </div>
    </>
  );
};

export default App;
