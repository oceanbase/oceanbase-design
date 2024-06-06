import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <DateRanger
    defaultQuickValue={DateRanger.THIS_WEEK.name}
    selects={[DateRanger.YESTERDAY, DateRanger.TODAY, DateRanger.THIS_WEEK, DateRanger.THIS_MONTH]}
  />
);
