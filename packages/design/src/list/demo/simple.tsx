import React from 'react';
import { List } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i <= 5; i++) {
  dataSource.push({
    content: `This is long long long long long long long long text`,
  });
}

const App: React.FC = () => (
  <List
    bordered={true}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    dataSource={dataSource}
    renderItem={item => <List.Item>{item.content}</List.Item>}
  />
);

export default App;
