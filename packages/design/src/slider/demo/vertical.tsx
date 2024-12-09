import React from 'react';
import { Slider, Space } from '@oceanbase/design';
import type { SliderSingleProps } from '@oceanbase/design';

const marks: SliderSingleProps['marks'] = {
  0: '0°C',
  20: '20°C',
  40: '40°C',
  60: '60°C',
  80: '80°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const App: React.FC = () => (
  <Space size={70}>
    <Slider vertical defaultValue={30} style={{ height: 300 }} />
    <Slider vertical range step={10} defaultValue={[20, 50]} style={{ height: 300 }} />
    <Slider vertical range marks={marks} defaultValue={[13, 68]} style={{ height: 300 }} />
  </Space>
);

export default App;
