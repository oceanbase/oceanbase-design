import React from 'react';
import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    selects={[
      Ranger.YESTERDAY,
      Ranger.TODAY,
      Ranger.TOMORROW,
      { name: '今年', range: () => [dayjs().startOf('year'), dayjs().endOf('year')] },
    ]}
  />
);
