import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <DateRanger
    defaultValue={[dayjs('2019/05/20'), dayjs('2019/06/20')]}
    selects={[DateRanger.YESTERDAY, DateRanger.TODAY]}
  />
);
