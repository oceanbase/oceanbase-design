import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked loading={true} />
    <br />
    <Switch loading={true} size="small" />
  </>
);

export default App;
