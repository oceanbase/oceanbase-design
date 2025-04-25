import React from 'react';
import type { StepsProps } from '@oceanbase/design';
import { Avatar, List, Steps } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i <= 4; i++) {
  dataSource.push({
    title: 'This is title',
    content: `This is long long long long long long long long text`,
  });
}

const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];

const App: React.FC = () => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
            }
            title={<a>{item.title}</a>}
            description={item.content}
          />
          <Steps
            style={{ marginTop: 8 }}
            type="inline"
            current={item.current}
            status={item.status as StepsProps['status']}
            items={items}
          />
        </List.Item>
      )}
    />
  </div>
);

export default App;
