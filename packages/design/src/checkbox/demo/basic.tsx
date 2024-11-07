import React from 'react';
import { Checkbox } from '@oceanbase/design';

const App: React.FC = () => (
  <Checkbox
    onChange={e => {
      console.log(`checked: ${e.target.checked}`);
    }}
  >
    Checkbox
  </Checkbox>
);

export default App;
