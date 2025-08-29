import React from 'react';
import { Badge, Descriptions, Typography } from '@oceanbase/design';

export default () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">
      <Typography.Text copyable editable>
        Zhou Maomao
      </Typography.Text>
    </Descriptions.Item>
    <Descriptions.Item label="Telephone">
      <Badge status="success" text="1810000000" />
    </Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address">
      <Typography.Text ellipsis={{ tooltip: true }} copyable editable>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Typography.Text>
    </Descriptions.Item>
  </Descriptions>
);
