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
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <Search
        addonBefore="https://"
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 304 }}
      />
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
    </Space>
  );
};

export default App;
