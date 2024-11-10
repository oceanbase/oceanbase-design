import React, { useState } from 'react';
import { Slider, Switch } from '@oceanbase/design';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <br />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      <br />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};

export default App;
