import React, { useState } from 'react';
import { Filter, Space, theme } from '@oceanbase/design';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [statusListValue, setStatusListValue] = useState<string[]>([]);

  const statusList = [
    {
      label: 'success',
      value: 'success',
      color: token.colorSuccess,
    },
    {
      label: 'failure',
      value: 'failure',
      color: token.colorError,
    },
    {
      label: 'processing',
      value: 'processing',
      color: token.colorPrimary,
    },
    {
      label: 'warning',
      value: 'warning',
      color: token.colorWarning,
    },
  ];

  return (
    <Space wrap>
      <Filter.Status
        label="状态"
        value={statusListValue}
        onChange={setStatusListValue}
        options={statusList}
      />
      <Filter.Status
        label="带计数"
        value={statusListValue}
        onChange={setStatusListValue}
        count
        options={statusList}
      />
      <Filter.Status
        label="显示总数"
        value={statusListValue}
        onChange={setStatusListValue}
        count={{ showTotal: true }}
        options={statusList}
      />
    </Space>
  );
};

export default App;
