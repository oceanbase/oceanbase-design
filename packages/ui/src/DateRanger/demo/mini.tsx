import React from 'react';
import { Space } from '@oceanbase/design';
import { DateRanger } from '@oceanbase/ui';

export default () => (
  <Space size={24} direction="vertical">
    <DateRanger
      mode="mini"
      selects={[DateRanger.YESTERDAY, DateRanger.TODAY, DateRanger.TOMORROW]}
    />
    <DateRanger
      mode="mini"
      quickType="dropdown"
      selects={[DateRanger.YESTERDAY, DateRanger.TODAY, DateRanger.TOMORROW]}
    />
  </Space>
);
