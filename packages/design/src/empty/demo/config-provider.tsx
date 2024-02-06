import React from 'react';
import { Cascader, List, Select, Space, Table, Transfer, TreeSelect } from '@oceanbase/design';

const style: React.CSSProperties = { width: 200 };

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <h4>Select</h4>
      <Select style={style} />
      <h4>TreeSelect</h4>
      <TreeSelect style={style} treeData={[]} />
      <h4>Cascader</h4>
      <Cascader style={style} options={[]} showSearch />
      <h4>Transfer</h4>
      <Transfer />
      <h4>Table</h4>
      <Table
        style={{ marginTop: 8 }}
        columns={[
          { title: 'Name', dataIndex: 'name', key: 'name' },
          { title: 'Age', dataIndex: 'age', key: 'age' },
        ]}
      />
      <h4>List</h4>
      <List />
    </Space>
  );
};

export default App;
