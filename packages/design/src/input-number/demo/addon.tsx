import React from 'react';
import { Cascader, InputNumber, Select, Space } from '@oceanbase/design';
import { SettingOutlined } from '@oceanbase/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add">
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD">
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

const App: React.FC = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
    <InputNumber
      addonBefore={
        <Cascader placeholder="cascader" style={{ width: 100 }} dropdownMatchSelectWidth={false} />
      }
      defaultValue={100}
    />
  </Space>
);

export default App;
