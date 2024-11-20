import React from 'react';
import { TimePicker } from '@oceanbase/design';

const App: React.FC = () => (
  <TimePicker.RangePicker
    onChange={(times, timeStrings) => {
      console.log(times, timeStrings);
    }}
  />
);

export default App;
