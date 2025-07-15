import React from 'react';
import { Slider } from '@oceanbase/design';
import type { SliderSingleProps } from '@oceanbase/design';

const marks: SliderSingleProps['marks'] = {
  0: '0°C',
};

const App: React.FC = () => <Slider min={0} max={0} marks={marks} />;

export default App;
