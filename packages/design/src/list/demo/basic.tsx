import React from 'react';
import { Avatar, List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i < 100; i++) {
  dataSource.push({
    title: 'This is title',
    content: `This is long long long long long long long long text`,
  });
}

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://design.oceanbase.com">{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
    pagination={{
      pageSize: 5,
    }}
  />
);

export default App;
