import React, { useState } from 'react';
import { Badge, Space, Switch, theme } from '@oceanbase/design';
import { ClockCircleOutlined } from '@oceanbase/icons';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [show, setShow] = useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color={token.colorWarning} />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: token.colorError }} /> : 0} />
      <Badge count={show ? 109 : 0} style={{ backgroundColor: token.colorSuccess }} />
    </Space>
  );
};

export default App;
