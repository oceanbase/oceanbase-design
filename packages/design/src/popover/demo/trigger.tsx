import React from 'react';
import { Button, Popover, Space } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const App: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="hover">
      <Button>hover</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>focus</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>click</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="contextMenu">
      <Button>contextMenu</Button>
    </Popover>
  </Space>
);

export default App;
