import React from 'react';
import { Switch } from '@oceanbase/design';

const App: React.FC = () => (
  <>
    <Switch defaultChecked disabled={true} />
    <br />
    <Switch disabled={true} size="small" />
  </>
);

export default App;
