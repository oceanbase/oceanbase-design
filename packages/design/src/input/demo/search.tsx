import React from 'react';
import { AudioOutlined } from '@oceanbase/icons';
import { Input, Space, theme } from '@oceanbase/design';
import type { SearchProps } from '@oceanbase/design/es/input';

const { Search } = Input;

const App: React.FC = () => {
  const { token } = theme.useToken();
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: token.colorInfo,
      }}
    />
  );
  const onSearch: SearchProps['onSearch'] = value => {
    console.log(value);
  };

  return (
    <Space direction="vertical">
      <Search allowClear onSearch={onSearch} style={{ width: 200 }} />
      <Search allowClear addonBefore="https://" onSearch={onSearch} style={{ width: 304 }} />
      <Search allowClear enterButton onSearch={onSearch} />
      <Search allowClear enterButton="Search" onSearch={onSearch} />
      <Search suffix={suffix} enterButton="Search" onSearch={onSearch} />
    </Space>
  );
};

export default App;
