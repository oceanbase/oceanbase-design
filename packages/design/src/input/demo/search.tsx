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
      <Search
        allowClear
        onSearch={onSearch}
        placeholder="input search text"
        style={{ width: 200 }}
      />
      <Search
        allowClear
        addonBefore="https://"
        onSearch={onSearch}
        placeholder="input search text"
        style={{ width: 304 }}
      />
      <Search allowClear enterButton onSearch={onSearch} placeholder="input search text" />
      <Search allowClear enterButton="Search" onSearch={onSearch} placeholder="input search text" />
      <Search
        suffix={suffix}
        enterButton="Search"
        onSearch={onSearch}
        placeholder="input search text"
      />
    </Space>
  );
};

export default App;
