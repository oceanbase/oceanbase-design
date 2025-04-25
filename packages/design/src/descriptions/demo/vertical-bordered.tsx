import React from 'react';
import { Badge, Descriptions } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info" layout="vertical" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
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
    </Descriptions.Item>
  </Descriptions>
);
