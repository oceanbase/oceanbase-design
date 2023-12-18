import React from 'react';
import { DateRanger } from '@oceanbase/ui';

const {
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
  NEAR_1_HOURS,
  NEAR_3_HOURS,
  NEAR_6_HOURS,
  TODAY,
  LAST_3_DAYS,
  THIS_WEEK,
  THIS_MONTH,
  THIS_YEAR,
} = DateRanger;
export default () => (
  <DateRanger
    defaultQuickValue={NEAR_30_MINUTES.name}
    selects={[
      NEAR_1_MINUTES,
      NEAR_30_MINUTES,
      NEAR_1_HOURS,
      NEAR_3_HOURS,
      NEAR_6_HOURS,
      TODAY,
      LAST_3_DAYS,
      THIS_WEEK,
      THIS_MONTH,
      THIS_YEAR,
    ]}
  />
);
