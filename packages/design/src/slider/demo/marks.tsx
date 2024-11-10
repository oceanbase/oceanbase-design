import React from 'react';
import { Slider } from '@oceanbase/design';
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
  <>
    <Slider marks={marks} defaultValue={37} />
    <br />
    <Slider range marks={marks} defaultValue={[26, 37]} />
  </>
);

export default App;
