import React, { useState } from 'react';
import { Descriptions, Form, Radio } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: OceanBase
        <br />
        Database version: 3.4
        <br />
        Package: dds.oceanbase.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
];

const App: React.FC = () => {
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal');
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="layout" required={true}>
          <Radio.Group
            value={layout}
            onChange={e => {
              setLayout(e.target.value);
            }}
          >
            <Radio.Button value="horizontal">horizontal</Radio.Button>
            <Radio.Button value="vertical">vertical</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="size" required={true}>
          <Radio.Group
            value={size}
            onChange={e => {
              setSize(e.target.value);
            }}
          >
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="middle">middle</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <br />
      {layout === 'horizontal' ? (
        <>
          <Descriptions title="Custom Size" size={size} items={items} />
          <br />
          <Descriptions bordered title="Custom Size" size={size} items={borderedItems} />
        </>
      ) : (
        <>
          <Descriptions title="Custom Size" size={size} items={items} layout="vertical" />
          <br />
          <Descriptions
            title="Custom Size"
            size={size}
            items={items}
            layout="vertical"
            column={1}
          />
        </>
      )}
    </div>
  );
};

export default App;
