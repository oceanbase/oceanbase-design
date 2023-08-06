import { Tooltip } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Tooltip title="This is prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

export default App;
